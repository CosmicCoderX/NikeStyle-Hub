// JavaScript to change text after a delay (or on event)
setTimeout(function() {
    document.getElementById('initial-text').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('initial-text').style.display = 'none';
        document.getElementById('final-text').style.display = 'block';
        document.getElementById('final-text').style.opacity = 1;
    }, 300); // Fade-out duration
}, 3000); // 3 seconds delay

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    links.classList.toggle('active');
});

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(event) {
    const username = this.querySelector('input[name="user"]').value.trim();
    const password = this.querySelector('input[name="password"]').value.trim();
    let isValid = true;

    if (!username) {
        alert('Username cannot be empty.');
        isValid = false;
    }
    if (!password) {
        alert('Password cannot be empty.');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

// Toggle Section Visibility with Animation
function toggleSection(section) {
    const isVisible = section.style.opacity === '1';
    section.style.transition = 'opacity 0.5s ease';
    section.style.opacity = isVisible ? '0' : '1';
    section.style.display = isVisible ? 'none' : 'block';
}

document.querySelector('#showReviews').addEventListener('click', () => toggleSection(document.getElementById('Review')));
document.querySelector('#showServices').addEventListener('click', () => toggleSection(document.getElementById('Servises')));

// Review Carousel with Auto-Play
document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const reviews = document.querySelectorAll('.review_card');
    const totalReviews = reviews.length;
    const interval = 5000; // 5 seconds

    function showReview(index) {
        reviews.forEach((review, i) => {
            review.style.opacity = i === index ? '1' : '0';
            review.style.transition = 'opacity 0.5s ease';
        });
    }

    function nextReview() {
        currentIndex = (currentIndex + 1) % totalReviews;
        showReview(currentIndex);
    }

    function prevReview() {
        currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
        showReview(currentIndex);
    }

    showReview(currentIndex);
    setInterval(nextReview, interval);

    document.querySelector('#nextReview').addEventListener('click', nextReview);
    document.querySelector('#prevReview').addEventListener('click', prevReview);
});

// Enhanced Login Form Validation
document.querySelector('.login_form form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this.querySelector('input[name="user"]').value.trim();
    const password = this.querySelector('input[name="password"]').value.trim();

    if (!username || !password) {
        alert('Please fill out all fields.');
        return;
    }

    if (username === 'testuser' && password === 'password123') {
        alert('Login successful!');
        // Redirect or perform login action here
    } else {
        alert('Invalid username or password.');
    }
});

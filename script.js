// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add 'hidden' class to sections and elements we want to animate
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about-content, .skills-grid .skill-card, .projects-grid .project-card, .contact-item');
    
    animateElements.forEach((el, index) => {
        el.classList.add('hidden');
        
        // Add slight stagger to grid items for cascade effect
        if (el.classList.contains('skill-card') || el.classList.contains('project-card') || el.classList.contains('contact-item')) {
            el.style.transitionDelay = `${(index % 4) * 0.1}s`;
        }
        
        observer.observe(el);
    });
});

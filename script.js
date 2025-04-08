
// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
    navbar.classList.add('sticky');
} else {
    navbar.classList.remove('sticky');
}

// Update active nav link based on scroll position
let current = '';
sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
    }
});
navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains(current)) {
        link.classList.add('active');
    }
});
}); 

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust for navbar height
            behavior: 'smooth'
        });
    });
});

// Highlight Active Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust for navbar height
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
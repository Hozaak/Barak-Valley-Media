// This 'DOMContentLoaded' event makes sure all the HTML is loaded
// before we try to run any JavaScript on it.
document.addEventListener("DOMContentLoaded", () => {

    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800, // animation duration
        once: true, // whether animation should happen only once
    });

    // 2. Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    navToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('-translate-x-full');
        document.body.classList.toggle('overflow-hidden'); // Optional: prevent scrolling when menu is open
    });
    
    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });
    });

    // 3. Scrolled Header Background
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
});


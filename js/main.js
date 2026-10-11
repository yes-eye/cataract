/**
 * 예스안과의원 (Yes Eye Clinic) Main JavaScript
 * Handles accessible mobile navigation and interactive enhancements.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-active');
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (event) => {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-active');
      }
    });

    // Close mobile nav on escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('is-active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-active');
        navToggle.focus();
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus();
        }
      }
    });
  });
});

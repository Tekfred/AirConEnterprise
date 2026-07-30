// Mobile Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('#hamburger-btn');
  const nav = document.querySelector('#main-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
    });
  }

  // Simple Front-end Form Success Feedback
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      const formIds = ['contact-form', 'signin-form', 'sell-listing-form'];
      if (formIds.includes(form.id)) {
        e.preventDefault();
        const successMessage = form.querySelector('.form-success');
        if (successMessage) {
          successMessage.style.display = 'block';
          form.reset();
          setTimeout(() => { successMessage.style.display = 'none'; }, 4000);
        }
      }
    });
  });

  // Scroll-triggered reveal animations
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealElements.forEach(el => observer.observe(el));
  }

  // Staggered popIn for elements with animation-delay inline styles
  // (these are already handled by CSS animation-fill-mode: forwards)
  const popInElements = document.querySelectorAll('.animate-pop-in');
  if (popInElements.length > 0) {
    // Ensure elements stay visible after animation
    popInElements.forEach(el => {
      el.addEventListener('animationend', () => {
        el.style.opacity = '1';
      });
    });
  }
});
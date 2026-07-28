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
    form.addEventListener('submit', (e) => {
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
});

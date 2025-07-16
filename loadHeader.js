document.addEventListener('DOMContentLoaded', function() {
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;

      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('nav-links');

      if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
          navLinks.classList.toggle('show');
        });
      } else {
        console.error('Hamburger or nav-links not found');
      }
    })
    .catch(err => console.error('Header load error:', err));
});
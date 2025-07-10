// loadHeader.js
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // Hamburger toggle for small screens
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    }

    // Dynamically load header styles if needed
    const headerCSS = document.createElement("link");
    headerCSS.rel = "stylesheet";
    headerCSS.href = "header.css";
    document.head.appendChild(headerCSS);
  })
  .catch(error => console.error('Error loading header:', error));

// Smooth scrolling to section when clicking on navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handling
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // Perform form validation and submission logic here
    // You can use an AJAX request to send the form data to a server
    // or simply display a success message
    alert(`Thank you, ${name}! Your message has been submitted.`);
    form.reset();
  });
  
const contactForm = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Simulate form submission delay (replace this with actual form submission code)
  setTimeout(function () {
    // Show confirmation message and hide the form
    contactForm.style.display = 'none';
    confirmationMessage.style.display = 'block';
  }, 2000); // Delay for 2 second (adjust as needed)
});
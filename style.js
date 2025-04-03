// Smooth scroll to contact section
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth'
  });
}

// Form validation and submission
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    alert(`Thank you, ${name}! We will contact you at ${email} soon.`);
    document.querySelector('form').reset(); // Reset form after submission
  } else {
    alert('Please fill out all fields.');
  }
});

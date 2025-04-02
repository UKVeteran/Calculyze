// This script can be used to handle form submissions or other dynamic interactions
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    alert(`Thank you for reaching out, ${name}! We will contact you at ${email}.`);
  } else {
    alert('Please fill out all fields.');
  }
});

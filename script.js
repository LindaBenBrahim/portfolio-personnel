document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupérer les valeurs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name === '' || email === '' || message === '') {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  // Simple feedback (pas d'envoi réel)
  document.getElementById('formMessage').textContent = 
    `Merci, ${name}, votre message a bien été reçu.`;

  // Reset form
  this.reset();
});

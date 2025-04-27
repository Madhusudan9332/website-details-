document.getElementById('requirements-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your response has been submitted.');
    // Here you can add code to send form data to your server or email service
    this.reset();
});

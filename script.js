document.getElementById('requirements-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_sn8otdd', 'template_e7xusag', this)
        .then(function(response) {
           alert('Form submitted successfully! Thank you.');
        }, function(error) {
           alert('Failed to send form. Please try again. ' + JSON.stringify(error));
        });

    this.reset();
});

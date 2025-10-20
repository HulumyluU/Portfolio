// Email functionality using EmailJS
// This file should be kept separate and loaded before script.js

function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    // Send email using EmailJS
    emailjs.send("service_b5qnon9", "template_6nemszr", parms)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Announce success to screen readers
            const liveRegion = document.getElementById('aria-live-region');
            if (liveRegion) {
                liveRegion.textContent = 'Message sent successfully!';
            }
            
            // Show success message to user
            alert('Message sent successfully!');
            
            // Reset form
            document.querySelector('.contact form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            
            // Announce error to screen readers
            const liveRegion = document.getElementById('aria-live-region');
            if (liveRegion) {
                liveRegion.textContent = 'Failed to send message. Please try again.';
            }
            
            // Show error message to user
            alert('Failed to send message. Please try again.');
        });
}
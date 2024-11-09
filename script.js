// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[placeholder="Name"]').value.trim();
    const email = contactForm.querySelector('input[placeholder="Email"]').value.trim();
    const message = contactForm.querySelector('textarea[placeholder="Message"]').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you! Your message has been sent.");
    contactForm.reset();
});

// Helper function for email validation
function validateEmail(email) {
    const emailPattern

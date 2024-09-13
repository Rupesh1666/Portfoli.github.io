document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('nav a[href^="#"], .btn[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = link.getAttribute('href').substring(1); // Get target section ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                console.log(`Scrolling to ${targetId}`); // Debugging log
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle form submission with an alert
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing page
        alert('Message sent successfully!');
        contactForm.reset(); // Optional: Clears the form after submission
    });
});
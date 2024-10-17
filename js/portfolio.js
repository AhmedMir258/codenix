// portfolio.js

// Function to handle animations when scrolling
window.addEventListener('scroll', function() {
    const services = document.querySelectorAll('.service-item');

    services.forEach(service => {
        const rect = service.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the service item is in the viewport
        if (rect.top < windowHeight && rect.bottom >= 0) {
            // Apply animation if not already animated
            if (!service.classList.contains('animated')) {
                service.classList.add('animated');
                service.style.animation = 'fadeInUp 1s ease forwards';
            }
        } else {
            // Remove the animated class when out of view
            service.classList.remove('animated');
            service.style.animation = ''; // Reset animation
        }
    });
});

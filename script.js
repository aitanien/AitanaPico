document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.getElementById("animated-text");
    const verticalRange = 150; // Adjust the range as needed
    let currentY = 0; // Variable to store current Y position
    let targetY = 0; // Variable to store target Y position
    const easingFactor = 0.05; // Adjust the easing factor for slower movement

    function updateTextPosition() {
        // Calculate the distance to move
        const distance = targetY - currentY;

        // Gradually approach the target position
        currentY += distance * easingFactor;

        // Apply the transform
        animatedText.style.transform = `translateY(${currentY}px)`;

        // Request the next frame
        requestAnimationFrame(updateTextPosition);
    }

    updateTextPosition();

    document.addEventListener("mousemove", function(event) {
        const mouseY = event.clientY;
        const centerY = window.innerHeight / 2; // Get the vertical center of the window
        targetY = mouseY - centerY; // Calculate the target Y position

        // Limit targetY to the specified range
        targetY = Math.min(verticalRange, Math.max(-verticalRange, targetY));
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const menuIcon = document.getElementById('menu-icon');

    if (menuToggle && menu && menuIcon) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('show-menu');

            // Change the icon based on the menu visibility
            if (menu.classList.contains('show-menu')) {
                menuIcon.src = 'assets/burgeropen.svg';
            } else {
                menuIcon.src = 'assets/burger.svg';
            }

            // Add the spin animation class
            menuIcon.classList.add('spin-animation');

            // Remove the spin animation class after the animation completes
            setTimeout(function() {
                menuIcon.classList.remove('spin-animation');
            }, 500); // Duration of the spin animation in milliseconds
        });
    }
});


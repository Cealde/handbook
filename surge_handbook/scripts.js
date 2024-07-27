document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.crafting-button');
    const imageDisplay = document.getElementById('image-display');
    const expandedImage = document.getElementById('expanded-image');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const imageSrc = button.getAttribute('data-image');
            expandedImage.src = `images/${imageSrc}`; // Adjust the path as necessary
            imageDisplay.style.display = 'flex';
        });
    });
});

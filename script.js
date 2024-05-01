document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-container img');
    const lightbox = document.getElementById('myLightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    images.forEach(image => {
        image.addEventListener('click', function() {
            lightbox.style.display = 'flex'; // Show the lightbox
            lightboxImage.src = this.src; // Set the src for the lightbox image to the clicked image's src
        });
    });

    lightbox.addEventListener('click', function() {
        lightbox.style.display = 'none'; // Hide the lightbox on click
    });
});
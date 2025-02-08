document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.createElement('div');
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('lightbox-container');

    const imgElement = document.createElement('img');
    imgContainer.appendChild(imgElement);

    const prevButton = document.createElement('button');
    prevButton.innerHTML = "&#10094;"; // Left arrow
    prevButton.classList.add('prev-btn');

    const nextButton = document.createElement('button');
    nextButton.innerHTML = "&#10095;"; // Right arrow
    nextButton.classList.add('next-btn');

    imgContainer.appendChild(prevButton);
    imgContainer.appendChild(nextButton);
    lightbox.appendChild(imgContainer);

    const images = document.querySelectorAll('.grid img');
    let currentIndex = 0;

    function showImage(index) {
        if (index < 0) {
            currentIndex = images.length - 1;
        } else if (index >= images.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        imgElement.src = images[currentIndex].src;
    }

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active');
            showImage(index);
        });
    });

    prevButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex + 1);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                showImage(currentIndex - 1);
            } else if (e.key === 'ArrowRight') {
                showImage(currentIndex + 1);
            } else if (e.key === 'Escape') {
                lightbox.classList.remove('active');
            }
        }
    });
});
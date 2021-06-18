let currentImage = 0;
const images = document.querySelectorAll('.image');
const dots = document.querySelectorAll('.dot');

function showImage(n) {
    images.forEach(image => {
        image.style.display = 'none';
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    images[n].style.display = 'flex';
    dots[n].classList.add('active');
}

function showNext() {
    currentImage >= images.length - 1 ? currentImage = 0 : currentImage++;
    showImage(currentImage);
}

function showPrev() {
    currentImage <= 0 ? currentImage = images.length - 1 : currentImage--;
    showImage(currentImage);
}

function navigateDot() {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showImage(index);
            currentImage = index;
        })
    });
}

// Change image every 5 seconds
function slideShow() {
    setInterval(() => { showNext() }, 5000);
}


document.addEventListener('DOMContentLoaded', showImage(currentImage));
document.querySelector('.prev').addEventListener('click', showPrev);
document.querySelector('.next').addEventListener('click', showNext);
navigateDot();
slideShow();
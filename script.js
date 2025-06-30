
// alternat images

let images = ["/image/left_img.jpg", "/image/limg.jpg"];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("img_left").src = images[currentIndex];
}

setInterval(changeImage, 6000);

let images2 = ["/image/right_img.jpg", "/image/rimg.jpg"];
let currentIndex2 = 0;

function changeImage2() {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    document.getElementById("img_right").src = images2[currentIndex2];
}

setInterval(changeImage2, 6000);



// sliding effect

const sliderTrack = document.getElementById('slider-track');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight) * 2; // Calculate the width of each slide including margin
let currentPosition = 0;

function moveLeft() {
    currentPosition += slideWidth;
    if (currentPosition > 0) {
        currentPosition = -slideWidth * (totalSlides - 4);
        sliderTrack.style.transition = 'none'; // Disable transition for instant reset
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;
        setTimeout(() => {
            sliderTrack.style.transition = 'transform 0.5s ease'; // Re-enable transition
            currentPosition += slideWidth;
            sliderTrack.style.transform = `translateX(${currentPosition}px)`;
        }, 20);
    } else {
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;
    }
}

function moveRight() {
    currentPosition -= slideWidth;
    if (currentPosition < -slideWidth * (totalSlides - 4)) { // Adjust condition based on the number of slides to show at a time
        currentPosition = 0;
        sliderTrack.style.transition = 'none'; // Disable transition for instant reset
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;
        setTimeout(() => {
            sliderTrack.style.transition = 'transform 0.5s ease'; // Re-enable transition
            currentPosition -= slideWidth;
            sliderTrack.style.transform = `translateX(${currentPosition}px)`;
        }, 20);
    } else {
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;
    }
}


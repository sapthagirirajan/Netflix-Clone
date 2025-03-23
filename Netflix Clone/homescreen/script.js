// Select all sliders
const sliders = document.querySelectorAll('.slider-container');

sliders.forEach((slider) => {
  const slides = slider.querySelector('.slides');
  const leftArrow = slider.querySelector('.left-arrow');
  const rightArrow = slider.querySelector('.right-arrow');

  const slideWidth = slider.querySelector('.slide').offsetWidth + 10; // Include gap
  let currentPosition = 0;

  // Total slides and maximum scrollable position
  const totalSlides = slider.querySelectorAll('.slide').length;
  const slidesToShow = 5; // Number of images visible
  const maxPosition = (totalSlides - slidesToShow) * slideWidth;

  rightArrow.addEventListener('click', () => {
    currentPosition += slideWidth * slidesToShow;
    if (currentPosition > maxPosition) currentPosition = maxPosition;
    slides.style.transform = `translateX(-${currentPosition}px)`;
  });

  leftArrow.addEventListener('click', () => {
    currentPosition -= slideWidth * slidesToShow;
    if (currentPosition < 0) currentPosition = 0;
    slides.style.transform = `translateX(-${currentPosition}px)`;
  });

  // Hide arrows if not enough slides
  if (totalSlides <= slidesToShow) {
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  }
});

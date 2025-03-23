// Select slider and navigation arrows
const slides = document.querySelector('.slides');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// Slide width: Adjust to match your slide width including gap
const slideWidth = document.querySelector('.slide').offsetWidth + 10; // 10px is gap
let currentPosition = 0;

// Total slides to determine the limit
const totalSlides = document.querySelectorAll('.slide').length;
const slidesToShow = 5; // Number of slides visible at a time
const maxPosition = (totalSlides - slidesToShow) * slideWidth;

// Move slider to the left
leftArrow.addEventListener('click', () => {
    currentPosition -= slideWidth * slidesToShow; // Move 5 slides back
    if (currentPosition < 0) currentPosition = 0; // Prevent scrolling past the first slide
    slides.style.transform = `translateX(-${currentPosition}px)`;
});

// Move slider to the right
rightArrow.addEventListener('click', () => {
    currentPosition += slideWidth * slidesToShow; // Move 5 slides forward
    if (currentPosition > maxPosition) currentPosition = maxPosition; // Prevent scrolling past last slides
    slides.style.transform = `translateX(-${currentPosition}px)`;
});



// ========== FAQ Accordion Functionality ==========
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('span');

        // Toggle current FAQ item
        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.textContent = "+";
        } else {
            answer.style.display = "block";
            icon.textContent = "−";
        }

        // Close all other FAQ items
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                otherQuestion.nextElementSibling.style.display = "none";
                otherQuestion.querySelector('span').textContent = "+";
            }
        });
    });
});

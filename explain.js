const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

prevBtn.style.display = "none";

// 1. forEach(v, i) -> Overcome CSS property
// dynamic CSS
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// 2. CSS, JS change using "counter"
let counter = 0;

// 3. pass the counterto the function
prevBtn.addEventListener("click", function () {
  counter--;
  carousel(counter);
});

nextBtn.addEventListener("click", function () {
  counter++;
  carousel(counter);
});

function carousel(counter) {
  // if counter is at the last slide, remove nextBtn
  if (counter === slides.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }

  // if counter is at 0 or less, remove prevBtn
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }

  // slide ex) 1 * 100, 2 * 100, 3 * 100
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

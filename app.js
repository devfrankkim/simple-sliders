const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slideImg(counter);
});

nextBtn.addEventListener("click", () => {
  counter++;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  slideImg(counter);
});

function slideImg(counter) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

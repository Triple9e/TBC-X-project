document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.showcase-slide');
  const indicators = document.querySelectorAll('.indicator');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  function updateCarousel() {

    slides.forEach(slide => slide.removeAttribute('data-active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    slides[currentIndex].setAttribute('data-active', true);
    indicators[currentIndex].classList.add('active');
  }


  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });


  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });


  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 3000);


  updateCarousel();
});


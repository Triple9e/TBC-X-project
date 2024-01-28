document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 30) { // You can adjust the value as needed
      header.style.backgroundColor = '#222222f2'; // More transparent
    } else {
      header.style.backgroundColor = '#1A1E1F'; // Less transparent
    }
  });
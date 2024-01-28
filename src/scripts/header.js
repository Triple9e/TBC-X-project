document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 30) { 
      header.style.backgroundColor = '#222222f2'; 
    } else {
      header.style.backgroundColor = '#1A1E1F'; 
    }
  });
  
  // document.querySelector('.hamburger-menu').addEventListener('click', function() {
  //   this.classList.toggle('active');
  //   document.querySelector('.navbar-links').classList.toggle('show');
  // });
  
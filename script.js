// Navbar scrolling background color change
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
          $('.main-nav').addClass('nav-opacity');
           } else {
          $('.main-nav').removeClass('nav-opacity');
    }  
  });

//   Footer Date
let currentYear = new Date().getFullYear();

$("#year").text(currentYear);
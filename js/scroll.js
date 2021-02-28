$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

const navToggler = $('.navbar-toggler');

$("#pb-navbar ul li a[href^='#']").on('click', function (e) {
    if (navToggler.is(':visible')) {
        navToggler.click();
    }
});


$(document).ready(function() {

  const stickyNav = function(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300 ) {
      $('.navbar').addClass('sticky');
      $('.site-navbar').addClass('white');
    } else {
      $('.navbar').removeClass('sticky');
      $('.site-navbar').removeClass('white');
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });
});

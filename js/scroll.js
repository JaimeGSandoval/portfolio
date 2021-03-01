$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

var navToggler = $('.navbar-toggler');
$("#pb-navbar ul li a[href^='#']").on('click', function (e) {
    if (navToggler.is(':visible')) {
        navToggler.click();
    }
});

$(document).ready(function() {
  var stickyNav = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300 ) {
      $('.navbar').addClass('sticky');
      $('.site-navbar').addClass('white');
      $('.nav-link').css('color', 'firebrick');
    } else {
      $('.navbar').removeClass('sticky');
      $('.site-navbar').removeClass('white');
      $('.nav-link').css('color', 'white');
    }
  };
  stickyNav();
  $(window).scroll(function() {
    stickyNav();
  });
});

$(document).ready(function(){
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
      }, 600, function(){

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
  // var stickyNavTop = $('.navbar').offset().top;

  const stickyNav = function(){
    // var scrollTop = $(window).scrollTop();
// scrollTop > stickyNavTop
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300 ) {
      $('.navbar').addClass('sticky');
      $('.navbar').addClass('white');
    } else {
      $('.navbar').removeClass('sticky');
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });
});



// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//     document.querySelector(".navbar").style.position = 'sticky';
//     document.querySelector(".navbar").style.top = "100";
//   } else {
//   }
// }


    // var OnePageNav = function () {
    //     var navToggler = $('.navbar-toggler');
    //     $(".smoothscroll[href^='#'], #pb-navbar ul li a[href^='#']").on('click', function (e) {
    //         e.preventDefault();
    //         var hash = this.hash;

    //         $('html, body').animate({

    //             scrollTop: $(hash).offset().top
    //         }, 700, 'easeInOutExpo', function () {
    //             window.location.hash = hash;
    //         });
    //     });
    //     $("#pb-navbar ul li a[href^='#']").on('click', function (e) {
    //         if (navToggler.is(':visible')) {
    //             navToggler.click();
    //         }
    //     });

    //     $('body').on('activate.bs.scrollspy', function () {
    //         console.log('nice');
    //     })
    // };

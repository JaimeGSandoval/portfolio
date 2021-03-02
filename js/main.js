if (typeof ($.fn.modal) === 'undefined'){
    const mainScript = document.getElementById('main-script');
    const bootJsScript = document.createElement("script");
    bootJsScript.src = "./js/bootstrap/bootstrap.min.js"
    mainScript.parentNode.insertBefore(bootJsScript, mainScript);
}

const bootCdnTest = document.createElement("div");
bootCdnTest.className = "hidden d-none";
document.head.appendChild(bootCdnTest);

const bootStrapLoaded = window.getComputedStyle(bootCdnTest).display === "none";
document.head.removeChild(bootCdnTest);

if (!bootStrapLoaded) {
  const neonTextLink = document.getElementById('neon-text');
  const bootLink = document.createElement("link");
  bootLink.type = "text/css";
  bootLink.rel = "stylesheet";
  bootLink.href = "./css/bootstrap/bootstrap.css";
  neonTextLink.parentNode.insertBefore(bootLink, neonTextLink);
}

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
$("#pb-navbar ul li a[href^='#']").on('click', function () {
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

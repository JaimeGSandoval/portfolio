if (!window.jQuery) {
  var jqueryFallback = document.createElement('script');
  jqueryFallback.src = './js/jquery/jquery.min.js';
  document.head.appendChild(jqueryFallback);

  setTimeout(function () {
    bootstrapJsFallback();
    bootStrapCdnTest();
    scrollEffect();
    navToggleBtn();
    stickyNav();
    dateMaker();
}, 400);
} else {
  bootstrapJsFallback();
  bootStrapCdnTest();
  scrollEffect();
  navToggleBtn();
  stickyNav();
  dateMaker();
}

function bootstrapJsFallback() {
  if (!$.fn.modal) {
    var mainScript = document.getElementById('main-script');
    var bootJsScript = document.createElement('script');
    bootJsScript.src = './js/bootstrap/bootstrap.min.js';
    mainScript.parentNode.insertBefore(bootJsScript, mainScript);
  }
}

function bootStrapCdnTest() {
  var bootCdnTest = document.createElement('div');
  bootCdnTest.className = 'hidden d-none';
  document.head.appendChild(bootCdnTest);

  var bootStrapLoaded = window.getComputedStyle(bootCdnTest).display === 'none';
  document.head.removeChild(bootCdnTest);

  if (!bootStrapLoaded) {
    var neonTextLink = document.getElementById('neon-text');
    var bootLink = document.createElement('link');
    bootLink.type = 'text/css';
    bootLink.rel = 'stylesheet';
    bootLink.href = './css/bootstrap/bootstrap.css';
    neonTextLink.parentNode.insertBefore(bootLink, neonTextLink);
  }
}

function scrollEffect() {
  $(document).ready(function () {
    $('a').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
}

function navToggleBtn() {
  var navToggler = $('.navbar-toggler');
  $("#pb-navbar ul li a[href^='#']").on('click', function () {
    if (navToggler.is(':visible')) {
      navToggler.click();
    }
  });
}

function stickyNav() {
  $(document).ready(function () {
    var stickyNav = function () {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
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
    $(window).scroll(function () {
      stickyNav();
    });
  });
}

function dateMaker(){
  var date = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var today = monthNames[date.getMonth()] + " " + date.getDay() + " " + date.getFullYear();
  var dateText = document.querySelector('.date');
  dateText.textContent = today;
}

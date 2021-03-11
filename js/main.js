if (!window.jQuery) {
  const jqueryFallback = document.createElement('script');
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
    const mainScript = document.getElementById('main-script');
    const bootJsScript = document.createElement('script');
    bootJsScript.src = './js/bootstrap/bootstrap.min.js';
    mainScript.parentNode.insertBefore(bootJsScript, mainScript);
  }
}

function bootStrapCdnTest() {
  const bootCdnTest = document.createElement('div');
  bootCdnTest.className = 'hidden d-none';
  document.head.appendChild(bootCdnTest);

  const bootStrapLoaded = window.getComputedStyle(bootCdnTest).display === 'none';
  document.head.removeChild(bootCdnTest);

  if (!bootStrapLoaded) {
    const neonTextLink = document.getElementById('neon-text');
    const bootLink = document.createElement('link');
    bootLink.type = 'text/css';
    bootLink.rel = 'stylesheet';
    bootLink.href = './css/bootstrap/bootstrap.min.css';
    neonTextLink.parentNode.insertBefore(bootLink, neonTextLink);
  }
}

function scrollEffect() {
  $(document).ready(function () {
    $('a').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
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
  const navToggler = $('.navbar-toggler');
  $("#pb-navbar ul li a[href^='#']").on('click', function () {
    if (navToggler.is(':visible')) {
      navToggler.click();
    }
  });
}

function stickyNav() {
  $(document).ready(function () {
    const stickyNav = function () {
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
  const date = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const today = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  const dateText = document.querySelector('.date');
  dateText.textContent = today;
}

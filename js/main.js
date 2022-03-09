// mobile navbar toggle functionality
const navbarToggleButton = document.querySelector('.navbar-toggle');
const navbarDropdown = document.querySelector('.navbar-dropdown');

navbarToggleButton.addEventListener('click', function (e) {
  navbarDropdown.classList.toggle('showDropdown');
});

window.onclick = (event) => {
  if (
    event.target.matches('.navbar-toggle') ||
    event.target.matches('.hamburger-icon')
  ) {
    return;
  }

  const dropDown = document.querySelector('.navbar-dropdown');
  if (dropDown.classList.contains('showDropdown')) {
    dropDown.classList.remove('showDropdown');
  }
};

// fixed nav on scroll
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.nav-link');

const fixedNav = function (entries) {
  const [entry] = entries;
  const isNotMobile = window.matchMedia('(min-width: 992px)');

  if (!entry.isIntersecting && isNotMobile.matches) {
    navbar.style.position = 'fixed';
    navbar.style.backgroundColor = '#fff';
    navbarLinks.forEach((link) => (link.style.color = 'firebrick'));
  } else if (entry.isIntersecting && isNotMobile.matches) {
    navbar.style.position = 'static';
    navbar.style.backgroundColor = 'transparent';
    navbarLinks.forEach((link) => (link.style.color = 'white'));
  }

  if (!entry.isIntersecting) {
    navbar.style.position = 'fixed';
  } else {
    navbar.style.position = 'static';
  }
};

const headerObserver = new IntersectionObserver(fixedNav, {
  root: null,
  threshold: 0,
  rootMargin: `250px`, // function fires when header is 250px outside the viewport, or 250px within the viewport. The value of true means that yes, the header/observed target is outside the viewport by 250px. A value of false means that no, the header/observed element is is not 250px outside the viewport i.e., it's still within the viewport or outside the viewport by less than 250px
});

headerObserver.observe(header);

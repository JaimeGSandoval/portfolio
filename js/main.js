const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const navbarToggleButton = document.querySelector('.navbar-toggle');
const navbarDropdown = document.querySelector('.navbar-dropdown');
const navbarLinks = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.navbar-list');
const isNotMobile = window.matchMedia('(min-width: 768px)');

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

// event delegation for scrollTo functionality of nav links on click
navList.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');

    // offset scrollTo value because of fixed nav
    const yOffSet = -100;
    const targetElement = document.getElementById(id);
    const yPosition =
      targetElement.getBoundingClientRect().top + window.scrollY + yOffSet;

    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  }
});

// set top value for dropdown
navbarDropdown.style.top = navbar.getBoundingClientRect().height;

// set height of header to avoid content jump when navbar is fixed
header.style.height = `${navbar.getBoundingClientRect().height}px`;

window.addEventListener('resize', function () {
  if (window.innerWidth < window.innerHeight && !isNotMobile.matches) {
    navbarDropdown.style.backgroundColor = '#fff';
    navbarLinks.forEach((link) => (link.style.color = 'rgba(0, 0, 0, 0.5)'));
  } else {
    navbarDropdown.style.backgroundColor = 'transparent';
    navbarLinks.forEach((link) => (link.style.color = 'white'));
  }
});

const fixedNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting && isNotMobile.matches) {
    navbar.style.position = 'fixed';
    navbarDropdown.style.backgroundColor = '#fff';
    navbarLinks.forEach((link) => (link.style.color = 'firebrick'));
  }

  if (entry.isIntersecting && isNotMobile.matches) {
    navbar.style.position = 'static';
    navbarDropdown.style.backgroundColor = 'transparent';
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
  rootMargin: `350px`, // function fires when header is 250px outside the viewport, or 250px within the viewport. The value of true means that yes, the header/observed target is outside the viewport by 250px. A value of false means that no, the header/observed element is is not 250px outside the viewport i.e., it's still within the viewport or outside the viewport by less than 250px
});

headerObserver.observe(header);

function dateMaker() {
  const date = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const today = `${monthNames[date.getMonth()]} ${date.getDate()}
    , ${date.getFullYear()}`;

  const dateText = document.querySelector('.date');
  dateText.textContent = today;
}

dateMaker();

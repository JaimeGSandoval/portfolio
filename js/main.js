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

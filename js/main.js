const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const navbarToggleButton = document.querySelector(".navbar-toggle");
const navbarDropdown = document.querySelector(".navbar-dropdown");
const navbarLinks = document.querySelectorAll(".nav-link");
const navList = document.querySelector(".navbar-list");
const isNotMobile = window.matchMedia("(min-width: 768px)");

navbarToggleButton.addEventListener("click", function (e) {
  navbarDropdown.classList.toggle("showDropdown"),
    document.body.classList.toggle("noScroll");
});

window.onclick = (event) => {
  if (
    event.target.matches(".navbar-toggle") ||
    event.target.matches(".hamburger-icon")
  )
    return;

  const dropDown = document.querySelector(".navbar-dropdown");

  dropDown.classList.contains("showDropdown") &&
    (dropDown.classList.remove("showDropdown"),
    document.body.classList.remove("noScroll"));
};

navList.addEventListener("click", function (e) {
  if ((e.preventDefault(), e.target.classList.contains("nav-link"))) {
    const id = e.target.getAttribute("href"),
      yOffSet = -100,
      yPosition =
        document.getElementById(id).getBoundingClientRect().top +
        window.scrollY +
        yOffSet;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
});

navbarDropdown.style.top = navbar.getBoundingClientRect().height;

if (!navbar.getBoundingClientRect().height) {
  header.style.height = "55.2734375px";
} else {
  header.style.height = `${navbar.getBoundingClientRect().height}px`;
}

console.log(navbar.getBoundingClientRect().height);

window.addEventListener("resize", function () {
  window.innerWidth < window.innerHeight && !isNotMobile.matches
    ? ((navbarDropdown.style.backgroundColor = "#fff"),
      navbarLinks.forEach((link) => (link.style.color = "rgba(0, 0, 0, 0.5)")))
    : window.scrollY < 300 &&
      ((navbarDropdown.style.backgroundColor = "transparent"),
      navbarLinks.forEach((link) => (link.style.color = "white"))),
    window.innerWidth > window.innerHeight &&
      !isNotMobile.matches &&
      ((navbarDropdown.style.backgroundColor = "#fff"),
      navbarLinks.forEach((link) => (link.style.color = "rgba(0, 0, 0, 0.5)")));
});

const fixedNav = function (entries) {
  const [entry] = entries;

  !entry.isIntersecting &&
    isNotMobile.matches &&
    ((navbar.style.position = "fixed"),
    (navbarDropdown.style.backgroundColor = "#1f1f23"),
    navbarLinks.forEach((link) => (link.style.color = "#fff"))),
    entry.isIntersecting &&
      isNotMobile.matches &&
      ((navbar.style.position = "static"),
      (navbarDropdown.style.backgroundColor = "transparent"),
      navbarLinks.forEach((link) => (link.style.color = "white"))),
    entry.isIntersecting
      ? (navbar.style.position = "static")
      : (navbar.style.position = "fixed");
};

headerObserver = new IntersectionObserver(fixedNav, {
  root: null,
  threshold: 0,
  rootMargin: "300px",
});

function dateMaker() {
  const date = new Date(),
    today = `${
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ][date.getMonth()]
    } ${date.getDate()}\n    , ${date.getFullYear()}`;
  document.querySelector(".date").textContent = today;
}

headerObserver.observe(header), dateMaker();

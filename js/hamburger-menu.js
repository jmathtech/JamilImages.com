// Hamburger menu will be activated when the user clicks button.
const hamburgerBtn = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav-menu");

hamburgerBtn.addEventListener("click", function () {
  console.log("hamburger menu clicked");
  nav.classList.toggle("active");
});

// Hamburger menu button animate event to toggle active state
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
});

// Hamburger menu button animate event to toggle inactive state when user clicks button to close menu
document.addEventListener("click", function (event) {
  if (
    !event.target.matches(".hamburger-menu") &&
    !event.target.matches(".hamburger-menu .bar")
  ) {
    let hamburgerMenu = document.querySelector(".hamburger-menu");
    hamburgerMenu.classList.remove("active");
  }
});

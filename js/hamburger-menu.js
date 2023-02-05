// Hamburger menu will be activated when the user clicks button.

const hamburgerBtn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-menu');

hamburgerBtn.addEventListener('click', function () {
  console.log('hamburger menu clicked');
  nav.classList.toggle('active');
});

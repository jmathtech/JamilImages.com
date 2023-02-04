const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
  console.log('hamburger menu clicked');
  nav.classList.toggle('active');
});

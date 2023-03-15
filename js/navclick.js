
// When user clicks the button, the menu will automatically close
const navLinks = document.querySelector(".nav-menu");

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
  
// When user clicks a link from the menu is closed, the scroll position will reset to the top.
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  }, false);
  


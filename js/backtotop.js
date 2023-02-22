// Get the button
var backToTopBtn = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document - just added scroll-behavior: smooth to css.
backToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.querySelectorAll(".back-to-top-btn").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const window = this.getAttribute("href");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

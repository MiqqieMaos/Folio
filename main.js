window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
function toggleMenu() {
  let menuToggler = document.querySelector(".toggle");
  let menu = document.querySelector(".menu");
  menuToggler.classList.toggle("active");
  menu.classList.toggle("active");
}

function hireBtn() {
  if (window.innerWidth < 600) {
    let hireButton = document.querySelector("a#hire");
    hireButton.classList.toggle("heading");
  }
}
window.addEventListener("resize", hireBtn());

// function dis (str){return str.replace(/[aeiou]/gi, '')}


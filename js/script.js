const navToggler = document.querySelector('.navbar-toggler');
const navLinks = document.querySelectorAll(".nav ul li a");

navToggler.addEventListener('click', navToggle);

function navToggle() {
    navToggler.classList.toggle('active');
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
        nav.style.height = nav.scrollHeight + "px"
    } else {
        nav.style.height = ""
    }
}


navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

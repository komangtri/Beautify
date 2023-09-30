const icon = document.getElementById("icon");
const responsiveNav = document.querySelectorAll(".responsive-navbar");

icon.onclick = function () {
  responsiveNav.forEach((element) => {
    element.classList.toggle("active");
  });
};

const navbar = document.getElementsByTagName("header")[0];
window.addEventListener("scroll", function (e) {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navbar.classList.replace("bg-transparant", "nav-color");
  } else if (window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "bg-transparant");
  }
});

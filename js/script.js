const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

nav.addEventListener("click", function (e) {
  if (e.target.className === "menu") {
    nav.classList.toggle("change");
    console.log(nav);
  }
});

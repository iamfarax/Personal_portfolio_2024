let Navbar = document.querySelector(".navbar");
let Navlist = document.querySelector(".navlist");
let Burger = document.querySelector(".burger");
Burger.addEventListener("click", () => {
  Navlist.classList.toggle("v-nav-resp");
  Navbar.classList.toggle("h-nav-resp");
});

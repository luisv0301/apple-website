const hamburMenu = document.getElementById("hambur-menu");
const overlay = document.getElementById("nav");
const navSearch = document.getElementById("nav__search");
const navItems = document.getElementById("nav__items");
const barOne = document.querySelector(".one");
const barTwo = document.querySelector(".two");

hamburMenu.addEventListener("click", () => {
  overlay.classList.toggle("act");
  navSearch.classList.toggle("act");
  navItems.classList.toggle("act");
  barOne.classList.toggle("act");
  barTwo.classList.toggle("act");
});

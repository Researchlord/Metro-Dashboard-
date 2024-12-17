const togglemenu = document.querySelector(".menu");
const navbarRight = document.querySelector(".side-bar");
const closeButton = document.querySelector(".close");
console.log(togglemenu, navbarRight, closeButton);
// Open sidebar when menu is clicked
togglemenu.addEventListener("click", () => {
  console.log("hi");
  navbarRight.classList.add("active");
});

// Close sidebar when close button is clicked
closeButton.addEventListener("click", () => {
  navbarRight.classList.remove("active");
});

// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika yang garis 3 di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

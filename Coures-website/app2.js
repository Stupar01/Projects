const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav__items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
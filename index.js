const btnAbrir = document.getElementById("btnAbrir");
const navMenu = document.querySelector(".nav-menu");

btnAbrir.addEventListener("click", () => {
    navMenu.classList.toggle("visible");
});
const boton = document.querySelector("#toggle-burger");
const div = document.querySelector("#burger-menu");
const menu = document.querySelector("#burger-menu ul.burger");
const botonBusqueda = document.querySelector("#search-button");
const barraBusqueda = document.querySelector("nav form input");

boton.addEventListener("click", () => {
    div.classList.toggle("active");
    menu.classList.toggle("active");
});

botonBusqueda.addEventListener("click", () => {
    barraBusqueda.classList.toggle("active");
});
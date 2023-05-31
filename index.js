const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlaces = document.querySelectorAll("#nav a");

abrir.addEventListener('click', () => {
    nav.classList.add("visible");
});

cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
});

enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        nav.classList.remove("visible");
    });
});
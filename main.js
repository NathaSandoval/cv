function mostrarOcultarMenu() {
  let menu = document.getElementById("nav");
  menu.classList.toggle("responsive");
}

let botonHamburguesa = document.getElementById("botonHamburguesa");
botonHamburguesa.addEventListener("click", mostrarOcultarMenu);
let selectores = document.querySelectorAll("#seleccionar");
for (var i = 0; i < selectores.length; i++) {
  selectores[i].addEventListener("click", mostrarOcultarMenu);
}

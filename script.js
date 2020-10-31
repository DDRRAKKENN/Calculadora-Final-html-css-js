"use strict";

function servicio() {
  document.getElementById("eleccion").innerHTML =
    "Usted eligio el servicio " +
    document.getElementById("sel").value +
    ", Muchas gracias.";
}

function seguro() {
  document.getElementById("seleccionado").innerHTML = document.getElementById(
    "sel"
  ).value;
}

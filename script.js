

alert(
  "BIENVENIDO A TU TORNEO.COM \n A CONTINUACION INGRESA TUS EQUIPOS Y PUNTAJES \n LUEGO LO VERAS REFLEJADO EN LA TABLA"
);
alert("EL TORNEO CONTIENE 4 EQUIPOS Y PODES ELEGIR EL NOMBRE QUE QUIERAS");

for (i = 0; i < 8; i++) {
  if (i > 4) {
    break;
  }
  let equipo = prompt("Ingrese Equipo");
  let puntos = parseInt(prompt("Gano 3,Empato 1 y Perdio 0"));

  console.log(equipo + " " + puntos + "pts");

  if (equipo === "") {
    alert("no ha colocado datos");
  } else if (puntos === "" || (puntos !== 3 && puntos !== 1 && puntos !== 0)) {
    alert("Recuerde que debe colcar las opciones selecionadas");
  }
}


function datos () {

benef = console.log("Ahora que ingresaste todo disfruta de los beneficios de tener tu Torneo organizado TU CLAVE DE ORGANIZADOR ES contra")
contra = "TENES TU DESCUENTO EN LOS PRIMEROS 5 TORNEOS QUE INGRESES  Y PODES SORTEAR UN JUEGO DE CAMISETAS A ELECCION"
if (contra === "contra") {

  alert(contra);

}



}


datos ()
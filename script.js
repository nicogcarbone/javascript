/*
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

  while (equipo === "" || puntos === "") {
    console.log("NO INGRESO DATOS");
    alert("NO INGRESO DATOS");

    if (equipo !== "" || puntos !== "") break;
  }
}

function datos() {
  benef = console.log(
    "Ahora que ingresaste todo disfruta de los beneficios de tener tu Torneo organizado TU CLAVE DE ORGANIZADOR ES contra"
  );
  contra =
    "TENES TU DESCUENTO EN LOS PRIMEROS 5 TORNEOS QUE INGRESES  Y PODES SORTEAR UN JUEGO DE CAMISETAS A ELECCION";
  if (contra === "contra") {
    alert(contra);
  }
}

datos();
*/
class equipos {
  constructor(equipo, puntos) {
    this.equipo = equipo;
    this.puntos = parseInt(puntos);
  }

  datos() {
    for (let e = 0; e < 4; e++)  {
      this.equipo = prompt("ingresa equipo");
      this.puntos = prompt("ingesa puntaje");

      console.log(this.equipo + " " + this.puntos + "pts");

      while (this.equipo === "" || this.puntos === "") {
        console.log("NO INGRESO DATOS");break
      
      }
    }
  }
}




const equipo = new equipos();
equipo.datos();

class inscripciones {
  constructor(torneo, precio) {
    this.torneo = torneo;
    this.precio = parseFloat(precio);
  }

  sumarIva() {
    this.precio = this.precio * 1.21;
  }
}
const torneos = new inscripciones ("EL BIDON", "2066,15");

torneos.sumarIva();

console.log(torneos);
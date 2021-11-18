

let equipo = [];
let puntaje = [];

let cantidad = 4;

do {
  let entrada = prompt("ingrese equipo");
  equipo.push(entrada);

  let puntos = parseInt(prompt("ingrese puntos"));
  puntaje.push(puntos + " pts");

  while (entrada === "" || puntos === "") {
    alert("NO INGRESO DATOS");
    break;
  }
} while (equipo.length != cantidad && puntaje.length != cantidad);

console.log(equipo, puntaje);

const inscripcion = [
  { nombreTorneo: "el bidon $ ", precio: 2800 },
  { nombreTorneo: "torneo tsubasta $ ", precio: 2500 },
];

for (const inscripciones of inscripcion) {
  const iva = (x) => x * 1.21;
  let total = iva(inscripciones.precio);

  console.log(inscripciones.nombreTorneo,total);
}

let equipo = [];
let puntaje = [3, 20, 15, 6];
puntaje.sort(function (a, b) {
  return b - a;
});

let cantidad = 4;

do {
  let entrada = prompt("ingrese equipo");
  equipo.push(entrada);

  while (entrada === "") {
    alert("NO INGRESO DATOS");
    break;
  }
} while (equipo.length != cantidad);

console.log(equipo, puntaje);

const inscripcion = [
  { nombreTorneo: "el bidon $ ", precio: 2800 },
  { nombreTorneo: "torneo tsubasta $ ", precio: 2500 },
];

for (const inscripciones of inscripcion) {
  const iva = (x) => x * 1.21;
  let total = iva(inscripciones.precio);

  console.log(inscripciones.nombreTorneo, total);
}

let torneo = [
  { id: 1, Equipo: "independiente", puntos: 0 },
  { id: 2, Equipo: "juventud deportiva", puntos: 0 },
  { id: 3, Equipo: "Los estudiantes", puntos: 0 },
  { id: 4, Equipo: "San silencio", puntos: 0 },
  { id: 5, Equipo: "Los puchis", puntos: 0 },
  { id: 6, Equipo: "La Cueva", puntos: 0 },
  { id: 7, Equipo: "Parafuso", puntos: 0 },
  { id: 8, Equipo: "Practicos Fc", puntos: 0 },
  { id: 9, Equipo: "Tiro al blanco", puntos: 0 },
  { id: 10, Equipo: "Pedros", puntos: 0 },
  { id: 11, Equipo: "Iglu CF", puntos: 0 },
  { id: 12, Equipo: "Los quilmes", puntos: 0 },
  { id: 13, Equipo: "Libertad", puntos: 0 },
  { id: 14, Equipo: "Denai", puntos: 0 },
  { id: 15, Equipo: "La Cabrera", puntos: 0 },
  { id: 16, Equipo: "Sabia", puntos: 0 },
  { id: 17, Equipo: "Los Chiringuitos", puntos: 0 },
  { id: 18, Equipo: "Flandria", puntos: 0 },
  
];

function sumarPuntos(id) {
  const index = torneo.findIndex((equipo) => equipo.id === id);
  torneo[index].puntos = torneo[index].puntos + 3;
  torneo = torneo.sort((a, b) => b.puntos - a.puntos);
  renderTable();
}
function Empate(id) {
  const index = torneo.findIndex((equipo) => equipo.id === id);
  torneo[index].puntos = torneo[index].puntos + 1;
  torneo = torneo.sort((a, b) => b.puntos - a.puntos);
  renderTable();
}



function renderTable() {
  let contenedor = document.getElementById("tabla");

  contenedor.innerHTML = "";

  torneo.forEach((e) => {
    const row = document.createElement("tr");
    row.classList.add("table-light");
    row.innerHTML = `
      <td>${e.Equipo}</td>
    <td><div class="btn-group btn-group-sm" role="group" aria-label=".btn-group-*"><b>${e.puntos}</b>
    <td><button onclick="sumarPuntos(${e.id})">Gano</button>
    <button onclick="Empate(${e.id})">Empato</button> 
    <button>Perdio</button></td>
    `;

    contenedor.appendChild(row);
  });
}

renderTable();

/*
for (const torneos of torneo) {
let contenedor = document.createElement("div");
contenedor.innerHTML = `
                      <table class="table table-dark table-striped" >
                      <tr class="table-light">
              <th>Posicion: ${torneos.id}</th>
                        <th>${torneos.Equipo}</th>
                      <th><div class="btn-group btn-group-sm" role="group" aria-label=".btn-group-*"><b>${torneos.puntos}</b>
                      <button id="gano">Gano</button>
                      <button>Empato</button> 
                      <button>Perdio</button></th>
                      </div>
                      </tr>
                      
                      </table> 
                    
                        `;

document.body.appendChild(contenedor);
}

*/

/*

let puntaje = [3,6,9,12];
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




let contenedor = document.createElement("div");
contenedor.innerHTML = `<h1>TU TABLA DE POSICIONES</h1>
                       <h3>Equipos:_____________Puntajes:</h3>
                       <h1>${equipo[0]}_______${puntaje [0]}pts</h1> 
                       <h1>${equipo[1]}_______${puntaje[1]}pts</h1>
                       <h1>${equipo[2]}_______${puntaje[2]}pts</h1>
                       <h1>${equipo[3]}_______${puntaje[3]}pts</h1>                    
                       
                       `;

document.body.appendChild(contenedor);


let btnGano = document.getElementById("gano");

btnGano.onclick =() =>  puntaje.push( 3);












const inscripcion = [
  { nombreTorneo: "el bidon $ ", precio: 2800 },
  { nombreTorneo: "torneo tsubasta $ ", precio: 2500 },
];

for (const inscripciones of inscripcion) {
  const iva = (x) => x * 1.21;
  let total = iva(inscripciones.precio);

  console.log(inscripciones.nombreTorneo, total);
}
*/

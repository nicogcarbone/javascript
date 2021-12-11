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




function renderTable() {
  let contenedor = $("#tabla");
  contenedor.html("");

  torneo.forEach((e) => {
    contenedor.append(`
    <tr></tr>
    
    <td>${e.Equipo}</td>
  <td><b>${e.puntos}</b></td>

  <td><button id="sumarPuntos${e.id}">Gano</button>
  <button id="Empate${e.id}">Empato</button> 
  <button>Perdio</button></td>
  
  `)


///////////boton sumaPunto///////////

  $(`#sumarPuntos${e.id}`).on('click' , () =>  {
    const index = torneo.findIndex((equipo) => equipo.id===e.id );
    torneo[index].puntos = torneo[index].puntos + 3;
  
    if (torneo[index].puntos > 30) {
      $(".tabla").prepend(`<h1 id="campeon" style="display-none">¡FELICITACIONES CAMPEON!</h1>`);
      $("#campeon").css({"color":"white",
                  "font-size":"100px",
                  "text-shadow": "0 0 2px black",})
      $("#campeon").fadeOut("slow",function(){
        $("#campeon").fadeIn(1000);
      });
      
      torneo.forEach((p)=>{p.puntos= 0})
      
    }
  
    torneo = torneo.sort((a, b) => b.puntos - a.puntos);
    renderTable();
  })
  //////////boton empate/////////////
  $(`#Empate${e.id}`).on('click' , () => {
    const index = torneo.findIndex((equipo) => equipo.id === e.id);
  torneo[index].puntos = torneo[index].puntos + 1;
  if (torneo[index].puntos > 30) {
    alert("FELICITACIONES SALISTE CAMPEON DEL TORNEO");
    torneo.forEach((p)=>{p.puntos= 0})
  }
  torneo = torneo.sort((a, b) => b.puntos - a.puntos);
  renderTable();
  })
  ;
  });
}

renderTable();





/*

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

const URL = "http://127.0.0.1:5500/equipos.json"

$.get(URL, function(respuesta, estado)
{  if (estado=="success"){
  let torneo = respuesta
  /////////////table //////////////
function renderTable() {
  let contenedor = $("#tabla");
  contenedor.html("");

  torneo.forEach((e) => {
    contenedor.append(`
    <tr></tr>
    
    <td>${e.Equipo}</td>
  <td><b>${e.puntos}</b></td>
   <td><b>${e.PartidosJugados}</b></td> 
  <td>
  <button id="sumarPuntos${e.id}">Gano</button>
  <button id="Empate${e.id}">Empato</button> 
  <button id="Perdio${e.id}>Perdio</button>
 
  </td>
  
  `)


///////////boton sumaPunto///////////

  $(`#sumarPuntos${e.id}`).on('click' , () =>  {
    const index = torneo.findIndex((equipo) => equipo.id===e.id );
    torneo[index].puntos = torneo[index].puntos + 3;

    const i = torneo.findIndex((equipo) => equipo.id===e.id );
    torneo[i].PartidosJugados=torneo[i].PartidosJugados+ 1;


    
    if (torneo[index].puntos > 30) {
      $(".tabla").prepend(`<h1 id="campeon" style="display-none">¡FELICITACIONES CAMPEON!</h1>`);
      $("#campeon").css({"color":"white",
                  "font-size":"100px",
                  "text-shadow": "0 0 2px black",})
      $("#campeon").fadeOut("slow",function(){
        $("#campeon").fadeIn(2000);
        $("#campeon").fadeOut(2000);
       
      });
      
      torneo.forEach((p)=>{p.puntos= 0})
      torneo.forEach((j)=>{j.PartidosJugados=0});
      
    }
  
    torneo = torneo.sort((a, b) => b.puntos - a.puntos);
    renderTable();
  })
  //////////boton empate/////////////
  $(`#Empate${e.id}`).on('click' , () => {
    const index = torneo.findIndex((equipo) => equipo.id === e.id);
  torneo[index].puntos = torneo[index].puntos + 1;

  const i = torneo.findIndex((equipo) => equipo.id===e.id );
  torneo[i].PartidosJugados=torneo[i].PartidosJugados+ 1;

  if (torneo[index].puntos >= 30) {
    $(".tabla").prepend(`<h1 id="campeon" style="display-none">¡FELICITACIONES CAMPEON!</h1>`);
    $("#campeon").css({"color":"white",
                "font-size":"100px",
                "text-shadow": "0 0 2px black",})
    $("#campeon").fadeOut("slow",function(){
      $("#campeon").fadeIn(2000);
      $("#campeon").setTimeout(() => {
       
      },3000);
    });
    
    torneo.forEach((p)=>{p.puntos= 0});
    torneo.forEach((j)=>{j.PartidosJugados=0});
  }

  torneo = torneo.sort((a, b) => b.puntos - a.puntos);
  renderTable();
  })
  ;
  });

  ///////////// boton perdio /////
$(`#Perdio${e.id}`).on("click" , ()=>{



  const i = torneo.findIndex((equipo) => equipo.id===e.id );
    torneo[i].PartidosJugados=torneo[i].PartidosJugados+ 1;
  
  
    
  torneo.forEach((j)=>{j.PartidosJugados=0});
  })
};






renderTable();

  
} })

























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

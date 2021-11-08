


function resultado(textoUno, textoDos) {
  textoUno = prompt("ingrese primer valor");
  textoDos = prompt("ingrese segundo valor");
  textoDos = parseInt (textoDos);
  textoUno= parseInt(textoUno);
  let mensaje = textoUno + textoDos;
  console.log("PRECIOS SIN IVA" + " " + "$" + mensaje);

  if (mensaje !== "") {
    console.log("IVA INCLUIDO" + " " + "$" + mensaje * 1.21);
  }
}

resultado (0,0 );




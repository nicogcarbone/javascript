//trabajo nro 3//

for (let i = 0; i < 20; i++) {
  if (i > 10) break;

  let nombre = prompt("ponga su nombre y tendra su numero de asiento");

  if (
    nombre != "" &&
    nombre != "1" &&
    nombre != "2" &&
    nombre != "3" &&
    nombre != "4" &&
    nombre != "5" &&
    nombre != "6" &&
    nombre != "7" &&
    nombre != "8" &&
    nombre != "9" &&
    nombre != "10" &&
    nombre != "0" &&
    nombre != "123" &&
    nombre != "1234" &&
    nombre != "12345" &&
    nombre != "123456" &&
    nombre != "1234567" &&
    nombre != "111" &&
    nombre != "0"
  ) {
    alert(i);
  } 

  
  else {
    alert("no a ingresado su nombre");
  }

   if (nombre !=="")  {
    console.log ("hola" + " " + nombre + " " + "tu asiento es" + " " , i)
  }
}


let nombreIngresado = prompt("Bienvenido; solicitmos tu nombre");
let formaDepago = prompt(
  "gracias" +
    " " +
    nombreIngresado +
    " " +
    "Nos gustaria saber que medios de pago utiliza al visitar nuestros locales: \n A (Efectivo), \n B (Tarjeta de Credito) \n C (Mercado Pago)"
);

if (formaDepago === "A" || formaDepago === "a") {
  console.log("en efectivo puede obtener hasta un 10% de descuento");
} else if (formaDepago === "B" || formaDepago === "b") {
  console.log("Con su tarjeta puede acceder a todas los planes de pago");
} else if (formaDepago === "C" || formaDepago === "c") {
  console.log("con Mercado Pago sumara puntos para su proxima compra");
} else {
  alert("No es un medio de pago valido en nuestros locales");
}

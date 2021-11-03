for (let i = 0; i < 20; i++) {
  if (i > 10) breack;

  let nombre = prompt("ponga su nombre y tendra su numero de asiento");

  if (nombre) {
    alert(i);
  } else if (nombre === "") {
    alert("no a ingresado su nombre");
    breack;
  }
}

/*Haz un script que escriba una piramide inversa de los numeros del 1 al que indique el usuario (no mayor a 50) */
let numero = parseInt(prompt("Ingrese un número entre 1 y 50"));
if (!isNaN(numero)) {
  if (numero >= 1 && numero <= 50) {
    for (let a = numero; a >= 1; a--) {
      for (let renglon = a; renglon >= 1; renglon--) {
        document.write(a);
      }
      document.write("<br>");
    }
  } else {
    alert("El valor ingresado no es valido");
  }
} else {
  alert("El valor ingresado no es valido");
}

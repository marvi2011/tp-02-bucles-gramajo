/*Crea un script para general la piramide siguiente con numeros no mayores  de 50 */
/*Haz un script que escriba una piramide inversa de los numeros del 1 al que indique el usuario (no mayor a 50) */
let numero = parseInt(prompt("Ingrese un número entre 1 y 50"));
if (!isNaN(numero)) {
  if (numero >= 1 && numero <= 50) {
    for (let a = 0; a <= numero; a++) {
      for (let renglon = 1; renglon <= a; renglon++) {
        document.write(renglon);
      }
      document.write("<br>");
    }
  } else {
    alert("El valor ingresado no es valido");
  }
} else {
  alert("El valor ingresado no es valido");
}

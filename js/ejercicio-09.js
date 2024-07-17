/*Crea un script que escriba los numeros del 1 al 500 que indique cuales son multiplos de 4 y de 9 que cada 5 lineas muestre una linea horizontal */
let final = 500;
for (let a = 1; a <= final; a++) {
  document.write(a);
  if (a % 4 == 0) {
    document.write("<p>Este número es múltiplo de 4</p>");
  }
  if (a % 9 == 0) {
    document.write("<p>Este número es múltiplo de 9</p>");
  }
  document.write("<br>");
  if (a % 5 == 0) {
    document.write("<hr>");
  }
}

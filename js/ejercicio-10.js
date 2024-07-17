/*Realizar un script que pida un numero de fila y columnas y escriba una tabla. Dentro de cada una de las celdas debera escribirse un numero consecutivo en orden decreciente.
Ej: 7x5 los numeros deben ir del 35 al 1 */
const filas = parseInt(prompt("Ingrese un numero de filas"));
const columnas = parseInt(prompt("Ingrese un numero de columnas"));
let celda = filas * columnas;
console.log(filas);
console.log(columnas);
document.write(`<table><tbody>`);
for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  document.write(`<tr>`);
  for (let indiceColumna = 1; indiceColumna <= columnas; indiceColumna++) {
    document.write(`<td>${celda}</td>`);
    celda--;
  }
  document.write(`</tr>`);
}
document.write(`</tbody></table>`);

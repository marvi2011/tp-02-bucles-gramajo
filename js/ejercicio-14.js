/*Realiza un script que pida una cadena de texto y la muestre colocando - entre cada caracter sin usar el metodo replace*/
let frase = prompt("Ingrese una frase:");
var guiones = "";
for (var i = 0; i < frase.length; i++) {
  guiones += frase[i];
  if (i !== frase.length - 1) {
    guiones += "-";
  }
}
document.write(`<p>Su frase con guiones: ${guiones}</p>`);

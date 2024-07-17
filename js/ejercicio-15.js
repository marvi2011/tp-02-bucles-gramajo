/*realiza un script que cuente el numero de vocales que tiene un texto */
let frase = prompt("Ingrese una frase:");
frase = frase.toUpperCase();
let caracter;
let vocales = 0;
for (let i = 0; i < frase.length; i++) {
  caracter = frase.charAt(i);
  if (
    caracter == "A" ||
    caracter == "E" ||
    caracter == "I" ||
    caracter == "O" ||
    caracter == "U"
  ) {
    vocales++;
  }
}
document.write(`<p>El número de vocales es: ${vocales}</p>`);

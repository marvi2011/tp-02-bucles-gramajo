/*Realiza un script que muestre la posicion de la primera vocal de un texto introducido por teclado */
function primeraVocalaVocal(texto) {
  texto = texto.toLowerCase();
  var vocales = "aeiou";
  for (var i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      return i + 1;
    }
  }
  return -1;
}
var texto = prompt("Ingrese un texto:");
var posicionPrimeraVocal = primeraVocalaVocal(texto);
if (posicionPrimeraVocal !== -1) {
  document.write(
    `<p>La posición de la primera vocal en el texto es: ${posicionPrimeraVocal}</p>`
  );
} else {
  document.write("<p>No se encontraron vocales en el texto</p>");
}

/*Realiza un script que pida una cadena de texto y la devuelva al reves. */
// Función para invertir una cadena de texto
function invertirTexto(texto) {
  var textoInvertido = "";
  for (var i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }
  return textoInvertido;
}
var texto = prompt("Ingrese una cadena de texto:");
var textoInvertido = invertirTexto(texto);
document.write(`<p>Su texto invertido es el siguiente: ${textoInvertido}`);

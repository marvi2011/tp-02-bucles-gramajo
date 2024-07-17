/*Realiza un script que genere un numero aleatorio entre 1 y 99 */
function numeroGenerado() {

  return Math.floor(Math.random() * 99) + 1;
}
let numeroAleatorio = numeroGenerado();
document.write("<p>Este es un número aleatorio entre 1 y 99</p>:", numeroAleatorio);

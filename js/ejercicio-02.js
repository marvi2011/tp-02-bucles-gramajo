/*Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar la calificación en un alert segun los siguientes rangos de notas:
entre 0 y 2 muy deficiente
entre 3 y 4 deficiente
entre 5 y 6 sufuciente
         7 bien
entre 8 y 9 notable
10 sobresaliente
 */
let nota = parseInt(prompt("Ingrese la nota:"));
if (nota >= 0 && nota <= 10) {
  if (nota >= 0 && nota <= 2) {
    document.write(
      `<p>La nota ingresada es: ${nota}, su calificación es "Muy insuficiente"`
    );
  } else if (nota >= 3 && nota <= 4) {
    document.write(
      `<p>La nota ingresada es: ${nota}, su calificaión es "Insuficiente"</p>`
    );
  } else if (nota >= 5 && nota <= 6) {
    document.write(
      `<p>La nota ingresada es: ${nota}, su calificación es "Suficiente"</p>`
    );
  } else if (nota === 7) {
    document.write(
      `<p>La nota ingresada es: ${nota}, su calificación es "Bien"</p>`
    );
  } else if (nota >= 8 && nota <= 9) {
    document.write(
      `<p>La nota ingresada es: ${nota}, su calificación es "Notable"</p>`
    );
  } else if (nota === 10) {
    document.write(
      `<p>La nota ingresada es: ${nota}, su calificación es "Sobresaliente"</p>`
    );
  }
} else {
  document.write("<p>No ingresaste una nota válida</p>");
}

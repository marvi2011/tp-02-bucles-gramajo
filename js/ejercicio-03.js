/*Realizar un script que pide una cadena de texto hasta que se pulse Cancelar. Al salir con Cancelar debe mostrrse todos las cadenas concatenadas con un guion*/
/*Usar Confirm()*/
let final = "";
do {
  let frase = prompt("Ingresa una frase:");
  if (final == "") {
    final = frase;
  } else {
    final = final + " - " + frase;
  }
} while (confirm("¿Desea seguir agregando frases?"));
document.write(final);

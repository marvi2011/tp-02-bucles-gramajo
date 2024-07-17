/*Realiza un script que pida números hasta que se pulse Cancelar. Si no es un número debera indicarse con un aler y seguir pidiendo numeros. Al salir con Cancelar debera indicarse la suma total de los numeros introducidos */
let suma = 0;
let numeros = 0;
do {
  numeros =prompt("Ingrese un número:");
console.log (numeros)
  if (!isNaN(parseInt(numeros)) && numeros != null) {
    suma = suma + parseInt(numeros);
  } else {
    if (numeros != null);
    {
      alert("El valor ingresado no es valido");
    }
  }
} while (numeros != null);
document.write(`<p>La suma de los datos ingresados es: ${suma}</p>`);

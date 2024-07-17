/*Match: realiza un script que pida por teckado 3 edades y 3 nombres e indique el nombre del mayor */
let nombre1 = prompt("Ingrese el primer nombre:");
let edad1 = parseInt(prompt("Ingrese la edad:"));

let nombre2 = prompt("Ingrese el segundo nombre:");
let edad2 = parseInt(prompt("Ingrese la edad:"));

let nombre3 = prompt("Ingrese el tercer nombre:");
let edad3 = parseInt(prompt("Ingrese la edad:"));
let mayor = Math.max(edad1, edad2, edad3);
if (mayor == edad1) {
  document.write(`<p>El mayor de los 3 es: ${nombre1}</p>`);
} else if (mayor == edad2) {
  document.write(`<p>El mayor de los 3 es: ${nombre2}</p>`);
} else document.write(`<p>El mayor de los 3 es ${nombre3}</p>`);

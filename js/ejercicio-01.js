/*Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un núumero valido indicarlo con un mensaje */
const edad = parseInt(prompt("Ingrese su edad: "));
if (edad > 0 && edad <= 100) {
  if (edad >= 18 && edad <= 80) {
    document.write(
      `<p> La edad ingresada es: ${edad}, ya puedes conducir 😉😉 </p>`
    );
  } else if (edad <= 17 || edad >= 81) {
    document.write(`<p>La edad ingresada es ${edad}, no puedes conducir 🙁🙁`);
  }
} else {
  document.write("Ingresaste un número invalido 😂😂");
}

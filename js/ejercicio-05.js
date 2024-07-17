/*Realizar una pagina con un script que calcule el valor de la letra en numero de DNI
El algoritmo para calcualr la letra del DNI es:
numero entre 0 y 99999999
Debemos calcular el resto de la division entera entre el numero de DNI y el numero 23 
Segun el resultado de 0 a 22 le conrrespondera una letra de las siguientes (t-r-w-a-g-m-y-f-p-d-x-b-n-j-z-s-q-v-h-l-c-k-e
Si lo introducido no es un numero debera indicarse con un alert y volver a preguntar
Debera repetirse el proceso hasta que el usuario pulse Cancelar*/
let resto = 0;
let letra = "";
do {
  let dni = prompt("Ingrese el número de DNI:");
  if (!isNaN(dni) && dni != null) {
    dni = parseInt(dni);
    if (dni >= 0 && dni <= 99999999) {
      resto = dni % 23;
      switch (resto) {
        case 0:
          letra = "T";
          break;
        case 1:
          letra = "R";
          break;
        case 2:
          letra = "W";
          break;
        case 3:
          letra = "A";
          break;
        case 4:
          letra = "G";
          break;
        case 5:
          letra = "M";
          break;
        case 6:
          letra = "Y";
          break;
        case 7:
          letra = "F";
          break;
        case 8:
          letra = "P";
          break;
        case 9:
          letra = "D";
          break;
        case 10:
          letra = "X";
          break;
        case 11:
          letra = "B";
          break;
        case 12:
          letra = "N";
          break;
        case 13:
          letra = "J";
          break;
        case 14:
          letra = "Z";
          break;
        case 15:
          letra = "S";
          break;
        case 16:
          letra = "Q";
          break;
        case 17:
          letra = "V";
          break;
        case 18:
          letra = "H";
          break;
        case 19:
          letra = "L";
          break;
        case 20:
          letra = "C";
          break;
        case 21:
          letra = "K";
          break;
        case 22:
          letra = "E";
          break;
      }
      alert(`Al número de DNI ${dni} le corresponde la letra ${letra}`);
    } else {
      alert("El valor ingresado no es valido");
    }
  }
} while (confirm("Quiere ingresar otro DNI?"));

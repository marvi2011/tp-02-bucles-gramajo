/*Realiza un script que escria una piramide del 1 al 30 de la siguiente forma
1
22
333
4444
55555*/
for (let a = 1; a <= 30; a++) {
  for (let renglon = 0; renglon < a; renglon++) {
    document.write(a);
  }
  document.write("<br>");
}

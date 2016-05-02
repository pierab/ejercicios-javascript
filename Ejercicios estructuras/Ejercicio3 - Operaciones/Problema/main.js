var numero1 =parseInt(prompt("ingresar numero:"));
var numero2 =parseInt(prompt("ingresar numero:"));
if (numero1>numero2) {
	var suma = numero1 + numero2;
  alert("El resultado de la suma de los valores dados es " + suma);
}
if (numero1==numero2) {
  alert("Son iguales won!!");
}
else if (numero2>numero1){
	var multiplicacion = numero1 * numero2;
	var division = numero2 / numero1;  
  alert("El resultado de la multiplicacion de los valores dados es " + multiplicacion);
  alert("El resultado de la division de los valores dados es " + division);
} 

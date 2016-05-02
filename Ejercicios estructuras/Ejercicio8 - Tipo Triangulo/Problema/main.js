alert("Antes de comenzar recuerda q la suma de los angulos a de dar 180");
var angulo1 =parseInt(prompt("ingresar numero:"));
var angulo2 =parseInt(prompt("ingresar numero:"));
var angulo3 =parseInt(prompt("ingresar numero:"));
if(angulo1 == angulo2 && angulo3 == angulo2 && angulo3 == angulo1){ 
	alert("Este triangulo es equilatero")
}
else if(angulo1 != angulo2 && angulo3 != angulo2 && angulo3 != angulo1){ 
	alert("Este triangulo es escaleno")
}
else if (angulo1!=angulo2 || angulo2!=angulo3 || angulo3!=angulo1){
	alert("Este triangulo es isoceles")
}
else if (angulo1==90 || angulo2==90 || angulo3==90) {
	alert("Este triangulo es rectangulo")
}
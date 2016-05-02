var primerlista = [];
suma1=0;

for(var i = 0; i < 3; i++){
primerlista[i] = parseInt(prompt("Ingresa el número "+(i+1)));
suma1=suma1+primerlista[i];
}
document.write("la suma de la lista1 es "+suma1);
var segundalista = [];
suma2=0;

for(var j = 0; j < 3; j++){
segundalista[j] = parseInt(prompt("Ingresa el número "+(j+1)));
suma2=suma2+segundalista[j];


}

document.write(" <br> la suma de la lista2 es "+suma2);
if(suma1 > suma2){ 
	alert("lista1 es mayor")
}
else if(suma2 > suma1){ 
	alert("lista2 es mayor")
}
else if(suma2 === suma1){ 
	alert("Son iguales won!!!")
}
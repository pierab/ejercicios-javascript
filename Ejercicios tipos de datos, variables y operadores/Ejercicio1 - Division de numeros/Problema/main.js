var dividende = prompt("Ingresar numero:");
	var diviseur  = prompt("Ingresar numero:");
	 
	if(diviseur == 0){
	    document.write("Division entre 0 es imposible");
	 	}else{
	 		document.write("La division es:");
	 		document.write(parseFloat(parseInt(dividende)/parseInt(diviseur)));
	 	}  
	
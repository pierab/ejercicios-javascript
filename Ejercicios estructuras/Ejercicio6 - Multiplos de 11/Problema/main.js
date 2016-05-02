var salida='';
var sum=0;
for(numero=11;numero<3000;numero=numero+11)
{
salida=salida+numero+' ';
sum=sum+numero;
}
document.write(salida);
document.write("<br />");
document.write("La Suma de todos ellos es= "+sum);
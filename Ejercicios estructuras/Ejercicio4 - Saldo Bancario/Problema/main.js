// Ejercicio #4: Saldo bancario

// En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, nombre del 
//cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.

// See pide confccionar un programa que lea los datos de las cuentas corrientes e informe:

// a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:

// Estado de la cuenta:

// 'Acreedor' si el saldo es >0. 'Deudor' si el saldo es <0. 'Nulo' si el saldo es =0.

// b) La suma total de los saldos acreedores.
var cuenta;
var cliente;
var saldo=0;
var saldoacre=0;
do{
  cuenta=prompt('Ingrese nro de cuenta:');    
  if (cuenta>=0 && cuenta.length === 12)
  {
   cliente=prompt('Ingrese el nombre del cliente:');
    saldo=parseFloat(prompt('Ingrese su saldo actual:'));
      if (saldo>0)
      {
        saldoacre=saldoacre+saldo;
        document.write(cliente+' tiene saldo acreedor<br>');
      }
      else
      {
        if (saldo<0)
        {
          document.write(cliente+' tiene saldo deudor<br>');
        }
        else
        {
          document.write(cliente+' tiene saldo nulo<br>');
        }
      }      
    }
    else{
      alert("Escribir nuevamente");
    }
  }while(cuenta>0);
document.write('Suma total de acreedores:'+saldoacre);

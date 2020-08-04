let n=prompt('¿Hola ¿Cuantos escalones tiene la escalera?');

function escalera (n){
if (n<3) 
return n
else
return (escalera(n-1)+escalera(n-2));
}
console.log(escalera(n));  

let resultado=(escalera(n)); 
alert('Las posibilidades de subir escaleras en 1 o 2 pasos son: ' + resultado);   
 
 

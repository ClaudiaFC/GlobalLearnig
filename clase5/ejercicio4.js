/*Ejercicio 4: Haga una función que reciba un número y retorne un arreglo que tenga el tamaño del número recibido.
El contenido del arreglo deben ser números desde el 0 hasta el número recibido -1 (0 a n-1)
*/

function generarArreglo(n){
    var arr = [];
    for(var i = 0; i<n; i++) arr.push(i);
    console.log(arr)
  }
  
  
  
  
  generarArreglo(5);

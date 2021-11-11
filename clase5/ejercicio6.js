//Ejercicio 6: Dado un arreglo de números enteros, encuentre la menor suma posible entre ellos

const  array =[1,2,3,4,5];
const  array2 =[9,7,3,12,1,5];

const minSum = array2.sort((a,b) => a-b);
 let suma = array2[0]+array2[1];
console.log(suma);
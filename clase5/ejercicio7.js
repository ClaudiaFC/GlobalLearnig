//Dado un arreglo de números enteros, encuentre el mayor producto posible dado a partir de números adyacentes

const  array =[1,2,3,4,5];
const  array2 =[9,7,3,12,1,5];

//console.log(array2[array2.length-1]);

const mayprod = array2.sort((a,b) => a-b);
 let producto  = array2[array2.length-1]*array2[array2.length-2];
console.log(producto);

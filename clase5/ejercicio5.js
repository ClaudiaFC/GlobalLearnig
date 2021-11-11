/**Ejercicio 5: Hay un arreglo con varios números donde todos son iguales excepto uno.
 *  Haga una función que lo identifique */

const array =[1,1,1,1,1,1,2,1];
const array2 =[4,4,4,4,4,4,6,4,4,4,4,4];

function finduniq (array2) {
let value;
array2.forEach(function(item,index){
    if (array2[index]===array2[index +1]|| array2[index]=== array2[index-1])
{}
else {
    value=array2[index];

}
});
return value
}
 console.log(finduniq(array2));
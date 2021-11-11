/**Ejercicio 8: Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero
El lobo solo puede comer a la oveja que tiene a su derecha
 */
var rebanio = ['o', 'o','l','o', 'o','o'];
function warnthesheep(rebanio)
{
    let position = rebanio.lastIndexOf('o')- rebanio.indexOf('l');

    if (position >0) {
        console.log( "cuidado! oveja # " + position +" el lobo esta cerca")
        
    } else {
        console.log("lobo! no te sigas comiendo a la ovejas ");


    }
}


console.log(warnthesheep(rebanio));

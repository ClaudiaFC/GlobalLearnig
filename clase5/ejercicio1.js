/**Ejercicio 1: Pensemos que tenemos que hacer un juego. Y lo primero que necesitamos es que se puedan crear héroes en el juego.
Haga una función o una clase que nos sirva para crear nuestro objeto “heroe”
Debe tener las siguientes propiedades y valores
 */
class heroe 
{
  constructor (nombre="HEROE", posicion="00", vida=100,dano=5, experiencia=0)
  
  {
    this.name= nombre;
this.position= posicion ;
this.life= vida;
this.hurt = dano;
this.experience = experiencia;
  }

}
heroe1= new heroe(nombre="crfr");
heroe2= new heroe();
console.log (heroe1);
console.log (heroe2);

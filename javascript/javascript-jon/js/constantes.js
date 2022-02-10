//SOLO SE PUEDE EXPORTAR POR DEFAULT UNA VEZ POR CADA ARCHIVO QUE TENGAMOS

export const PI = Math.PI;
//para exportar una variable hay que poner export al principio de la linea de la variable que queramos exportar
export let usuario = "Joel";
let password = "qwerty";
//para exportar una variable por default hay que declarar la variable y despues la exportamos en otra linea
//export default password

const hello = () => console.log("Hola");

//LAS CLASES Y LAS FUNCIONES SON LOS UNICOS QUE PODEMOS EXPORTAR POR DEFAULT DIRECTAMENTE EN LA LINEA QUE SE INICIA

//para exportar una funcion por default solo hay que poner: export default Al pincipio de la linea de esas funcion
export default function saludar() {
  console.log("Hola modulos ES6");
}

//para exportar una clase por default solo hay que poner: export default Al pincipio de la linea de esas clase
export class Saludar {
  constructor() {
    console.log("Hola Clases ES6");
  }
}

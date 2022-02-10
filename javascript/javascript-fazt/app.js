
/* console.log({"usermane": 'ryan', "score": 20}) */


// TIPOS DE DATOS



/* "Hello World" // string(cadena de caracteres)
'Hello World' // string

//numeros
1000000 
-2.3

//boolean / dato logico
true 
false

//array / arreglo es como una lista 
['joe', 'ryan', 'martha']
[1, 2 , 3]
[true, false, true, false]

//object
{
  "usermane": 'ryan',
  "score": 70.4
  "hours": 14
  "professional": true,
}
 */


//VARIABLES


//var significa variable y es un atributo que podemos modificar en el momento que queramos
//no puede empezar con arroba, numero y otro signo. Con los unicos simbolos que funcionan son el guion bajo_ y el dolar $
var nameuser = "jonh"; 

nameuser = 'pepe';

//let es practicamente igual que var pero con algunas diferencias que seguramente vea en el curso de jon jaj
let lastname = "carter";

let nombredepersona = 'chigo'

// las constantes no pueden cambiar una vez ya la allamos definido, si la intentamos cambiar nos va a saltar un error
const PI = 3.1415;
/* PI = 100; */

const id = 'user1'

//camelcase se la conoce asi porque parece la joroba de un camello porque cuando hay una letra mayuscula hay una subida
let userName ='gordon'

//console.log(PI)


//OPERADORES


//let numberOne = 60;
//let numberTwo = 100

//let result = numberOne + numberTwo
//let result = numberOne - numberTwo
//let result = numberOne * numberTwo
//let result = numberOne / numberTwo;

//console.log(result)

let name ='Jonh';
let lastName =' Carter';

//cuando sumamos caracteres se llama concatenar 
let completeName = name + ' ' + lastName;

let numberOne = 100
let numberTwo = 500

//let result = numberOne > numberTwo
//let result = numberOne < numberTwo
//let result = numberOne != numberTwo
//let result = numberOne >= numberTwo

//console.log(result);

/*
let passwordDB ='pepe123'

let input = 'pepe123'

let result = input == passwordDB

console.log(result)
 */

//CONDICIONALES

/* let passwordDB ='pepe123'

let input = 'pepe123'

let result = input == passwordDB

if (result == true){
  console.log('Login correcto')
} else {
  console.log('Contraseña incorrecta')
} */

/* let score = 70;

if (score > 30){
  console.log('You need to practice more')
} else if(score > 15){
  console.log('Estas mejorando')
}


else{
  console.log('You need to follow this tutorial')
} */


let typeCard = 'credit card'

//los switch sirven para cuando nuestra variable puede tener unos valores reducidos, y depende del caso podemos decirle que hacer y en caso de que no haya sido ninguno de los casos que esperabamos podemos usar el default
/* switch(typeCard){
  case 'Debit card':
    console.log('This is a debit card');
    break;
  case 'Credit card':
    console.log('This is a credit card');
    break;
  default:
    console.log('No card')
} */


//BUCLES

/* let count = 50

while(count > 0) {
  console.log(count);
  count = count - 1;
} */

/* 
let count = 0

while(count <= 50){
  console.log(count)
  count++
} */

let names = [1, 2, 3]

//console.log(names[2]);
//console.log(names.length);

/* 
for(let i = 0; i < names.length; i++){
  console.log(names[i]);
} 
*/

/* 
for(let i = names.length - 1; i >= 0; i--){
  console.log(names[i]);
}  
*/


//FUNCIONES

/* 
function greeting(personName){
  console.log('hello' + " " + personName)
} */

/* greeting('markus');
greeting('tiago');
greeting('chigo'); */

function add(n1, n2){
  console.log(n1 + n2);
}

add(3, 2);
add (100, 300)
add (470, 342)
add (300, 300)
add (600, 300)
add (700, 300)
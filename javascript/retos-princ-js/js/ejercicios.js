/* 
  1 => Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
*/

//alert("Hello World")

/* 
  2 => Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
*/

//document.write("Hello World")

/* 
  3 => Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.  
*/

//console.log(3 + 5)

/* 
  4 => Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
*/

//let user = prompt()
//console.log(`Hola ${user}`)

/* 
  5 => Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
*/

/* 
let num1 = parseInt(prompt("Introduce un numero")),
  num2 = parseInt(prompt("Introduce el siguiente numero"))

console.log(`${num1} + ${num2} = ${num1 + num2}`) */

/* 
  6 => Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
*/

const numMayor2 = (num1 = undefined, num2 = undefined) => {
  if (num1 === undefined) return console.warn("El numero 1 esta vacio");

  if (typeof num1 !== "number") return console.error(`El valor ${num1} NO es un numero`);

  if (num2 === undefined) return console.warn("El numero 2 esta vacio");

  if (typeof num2 !== "number") return console.error(`El valor ${num2} NO es un numero`);

  num1 > num2
    ? console.log(`El numero Mayor entre ${num1} y ${num2} es: ${num1}`)
    : console.log(`El numero Mayor entre ${num1} y ${num2} es: ${num2}`); 
};

//numMayor2(10, 6)

/* 
  7 => Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
*/

const numMayor3 = (num1, num2, num3) => {
  if (num1 === undefined) return console.warn("El numero 1 esta vacio");

  if (typeof num1 !== "number") return console.error(`El valor ${num1} NO es un numero`);

  if (num2 === undefined) return console.warn("El numero 2 esta vacio");

  if (typeof num2 !== "number") return console.error(`El valor ${num2} NO es un numero`);

  if (num3 === undefined) return console.warn("El numero 3 esta vacio");

  if (typeof num3 !== "number") return console.error(`El valor ${num3} NO es un numero`);

  return console.info(`El numero mayor es: ${Math.max(num1, num2, num3)}`)
}

//numMayor3(2, 22, 10)


/* 
  8 => Escribe un programa que pida un número y diga si es divisible por 2
*/

const divisibleX2 = (num) => {
  if (num === undefined) return console.warn("El numero esta vacio");

  if (typeof num !== "number") return console.error(`El valor ${num} NO es un numero`)

  num % 2 === 0 
    ? console.info(`El numero ${num} es divisible por 2`)
    : console.info(`El numero ${num} NO es divisible por 2`)
}

//divisibleX2(4)

/* 
  9 => Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
*/

const contarA = (frase = "") => {
  if (frase === "") console.warn("No introduciste la frase")

  if (typeof frase !== 'string') return console.error(`El valor ${frase} no es una cadena de texto`)

  frase = frase.split("")

  let contador = 0

  for (const i of frase) {
    if (i === "a" || i === "A") contador += 1
  }

  contador > 0 
  ? console.info(`En tu texto la letra "a" aparece ${contador} vez/ces`)
  : console.info(`En tu texot la letra "a" NO aparece`)
}

//contarA("Hola como estas")

/* 
  10 => Escribe un programa que pida una frase y escriba las vocales que aparecen
*/

const aparicionVocales = (frase = "") => {
  if (frase === "") return console.warn("No introduciste la frase")

  if (typeof frase !== 'string') return console.error(`El valor ${frase} no es una cadena de texto`)

  frase = frase.toLowerCase().split("")

  let vocales = []

  for (const i of frase) {
    if (/[aeiou]/.test(i) === true) vocales.push(i)
  }

  vocales.length === 0
    ? console.info(`En tu frase no aparecen vocales`)
    : console.info(`En tu frase aparecen las siguientes vocales ${[...new Set(vocales)]}`)
}

//aparicionVocales("Hola como estas")

/* 
  11 => Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
*/


const contarVocales = (frase = "") => {
  if (frase === "") return console.warn("No introduciste la frase")

  if (typeof frase !== 'string') return console.error(`El valor ${frase} no es una cadena de texto`)

  frase = frase.toLowerCase().split("")

  let contador = 0

  for (const i of frase) {
    if (/[aeiou]/.test(i)) contador += 1
  }

  console.info(`Tu frase tiene ${contador} vocal/es`)
}

//contarVocales("Hola como estas")

/* 
  12 => Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
*/

const aparicionCadaVocal = (frase = "") => {
  if (frase === "") return console.warn("No introduciste la frase")

  if (typeof frase !== 'string') return console.error(`El valor ${frase} no es una cadena de texto`)

  frase = frase.toLowerCase().split("")

  let a = 0,
    e = 0,
    i = 0,
    o = 0,
    u = 0

  for (const index of frase) {
    if (index === "a") a += 1
    
    if (index === "e") e += 1

    if (index === "i") i += 1
    
    if (index === "o") o += 1

    if (index === "u") u += 1
  }

  console.log({
    a,
    e,
    i,
    o,
    u
  })
}

//aparicionCadaVocal("aeiou como usted esta hoy")

/* 
  13 => Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
*/

const divisibleX2357 = (num = undefined) => {
  if (num === undefined) console.warn(`No ingresaste el numero`)

  if (typeof num !== 'number') console.error(`El valor ${num} NO es un numero`)

  if (num % 2 === 0 | num % 3 === 0 | num % 5 === 0 | num % 7 === 0 ) return console.log(true)

  return console.info(`El numero ${num} NO es divisible por 2, 3, 5 y 7`)
}

//divisibleX2357(55)
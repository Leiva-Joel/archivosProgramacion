/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

/* 
\\--------------------------------------------------
                    EJERCICIO 1
--------------------------------------------------\\ */

//Solucion 1
/* const nrosCaracteres = () => {
  let cadena = prompt()
  alert(`Tu oracion tiene ${cadena.length} caracteres`)
}

nrosCaracteres()

//Solucion 2
const nrosCaracteres2 = (cadena) => {
  let cadena2 = cadena;
  let resultado = typeof cadena === 'string' 
  ? console.log(`Tu cadena tiene ${cadena2.length} caracteres`) 
  : console.log("No has insertado una cadena de texto");
};

nrosCaracteres2("Hola Mundo"); */

/* 
\\--------------------------------------------------
                    EJERCICIO 2
--------------------------------------------------\\ */
/* 
const stringCortado = (texto, corte) => {
  let cadena = texto;
  if (typeof cadena === "string") {
    let resultado = texto.slice(0, corte);
    console.log(resultado);
  } else {
    console.log("No insertaste una cadena de texto");
  }
};

stringCortado("Hola Mundo", 4); */

/* 
\\--------------------------------------------------
                    EJERCICIO 3
--------------------------------------------------\\ */
/* 
const stringToArray = (string, separador) => {
  let cadena = string;
  let resultado =
    typeof cadena === "string"
      ? console.log(cadena.split(separador))
      : console.log("No insertaste una cadena de texto");
};

stringToArray("Hola que tal", " "); */

/* 
\\--------------------------------------------------
                    EJERCICIO 4
--------------------------------------------------\\ */

/* const stringRepeat = (string = "", repeat = undefined) => {
  let cadena = string
  let resultado = cadena

  if (string === "") {return console.warn("No introduciste una cadena de texto")}

  if (repeat === undefined) {return console.warn("No instroduciste el numero repetidor")}

  if (repeat === 0) {return console.error("El repetidor no puede ser 0")}

  if (repeat === Math.sign(-1)) {return console.error("No puedes introducir un valor negativo")} 

    resultado = string.repeat(repeat);
    console.log(resultado)
}
stringRepeat("Hola Mundo", 3) */

/* 
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

/* 
\\--------------------------------------------------
                    EJERCICIO 5
--------------------------------------------------\\ */
/* 
const invertirPalabras = (cadena = "") => {
  if (typeof cadena !== 'string') {return console.warn("No haz insertado una cadena de texto")}

  let cadena = cadena.split("").reverse().join("")

  console.log(cadena)
}

invertirPalabras("Hola Mundo") */

/* 

/* 
\\--------------------------------------------------
                    EJERCICIO 6
--------------------------------------------------\\ */

/*
const repetirPalabras = (cadena = "", referencia = "") => {

  if (!cadena) {return console.warn("No introduciste el texto")} 

  if (typeof referencia !== 'string') {return console.warn("No introduciste la palabra a repetir")}

  let  string =  console.log(cadena.split(" ").filter(word => word === referencia).length)
}

repetirPalabras("hola mundo adios mundo", "mundo") */

/* 
\\--------------------------------------------------
                    EJERCICIO 7
--------------------------------------------------\\ */

/* 
const palindromo = (palabra = "") => {
  if (typeof palabra !== 'string') {return console.warn("No haz insertado una palabra")}
  
  let texto = palabra.toLowerCase()
  
  let resultado = texto.split("").reverse().join("")
  
  if (resultado === texto) {console.info(true)} 
  
  if (resultado !== texto) {console.info(false)}
}

palindromo("Salas") */

/* 
\\--------------------------------------------------
                    EJERCICIO 8
--------------------------------------------------\\ */

/* 
const eliminarPatron = (patron = "") => {
  if (typeof patron !== 'string') {return console.warn("No haz insertado una cadena de texto")};
  
  let cadena = patron.split("")

  let resultado = console.info(cadena.filter(word => parseInt(word) >= 0).join(' '))
}

eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5") */

/* 
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

/* 
\\--------------------------------------------------
                    EJERCICIO 9
--------------------------------------------------\\ */

/* 
const numeroAleatorio = () => console.info(Math.round(Math.random() * (600 - 501) + 500));;

numeroAleatorio(); */

/* 
\\--------------------------------------------------
                    EJERCICIO 10
--------------------------------------------------\\ */

/* 
const capicua = (numero = undefined) => {
  let resultado = (typeof numero !== 'number')
  ? console.warn("No haz insertado un numero")
  : numero.toString().split("").reverse().join("")
  
  //puse parsefloat para que pueda comprobar si los numeros decimes tambien son capicuas, como 212.212

  if (parseFloat(resultado) === numero) {return console.info(true)}
  
  if (parseFloat(resultado) !== numero) {return console.info(false)}
}

capicua(2002) */

/* 
\\--------------------------------------------------
                    EJERCICIO 11
--------------------------------------------------\\ */

//no lo pude resolver y vi el video

/* 
const factorial = (numero = 0) => {
  if (typeof numero !== 'number') {return console.warn("No haz insertado un numero")}
  
  if (Math.sign(numero) === -1) {return console.error("No puedes insertar un numero negativo")}
  
  if (Math.sign(numero) === 0) {return console.error("Tenes que insertar un numero mayor a 0")}
  
  let factorial = 1
  
  for (let i = numero; i > 1; i--) {
    factorial *= i
  }
  
  console.log(factorial)
}

factorial(5) */

/* 
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

/* 
\\--------------------------------------------------
                    EJERCICIO 12
--------------------------------------------------\\ */

/* 
const numeroPrimo = (numero = undefined) => {

  if (typeof numero !== 'number') {return console.warn("No insertaste un numero")}

  if (Math.sign(numero) === -1) {return console.error("No puedes insertar un numero negativo")}
  
  if (Math.sign(numero) === 0) {return console.error("Tenes que insertar un numero mayor a 0")}

  (numero / numero && numero / 1)
  ? console.info(`El numero ${numero} es PRIMO`)
  : console.info(`El numero ${numero} no es PRIMO`)

}
numeroPrimo(7) */

/* 
\\--------------------------------------------------
                        EJERCICIO 13
--------------------------------------------------\\ */

/* 
const parOImpar = (numero = undefined) => 
  typeof numero !== "number"
    ? console.warn("No insertaste un numero")
    : numero % 2 === 0
      ? console.info(`El numero ${numero} es PAR`)
      : console.info(`El numero ${numero} es IMPAR`);
parOImpar(29); */

/* 
\\--------------------------------------------------
                        EJERCICIO 14
--------------------------------------------------\\ */

/* 
const COF = (grados = undefined, medida = "") => 
  
  (typeof grados !== "number")
  ? console.warn("No insertaste un numero para medir")
  : (medida === "c" || medida === "C")
  ? console.info(`${grados}°C son equivalentes a ${grados * 1.8 + 32}°F`)
    : (medida === "f" || medida === "F")
      ? console.info(`${grados}°F son equivalentes a ${(grados - 32) / 1.8}°C`)
      : console.warn(`No ingresaste una medida`)

COF(0, "c"); */

/* 
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

/* 
\\--------------------------------------------------
                        EJERCICIO 15
--------------------------------------------------\\ */

//no lo pude resolver solo y vi el video

/* 
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste el numero a convertir")

  if (typeof numero !== 'number') return console.error(`El valor ${numero} no es un numero`)

  if (base === undefined) return console.warn("No ingresaste la base")

  if (typeof base !== 'number') return console.error(`El valor r${base} no es un numero`)

  if (base === 2) {
    return console.info(`${numero} base${base} = ${numero, base} = base 10`)
  } else if (base === 10) {
    return console.info(`${numero} base${base} = ${numero.toString(2)} = base 2`)
  } else {
    console.error("El numero base a convertir no es valido")
  } 
}

convertirBinarioDecimal(100, 2)
convertirBinarioDecimal(4, 10)*/

/* 
\\--------------------------------------------------
                        EJERCICIO 16
--------------------------------------------------\\ */

/*
const descontar = (cantidad = undefined, descuento = undefined) => {
  if (cantidad === undefined) {return console.warn("No ingresaste la cantidad")}

  if (typeof cantidad !== 'number') {return console.error(`El valor ingresado "${cantidad}" no es un numero`)}

  if (cantidad === 0) {return console.error("No puede haber una cantidad de 0")}

  if (Math.sign(cantidad === -1)) {return console.error("No puede insertar una cantidad negativa")}

  if (descuento === undefined) {return console.warn("No ingresaste el descuento")}

  if (typeof descuento !== 'number') {return console.error(`El valor ingresado "${descuento}" no es un numero`)}

  if (descuento === 0) {return console.error("No puede haber un descuento de 0")}

  if (descuento >= 100) {return console.error(`No puede haber un descuento del ${descuento}%`)}

  if (Math.sign(descuento === -1)) {return console.log("No puede insertar un descuento negativo")}
    
  console.info(`Se desconto ${descuento}%, resultado: ${Math.round(Math.abs(cantidad / 100 * descuento - cantidad))}`)
}

descontar(1000, 20) */

/* 
\\--------------------------------------------------
                        EJERCICIO 17
--------------------------------------------------\\ */
/* 
//mi solucion

/* 
const tiempo = (fecha = undefined) => {
  if (fecha === undefined) {return console.warn("No haz insertado una fecha")}

  if (!(fecha instanceof Date)) {return console.error(`No haz insertado una fecha correcta`)} 

  let fechaActual = new Date().getFullYear() - fecha.getFullYear()

  console.info(`Desde la fecha ${fecha.toLocaleDateString()} pasaron ${fechaActual} años`)

}

tiempo(new Date(2008, 0, 2))  */

//solucion jon

/* 
const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No haz insertado una fecha")

  if (!(fecha instanceof Date)) return console.error(`No haz insertado una fecha correcta`)

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365
  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS)

  return (Math.sign(aniosHumanos) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos) === 1)
      ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
      : console.info(`Estamos en el año actual, ${fecha.getFullYear()}`)
}

calcularAnios(new Date()) //devuelve que es la fecha actual
calcularAnios(new Date(2008, 0, 2)) //devulve los anios que pasaron
calcularAnios(new Date(2108, 0, 2)) //devulve los anios que faltan */

/* 
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

/* 
\\--------------------------------------------------
                        EJERCICIO 18
--------------------------------------------------\\ */

//no lo pude hacer solo y mire el video

/* 
const contarVocalesConsonantes = (texto = "") => {

  if (texto === "") return console.warn("No ingresaste una cadena de texto")

  if (typeof texto !== 'string') return console.error(`El valor ${texto} no es un texto`)

  let vocales = /[aeiouáéíóúü]/ig

  let consonantes = /[^aeiou]/ig

  console.log(vocales.exec(texto))

  console.log(` El texto "${texto}" tiene:
  Vocales: ${texto.match(vocales).toString().split("").length}
  Consonantes: ${texto.match(consonantes).toString().split("").lenght}`)
}

contarVocalesConsonantes("Hola Mundo") */

//solucion de jon

/* 
contarLetras = (cadena = "") => {
  if (cadena === "") return console.warn("No ingresaste una cadena de texto")

  if (typeof cadena !== 'string') return console.error(`El valor ${cadena} no es una cadena de texto`)

  let vocales = 0,
    consonantes = 0

  cadena = cadena.toLowerCase()

  for (let letra of cadena) {
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) vocales++

    if (/[aeiouáéíóúü]/.test(letra)) consonantes++  
  }

  return console.info({
    cadena,
    vocales,
    consonantes
  })
}

contarLetras("Hola Mundo") */

/* 
\\--------------------------------------------------
                        EJERCICIO 19
--------------------------------------------------\\ */

/* 
const validarNombre = (nombre = "") => {
  if (nombre === "") return console.warn("No ingresaste el texto a evaluar")

  if (typeof nombre !== 'string') return console.error(`El valor "${nombre}" no es un texto`)

  let expReg = /^[A-ZÑÁÉÍÓÚ][a-záéíóúÁÉÍÓÚ]+\s[A-Z][a-z]+/g

  if (expReg.test(nombre) === true) return console.info(`El texto "${nombre}" es un nombre valido`)

  if (expReg.test(nombre) === false) return console.info(`El texto "${nombre}" no es un nombre valido`)
}

validarNombre("Joel Ezequiel Leiva") */

//solucion de jon

/* 
const validarNombre = (nombre = "") => {
  if (nombre === "") return console.warn("No ingresaste un nombre")

  if (typeof nombre !== 'string') return console.error(`El valor "${nombre}" no es un nombre`)

  let expReg = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/g.test(nombre)

  return (expReg) 
  ? console.info(`"${nombre}", es un nombre valido`)
  : console.info(`"${nombre}", no es un nombre valido`)
}

validarNombre("Joel Ezequiel") */

/* 
\\--------------------------------------------------
                        EJERCICIO 20
--------------------------------------------------\\ */

/* 
const validarEmail = (texto = "") => {

  if (texto === "") return console.warn("No ingresaste el texto a evaluar")

  if (typeof texto !== 'string') return console.error(`El valor ${texto} no es un texto`)

  let expReg = /^\[A-Za-z0-9._-]+@\[a-z0-9_-]+\.\[a-z]{2, 15}/ig

  if (expReg.test(texto) === true) return console.info(`El texto "${texto}" es un correo valido`)

  console.info(`El texto "${texto}" no es un correo valido`) 
}

validarEmail("leivajoel79@gmail.com") */

//solucion jon

/* 
const validarEmail = (email = "") => {

  if (email === "") return console.warn("No ingresaste el texto a evaluar")

    if (typeof email !== 'string') return console.error(`El valor "${email}" no es un texto`)

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)


    return (expReg) 
    ? console.info(`"${nombre}", es un nombre valido`)
    : console.info(`"${nombre}", no es un nombre valido`)

}

validarEmail()
validarEmail(34)
validarEmail("lei,va,joel,79@gmail.com")
validarEmail("leivajoel79@gmail.com") */

//fusion 19-20

/* 
const validarPatron = (cadena = "", patron = undefined) => {
  
  if (cadena === "") return console.warn("No ingresaste el texto a evaluar")

  if (typeof cadena !== "string") return console.error(`El valor "${email}" no es un texto`)

  if (patron === undefined) return console.warn("No ingresaste el patron a evaluar")

  if (!(patron instanceof RegExp)) return console.error(`El valor "${patron}" no es una expresion regular`)

  let expReg = patron.test(cadena)

  return (expReg) 
    ? console.info(`"${cadena}", cumple con el patron ingresado`)
    : console.info(`"${cadena}", no cumple con el patron ingresado`)
}

validarPatron("Joel Leiva", /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/g)
validarPatron("leivajoel79@gmail.com",/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i) */

/* 
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

/* 
\\--------------------------------------------------
                        EJERCICIO 21
--------------------------------------------------\\ */

const elevarCuadrado = (arreglo = undefined) => {

  if (arreglo === undefined) return console.warn("No ingresaste el arreglo a evaluar")

  if (!(arreglo instanceof Array)) return console.error(`"${arreglo} no es un arreglo"`)

  let numerosElevados = []

  for (let numero of arreglo) {
    if(typeof numero !== 'number') return console.error(`El valor ${numero} no es un numero`)

    numerosElevados.push(Math.pow(numero, 2))
  }

  console.info(numerosElevados)

}

//elevarCuadrado([1, 4, 5])

//solucion jon

const devolverCuadrados = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste el arreglo a evaluar")

  if (!(arreglo instanceof Array)) return console.error(`"${arreglo} no es un arreglo"`)

  if (arreglo.length === 0) return console.error("El arreglo esta vacio")

  for (let num of arreglo) {
    if (typeof num !== 'number') return console.error(`El valor ${numero} no es un numero`)
  }

  const newArray = arreglo.map(el => el * el)

  return console.info(`Arreglo original: ${arreglo},\nArreglo elevado al cuadrado: ${newArray}`)
}

//devolverCuadrados([1, 4, 5])

/* 
\\--------------------------------------------------
                        EJERCICIO 22
--------------------------------------------------\\ */

const numeroAltoBajo = (arreglo = undefined) => {

  if (arreglo === undefined) return console.warn("No ingresaste el arreglo a evaluar")

  if (!(arreglo instanceof Array)) return console.error(`"${arreglo} no es un arreglo"`)

  let almacenarNumeros = []

  for (let numero of arreglo) {
    if(typeof numero !== 'number') return console.error(`El valor ${numero} no es un numero`)

    almacenarNumeros.push(numero)
  }

  console.info([Math.max(...almacenarNumeros), Math.min(...almacenarNumeros)])

}

//numeroAltoBajo([1, 4, 5, 99, -60])

//solucion jon

const arrayMinMax = (arreglo = undefined) => {

  if (arreglo === undefined) return console.warn("No ingresaste el arreglo a evaluar")

  if (!(arreglo instanceof Array)) return console.error(`"${arreglo} no es un arreglo"`)

  if (arreglo.length === 0) return console.error("El arreglo esta vacio")

  for (let num of arreglo) {
    if (typeof num !== 'number') return console.error(`El valor ${numero} no es un numero`)
  }

  return console.info(`Arreglo original ${arreglo}\nValor Mayor ${Math.max(...arreglo)}\nValor Menor: ${Math.min(...arreglo)}`)
}

//arrayMinMax([1, 4, 5, 99, -60])

/* 
<--------------------------------------------------
                    EJERCICIO 23
-------------------------------------------------->*/

const almacenarParesImpares = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste el arreglo a evaluar")

  if (!(arreglo instanceof Array)) return console.error(`"${arreglo} no es un arreglo"`)

  let Pares = [],
    Impares = []

  resultado = {
    Pares,
    Impares
  }

  for (const numero of arreglo) {
    if (typeof numero !== 'number') return console.error(`El valor ${numero} no es un numero`)

    numero = Math.round(numero)

    if ((numero % 2 ) === 0) resultado.Pares.push(numero)

    if ((numero % 2 ) !== 0) resultado.Impares.push(numero)
  }

  console.info(resultado)
}

//almacenarParesImpares([1, 2.2, 3, 4, 5, 6, 7, 8, 9, 0])

//solucion jon

const separarParesImpares = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste el arreglo a evaluar")

  if (!(arreglo instanceof Array)) return console.error(`"${arreglo} no es un arreglo"`)

  if (arreglo.length === 0) return console.error("El arreglo esta vacio")

  for (let num of arreglo) {
    if (typeof num !== 'number') return console.error(`El valor ${numero} no es un numero`)
  }

  return console.info({
    pares: arreglo.filter(num => num % 2 === 0),
    impares: arreglo.filter(num => num % 2 !== 0)
  })
}

//separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

/* 
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

/* 
<--------------------------------------------------
                    EJERCICIO 24
-------------------------------------------------->*/

//vi el video y solo tuve que agregar el .map para pode crear un array igual al orignal pero independiente

const arrayAscendentesDescendentes = (arreglo = undefined) => {

  if (arreglo === undefined) return console.warn("No ingresaste el arreglo a evaluar")

  if (!(arreglo instanceof Array)) return console.error(`"${arreglo} no es un arreglo"`)

  if (arreglo.length === 0) return console.error("El arreglo esta vacio")

  for (let num of arreglo) {
    if (typeof num !== 'number') return console.error(`El valor ${numero} no es un numero`)
  }

  return console.info({
    arreglo,
    asc: arreglo.map(el => el).sort(),
    desc: arreglo.map(el => el).sort().reverse()
  })

}
//arrayAscendentesDescendentes([7, 5, 7, 8, 6])

//solucion jon

const ordenarArreglo = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste el arreglo a evaluar")

  if (!(arreglo instanceof Array)) return console.error(`"${arreglo} no es un arreglo"`)

  if (arreglo.length === 0) return console.error("El arreglo esta vacio")

  for (let num of arreglo) {
    if (typeof num !== 'number') return console.error(`El valor ${numero} no es un numero`)
  }

  return console.info({
    arreglo,
    asc: arreglo.map(el => el).sort(),
    desc: arreglo.map(el => el).sort().reverse()
  }) 
}

//ordenarArreglo([7, 5, 7, 8, 6])

/* 
<--------------------------------------------------
                    EJERCICIO 25
-------------------------------------------------->*/

//tuve que ver el video de jon

const eliminarRepetidos = (arreglo = undefined) =>{
  if (arreglo === undefined) return console.warn("No ingresaste el arreglo a evaluar")

  if (!(arreglo instanceof Array)) return console.error(`"${arreglo} no es un arreglo"`)

  if (arreglo.length === 0) return console.error("El arreglo esta vacio")

}

eliminarRepetidos(["x", 10, "x", 2, "10", 10, true, true])

//solucion jon

const quitarDuplicados = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste el arreglo a evaluar")

  if (!(arreglo instanceof Array)) return console.error(`"${arreglo} no es un arreglo"`)

  if (arreglo.length === 0) return console.error("El arreglo esta vacio")
  
  if (arreglo.length === 1) return console.error("El arreglo debe tener al menos 2 elementos")

/* 
  console.info({
    original: arreglo,
    sinDuplicados: arreglo.filter((value, index, self) => self.indexOf(value) === index)
  }) */

  //solucion optimizada

  console.info({
    original: arreglo,
    sinDuplicados: [... new Set(arreglo)]
  })
}

//quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true])

/* 
<--------------------------------------------------
                    EJERCICIO 26
-------------------------------------------------->*/

const sacarPromedio = (arreglo = undefined) => {
  
  if (arreglo === undefined) return console.warn("No ingresaste el arreglo a evaluar")

  if (!(arreglo instanceof Array)) return console.error(`"${arreglo} no es un arreglo"`)

  if (arreglo.length === 0) return console.error("El arreglo esta vacio")

  if (arreglo.length === 1) return console.error("El arreglo necesita al menos 2 numeros")

  for (let num of arreglo) {
    if (typeof num !== 'number') return console.error(`El valor ${numero} no es un numero`)
  }

  return console.info(arreglo.reduce((acumulador, valorActual) => acumulador + valorActual) / arreglo.length)
}

//sacarPromedio ([9,8,7,6,5,4,3,2,1,0])

//solucion jon

const promedio = (arreglo = undefined) => {

  if (arreglo === undefined) return console.warn("No ingresaste el arreglo a evaluar")

  if (!(arreglo instanceof Array)) return console.error(`"${arreglo} no es un arreglo"`)

  if (arreglo.length === 0) return console.error("El arreglo esta vacio")

  if (arreglo.length === 1) return console.error("El arreglo necesita al menos 2 numeros")

  for (let num of arreglo) {
    if (typeof num !== 'number') return console.error(`El valor ${numero} no es un numero`)
  }

  return console.info(
    arreglo.reduce((total, num, index, arreglo) => {
      total += num;
      if (index === arreglo.length - 1) {
        return `El promedio de ${arreglo.join(" + ")} es ${total / arreglo.length}`
      } else {
        return total;
      }
    })
  )
}

//promedio([9,8,7,6,5,4,3,2,1,0])

/* 
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/

/* 
<--------------------------------------------------
                    EJERCICIO 27
-------------------------------------------------->*/

class Pelicula {
  constructor(id, titulo, director, anioEstreno, paisOrigen, tipoGenero, calificacion){
    this.id = id
    this.titulo = titulo
    this.director = director
    this.anioEstreno = anioEstreno
    this.paisOrigen = paisOrigen
    this.tipoGenero = tipoGenero
    this.calificacion = calificacion

    this.validarId(id)
/*     this.validarCadenas(titulo, director)
    this.validarAnioEstreno(anioEstreno)
    this.validarArreglos(paisOrigen, tipoGenero)
    this.validarCalificacion(calificacion) */
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`La propiedad ${propiedad} esta vacia`)

    if (typeof valor !== 'string') return console.error(`${propiedad}: "${valor}" no es una cadena de texto`)

    return true
  }

  validarId(id){
    if (this.validarCadena("Id IDMB", id))
      if (!(/^[a-z]{2}\d{7}$/.test(id))) return console.error("El id tiene que empezar con 2 letras y seguir con 7 numeros")
  }
/* 
  validarCadenas(titulo, director) {
    if (!titulo) return console.warn(`No ingresaste el titulo`)

    if (typeof titulo !== 'string') return console.error(`El valor "${titulo}" no es un texto`)

    if (!director) return console.warn("No ingresaste el director")
    
    if (typeof director !== 'string') return console.error(`El valor "${director}" no es un texto`)

    let expRegTitulo = /^[\w\D]{1,100}$/g

    let expRegDirector = /^[\w\D]{1,50}$/g

    if (expRegTitulo.test(titulo) === false) return console.error(`El titulo no puede pasar los 100 caracteres`)
    
    if (expRegDirector.test(director) === false) return console.error(`El director no puede pasar los 50 caracteres`)
  }

  validarAnioEstreno(anioEstreno) {

    if (!anioEstreno) return console.warn("No insertaste el año de estreno")

    if (typeof anioEstreno !== 'number') return console.error(`El valor "${anioEstreno}" no es un numero`)

    if (Math.sign(anioEstreno) === -1) return console.error("El año de estreno no puede ser negativo")

    let expReg = /^\d{4}$/g

    if (expReg.test(anioEstreno) === false) return console.error("El año tiene que ser de 4 digitos y entero")

  }

  validarArreglos(paisOrigen, tipoGenero) {

    if (!paisOrigen) return console.warn("No introduciste el pais")

    if (!(paisOrigen instanceof Array)) return console.error(`El valor "${paisOrigen}" no es un arreglo"`)

    if (paisOrigen.length === 0) return console.error("El arreglo no puede estar vacio")

    for (let pais of paisOrigen) {
      if (typeof pais !== 'string') return console.error(`El valor "${pais}" no es una cadena de texto`)
    }

    if (!tipoGenero) return console.warn("No introduciste el genero")

    if (!(tipoGenero instanceof Array)) return console.error(`El valor "${tipoGenero}" no es un arreglo`)

    if (tipoGenero.length === 0) return console.error("El arreglo no puede estar vacio")
    
    let generos = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film", "Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    
    for (let genero of tipoGenero) {
      if (typeof genero !== 'string') return console.error(`El valor "${genero}" no es un una cadena de texto`)
      
      if (generos.indexOf(genero) === -1) return console.error(`El valor "${genero}" no es un genero aceptado`)
    }

  }

  validarCalificacion(calificacion = undefined) {
    if (calificacion === undefined) return console.warn("No introduciste la calificacion")

    if (typeof calificacion !== 'number') return console.error(`El valor "${calificacion}" no es un numero`)

    if (Math.sign(calificacion) === -1) return console.error(`La calificacion no puede ser negativa`)

    if (calificacion > 10) return console.error(`La calificacion es del 0 al 10`)
  }

  static generosAceptados() {
    console.info(`Los generos aceptados son:\nAction, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. `)
  }

  fichaTecnica() {
    console.info
    (
    `Ficha tenica de ${this.titulo}\n\nId IMDB: ${this.id}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAño de estreno: ${this.anioEstreno}\nPais/es de origen: ${this.paisOrigen}\nGenero: ${this.tipoGenero}\nCalificacion: ${this.calificacion}`)
  } */
}

const peli = new Pelicula({
  id: "dd1234567"
/*   titulo: "fda",
  director: "fa",
  anioEstreno: 3255,
  paisOrigen: ["haof"],
  tipoGenero: ["Action"],
  calificacion: 8.6 */
})

//solucion jon

class Peliculas {
  constructor(id, titulo, director, estreno, pais, genero, calificacion){
    this.id = id
    this.titulo = titulo
    this.director = director
    this.estreno = estreno
    this.pais = pais
    this.genero = genero
    this.calificacion = calificacion

    this.validarIMDB(id)
  }

  validarCadena(propiedad, valor) {
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)

    if(typeof valor !== 'string') return console.error(`${propiedad} "${valor}" ingresado NO es una cadena de texto`)

    return true
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB ID", id)) 
      if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) 
        return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas y los 7 restantes numeros`)
  }
}

const pelis = new Peliculas({
  id: "tt1234567"
})
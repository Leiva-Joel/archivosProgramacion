// <=============================60.WEB APIs=============================>

/* 
  //La interfaz de programación de aplicaciones, conocida también por la sigla API, en inglés, application programming interface. Es decir es, en el caso de JS, aquella serie de objetos y mecanismos que tiene el lenguaje implementado en ciertas areas, en este en el JS de los navegadores, para poder interactuar con todo lo que tiene que ver con el navegador, como es el arbol de la estructura de el documeto HTML, eso es lo que vendria a ser el DOM, como todo el control de la ventana como tal del navegador, es decir, la barra de direcciones, el tamaño, el posicionamiento, algunas otras caracteristicas que el navegador nos puede dar como el idioma, su sistema operativo, su geolocalizacion, etc, eso vendria a ser el BOM. El CSSOM es el conjunto de objetos, metodos, interfaces que tiene JS para poder interactuar con el CSS

  //DOM: es lo que nos permite manejar HTML con JS en los navegadores

  //BOM: es la interaccion que tiene JS con el navegador

  //CSSOM: es la interaccion que tiene JS con CSS

  console.log(window)
  console.log(document)

  let texto = "Hola Mundo"

  const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

  hablar(texto)
*/





// <=============================61.DOM: Introducción=============================>

/* 
console.log("*********************Elementos del Documento*********************")

console.log(document)//devuelve todo el documeto HTML
console.log(document.head)//devuelve el head del documento HTML
console.log(document.body)//devuelve el body del documento HTML
console.log(document.documentElement)//devuelve la etiqueta HTML del documento HTML
console.log(document.doctype)//devuelve el tipo de documento del documento HTML
console.log(document.characterSet)//devuelve el charset del documento HTML, UTF-8
console.log(document.title)//devuelve el titulo del documento HTML
console.log(document.links)//devuelve una coleccion de elementos con los enlaces del documento HTML
console.log(document.images)//devuelve una coleccion de elementos con las imagenes del documento HTML
console.log(document.forms)//devuelve una coleccion de elementos con los formularios del documento HTML
console.log(document.styleSheets)//devuelve cuantas hojas de estilos tiene el documento HTML
console.log(document.scripts)//muestra una coleccion de elementos con los scripts del documento HTML
setTimeout(() => {
  console.log(document.getSelection().toString())//muestra lo que hayamos seleccionado en nuestra pagina
}, 3000);
document.write("<h2>Hola Mudno</h2>")
*/





// <=============================62.DOM: Nodos, Elementos y Selectores=============================>

/* 

//No confundir una etiqueta HTML, que eso para JS es un elemento, con un nodo

//Hay diferentes tipos de nodos, los comentarios HTML, las etiquetas, el texto para las etiquetas textuales tambien son nodos

//Los selectores son las clases y ids

//---------YA NO SE UTILIZAN---------

//trae los elementos con los nombres de etiqueta que le especifiquemos.
console.log(document.getElementsByTagName("li"))
//trae los elementos con la clase que le especifiquemos.
console.log(document.getElementsByClassName("card"))
//trae los elementos con el nombre, propiedad de los inputs, que le especifiquemos.
console.log(document.getElementsByName("nombre"))

//---------ACTUALMENTE SE UTILIZAN---------

//trae los elementos con el id que le especifiquemos.
console.log(document.getElementById("menu"))
//trae los elementos recibe como parametro un selector valido de CSS que no sean pseudoclases o pseudoelementos. Tarda un poco mas que el get...id porque tiene que validar que selector le pasamos
console.log(document.querySelector("#menu"))
//tambien sirve para buscar etiquetas, pero solo te trae la primera coincidencia que encuentre
console.log(document.querySelector("a"))
//no solo se queda con la primer coincidencia, sino que te trae todas las que encontro
console.log(document.querySelectorAll("a"))
//comparte la misma propiedad que los arreglos para saber su longitud
console.log(document.querySelectorAll("a").length)
//comparte el mismo metodo que los arreglos para navegar entres sus valores
document.querySelectorAll("a").forEach(el => console.log(el))
//se queda con la primera coincidencia
console.log(document.querySelector(".card"))
//se queda con todas las coincidencias
console.log(document.querySelectorAll(".card"))
//me trae la coincidencia numero 3
console.log(document.querySelectorAll(".card")[2])
//me trae el primer li que se encuentre dentro de la clase menu
console.log(document.querySelector("#menu li"))
//me trae todos los li que se encuentren dentro de la clase menu
console.log(document.querySelectorAll("#menu li"))

*/





// <=============================63.DOM: Atributos y Data-Attributes=============================>

/* 

//Atributos

console.log(document.documentElement.lang)//imprime el lenguaje del documento HTML
console.log(document.documentElement.getAttribute("lang"))//otra forma de imprimir el lenguaje
console.log(document.querySelector(".link-dom").href)//trae el href, es decire, http://127.0.0.1:5501/dom.html
console.log(document.querySelector(".link-dom").getAttribute("href"))//trae el atributo href, es decir dom.html

document.documentElement.lang = "en"//sirve para modificar atributos
console.log(document.documentElement.lang)//si lo imrimimos de vuelta aparece el tiempo modficado
document.documentElement.setAttribute("lang", "es-AR")//otra forma de modificar atributos
console.log(document.documentElement.lang)//si lo imrimimos de vuelta aparece el tiempo modficado

//Jon declara las variables para elementos del DOM en const ya que siempre va a ser el mismo elemento aunque le cambie los estilos, etc. Y le pone el signo $ para diferenciar las variables de la logica del programa y las del DOM
const $linkDOM = document.querySelector(".link-dom")

$linkDOM.setAttribute("target", "_blank")//Creando el atributo, usando la variable, para que se abra en otra pestaña
//Para evitar que sea insegura esa pestaña hay que agreagar ese atributo, para que no haya una dependencia entre la ventana que estamos abriendo y la ventana origen y es muy buena practica usarla
$linkDOM.setAttribute("rel", "noopener")
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha")//Cambiando la direccion para que lleve a otra pagina
console.log($linkDOM.hasAttribute("rel"))//Detectar si un atributo esta o no en el elemento, devuelve true o false
$linkDOM.removeAttribute("rel")//Remover un atributo
console.log($linkDOM.hasAttribute("rel"))//Si volvemos a fijarnos si existe el atributo despues de eliminarlo da false

//Data-Attributes

console.log($linkDOM.getAttribute("data-description"))//Como conseguir el data-attribute

console.log($linkDOM.dataset)//Devuelve un map con los data-attributes del elemento

console.log($linkDOM.dataset.description)//Aca le especificamos que data-attribute queremos que nos imprima

$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")//modificar un data-attribute

console.log($linkDOM.dataset.description)//Si lo volvemos a imprimir nos muestra el resultado que cambiamos

console.log($linkDOM.hasAttribute("data-id"))//Detectar si el elemento tiene o no el data-attribute

$linkDOM.removeAttribute("data-id")//Elimina un data-attribute

console.log($linkDOM.hasAttribute("data-id"))//Nos volvemos a fijar si existe el atributo despue de eliminarlo, false

*/





// <=============================63.DOM: Estilos y Variables CSS=============================>

/* 

const $linkDOM = document.querySelector(".link-dom")

//devuelve un map con las propiedades validas de CSS
console.log($linkDOM.style)

//devuelve las palabras textuales de los estilos que yo le puse
console.log($linkDOM.getAttribute("style"))

//Cuando queramos llamar a una propiedad CSS hay que hacerlo con la tecnica camelCase
console.log($linkDOM.style.backgroundColor)
console.log($linkDOM.style.color)

//Nos devuelve un mapa con los estilos computados del elemento
console.log(window.getComputedStyle($linkDOM))

//Asi accedemos a la propiedad que queramos
console.log(window.getComputedStyle($linkDOM).backgroundColor)

//Asi podemos modificar las propiedades CSS del elemento
$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block")

//Esta es otra forma de hacerlo mas comoda
$linkDOM.style.width = "50%"
$linkDOM.style.textAlign = "center"
$linkDOM.style.margin = "1rem auto"
$linkDOM.style.padding = "1rem"
$linkDOM.style.borderRadius = "1rem"

//Si volvemos a imprimir las propiedades nos aparece las que modificamos
console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))
console.log(getComputedStyle($linkDOM))

//Variables CSS - Custom Properties
const $html = document.documentElement,
$body = document.body

//Aca accedemos al html que seria el root y guardamos el valor de la propiedad que le digamos
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varDarkColor, varYellowColor)

//le asignamos los colores al body
$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

//cambiamos los valores de las custom properties
$html.style.setProperty("--dark-color", "#101010")
$html.style.setProperty("--yellow-color", "#fff444")

//le asignamos las custom properties a las variables
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

//le volemos a asignar los colores para que se vea el efecto de que lo cambiamos
$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor 

*/





// <=============================63.DOM: Estilos y Variables CSS=============================>

const $card = document.querySelector(".card")

//devuelve la etiqueta de la tarjeta
console.log($card)

//devuele el nombre de la clase
console.log($card.className)

//devuelve un map con las clases que tiene ese elemento, cual es la longitud del map, y lo que nos da className  
console.log($card.classList)

//indica si una clase esta o no en elemento, devulve true o false
console.log($card.classList.contains("rotate-45"))
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

//

console.log(document.documentElement.lang)//imprime el lenguaje del documento HTML
console.log(document.documentElement.getAttribute("lang"))
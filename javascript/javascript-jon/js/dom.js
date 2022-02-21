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





// <=============================64.DOM: Estilos y Variables CSS=============================>

/* 

const $linkDOM = document.querySelector(".link-dom")

//Devuelve un map con las propiedades validas de CSS y solo las que modifique tienen valor, pero las que no modifique estan vacias
console.log($linkDOM.style)

//Devuelve las palabras textuales de los estilos que yo le puse
console.log($linkDOM.getAttribute("style"))

//Cuando queramos llamar a una propiedad CSS hay que hacerlo con la tecnica camelCase
console.log($linkDOM.style.backgroundColor)
console.log($linkDOM.style.color)

//Nos devuelve un mapa con los estilos computados del elemento, es decir todos los estilos que trae el navegador por defecto para esa etiqueta
console.log(window.getComputedStyle($linkDOM))

//Asi accedemos a la propiedad que queramos
console.log(getComputedStyle($linkDOM).getPropertyValue("Color"))

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

//Le asignamos los colores al body
$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

//Cambiamos los valores de las custom properties
$html.style.setProperty("--dark-color", "#101010")
$html.style.setProperty("--yellow-color", "#fff444")

//Le asignamos las custom properties a las variables
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

//Le volemos a asignar los colores para que se vea el efecto de que lo cambiamos
$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor 

*/





// <=============================65.DOM: Clases CSS=============================>

/* 

const $card = document.querySelector(".card")

//Devuelve la etiqueta de la tarjeta
console.log($card)

//Devuele el nombre de la clase
console.log($card.className)

//Devuelve un map con las clases que tiene ese elemento, cual es la longitud del map, y lo que nos da className  
console.log($card.classList)

//Indica si una clase esta o no en elemento, devulve true o false
console.log($card.classList.contains("rotate-45"))

//Asi podemos agregarle clases a un elemento
$card.classList.add("rotate-45")

//Si comprobamos que este la clase agreagada nos va a devolver true
console.log($card.classList.contains("rotate-45"))
console.log($card.className)
console.log($card.classList)

//Asi podemos eliminar clases a un elemento
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"))

//Si NO tiene la propiedad se la AGREGA y SI la tiene se la SACA
$card.classList.toggle("rotate-45")

//Devulve true ya que recien se la agregue
console.log($card.classList.contains("rotate-45"))

//En este caso se la estaria sacando ya que la tiene
$card.classList.toggle("rotate-45")

//Devuelve false ya que recien la elimine
console.log($card.classList.contains("rotate-45"))

$card.classList.toggle("rotate-45")

//Asi podemos reemplazar una clase por otra a un elemento
$card.classList.replace("rotate-45", "rotate-135")

//Asi podemos agregarle varias clases al mismo tiempo a un elemento
$card.classList.add("opacity-80", "sepia")

//Asi podemos eliminarle varias clases al mismo tiempo a un elemento
$card.classList.remove("opacity-80", "sepia")

//Toggle no acepta varias clases, hay que aplicarlas una por una
$card.classList.toggle("opacity-80", "sepia")

*/





// <=============================66.DOM: Texto y HTML=============================>

/* 

const $whatIsDOM = document.getElementById("que-es")

let text = `
  <p>
  El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
  API para documentos HTML y XML.
  </p>
  <p>
  Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
  </p>
  <p>
      <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
  </p>
`

//Reemplaza un texto por otro, no es estandar y no detecta las etiquetas HTML como el p o la b y no se debe usar
//$whatIsDOM.innerText = text;

//Otra manera de reemplazar texto pero que tampoco reconoce las etiquetas HTML
//Se puede usar esta propiedad cuando en nuestro programa haya un chat y no permitir a los usuarios poner codigo HTML
$whatIsDOM.textContent = text;

//Mejor manera para reemplazar un texto por otro ya que reconoce las etiquetas HTML
$whatIsDOM.innerHTML = text;

//Esta forma elimina el texto y la etiqueta que ya teniamos y los parrafos los pone de manera independiente
$whatIsDOM.outerHTML = text; 

*/





// <=============================67.DOM Traversing: Recorriendo el DOM=============================>

/* 

//Es una serie de propiedades que nos da el api del DOM, que tomando como referencia un nodo, poder recorrer diferentes elementos

//Todos los metodos siguientes son para los nodos que sean elementos

const $cards = document.querySelector(".cards")

console.log($cards)

//Devuelve una coleccion HTML con cada elemento hijo que tenga
console.log($cards.children)

//Accedemos a uno en particular, ren este caso el numero 4 porque las posiciones empiezan en 0
console.log($cards.children[3])

//Sirve para detectar cual es el padre
console.log($cards.parentElements)

//Detecta el primer hijo que sea un nodo, devuelve espacios blanco porque hace referencia a las tabulaciones
console.log($cards.firstChild)

//Devuelve el ultimo nodo que esta dentro de cards, que seria el espacio en blanco entre </figure> y </section>
console.log($cards.lastChild)

//Devuelve el primer(first) elemento(element) hijo(child), que seria la tarjeta de Tech
console.log($cards.firstElementChild)

//Devuelve el ultimo(last) elemento(element) hijo(child), que seria la tarjeta de Nature
console.log($cards.lastElementChild)

//Devuelve el nodo anterior a la etiqueta figure, que seria un espacio en blanco que representa las tabulaciones
console.log($cards.previousSibling)

//Devuelve el nodo siguiente a la etiqueta figure, que seria un espacio en blanco que representa las tabulaciones
console.log($cards.nextSibling)

//Devuelve el elemento anterior a la etiqueta figure, que seria la etiqueta a
console.log($cards.previousElementSibling)

//Devuelve el elemento siguiente a la etiqueta figure, que seria la etiqueta script
console.log($cards.nextElementSibling)

//Devuelve el elemento ancestro mas cercano que le especifiquemos
console.log($cards.closest("body"))
console.log($cards.children[3].closest("section")) 

*/





// <=============================68.DOM: Creando Elementos y Fragmentos=============================>

/* 

//Crear una card desde JS
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figCaption = document.createElement("figcaption"),
  $figCaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals")
$img.setAttribute("alt", "Animals")

$figCaption.appendChild($figCaptionText)
$figure.classList.add("card")
//Sirve para poder asignarle hijos a un elemento
$figure.appendChild($img)
$figure.appendChild($figCaption)

$cards.appendChild($figure);

$figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/people" alt="People" />
  <figcaption>People</figcaption>
`

$figure2.classList.add("card")
$cards.appendChild($figure2)

//Forma de agreagar elementos dinamicamente con JS
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul")

document.write("<h3>Estaciones del Año</h3>")
document.body.appendChild($ul)

estaciones.forEach(el => {
  const $li = document.createElement("li")
  $li.textContent = el
  $ul.appendChild($li)
})

//Otra forma de agregar elementos dinamicamente con JS

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul")

document.write("<h3>Contienentes del Mundo</h3>")
document.body.appendChild($ul2)
$ul2.innerHTML = ""
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`))

//Fragmentos dinamicos: es como una variable que se crea dinamicamente y a ese fragmento y por cada iteracion que le tengamos que agregar un nuevo elemento, en ves de pegarle directamente al DOM le pegamos ese fragmento que esta en la memoria de la aplicacion, es decir que no esta en el DOM, y una vez que tengamos cargados todos los elementos cargados en ese fragmento solo hacemos una sola insercion al DOM. Y eso mejora el rendimiento del programa

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

*/





// <=============================69.DOM: Templates HTML=============================>

/* 

//Las templates HTML, como su nombre lo dice, es como un modelo a seguir en el cual vos estructuras el contenido HTML que quieras, que mediante JS, se convierta en dinamico y es otra forma de poder interactuar con el DOM

const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ]

  cardContent.forEach(el => {
    //Ya que las templates no se imprimen en el DOM, hay que crear un clone para que se pueda ver dentro
    $template.querySelector("img").setAttribute("src", el.img)
    $template.querySelector("img").setAttribute("alt", el.title)
    $template.querySelector("figcaption").textContent = el.title
    //Poder clonar un nodo, en este caso un template. Recibe: de quien se va a basar y si va a copiar todo su interior
    let $clone = document.importNode($template, true)
    $fragment.appendChild($clone)
  })

  $cards.appendChild($fragment)

*/





// <============================70.DOM: Modificando Elementos (Old Style)============================>

/* 

//Es una forma vieja de agregar los elementos y diferente a appendChild, que es el unico metodo que vimos para agregar los elementos HTML.

//Vamos a utilizar la manera menos recomendada para agilizar el video y tambien porque lo importante es entender los otros metodos que tenemos aparte de appendChild para agregar los elementos dinamicos
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  //Poder clonar un nodo
  $cloneCards = $cards.cloneNode(true)

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any" />
  <figcaption>Any</figcaption>
`
$newCard.classList.add("card")

//Sirve para reemplazar, y recibe dos parametros, el primero es el nuevo nodo y el segundo seria el nodo a reemplazar
//$cards.replaceChild($newCard, $cards.children[2])

//Sirve para remover un nodo
//$cards.removeChild($cards.lastElementChild)

//Sirve para insertar un nodo antes que otro, el primer parametro es el nuevo nodo y el otro es el nodo de referencia 
//$cards.insertBefore($newCard, $cards.firstElementChild);


document.body.appendChild($cloneCards);

*/





// <============================71.DOM: Modificando Elementos (Cool Style)============================> 

/* 

.insertAdjacent...

  //Reciben dos Parametros, el primero es la posicion y segundo depende de lo que se vaya a insertar

  //Vendria a ser como un appendChild o insertBefore, agrega un elemento. Su 2do parametro es el element
  .insertAdjacentElement(position,el)

  //Vendria a ser como un innerHTML, agrega contenido HTML. Su 2do parametro es el codigo HTML 
  .insertAdjacentHTML(position,html)

  //Vendria a ser como un textContent, inserta texto. Su 2do parametro es su codigo textual
  .insertAdjacentText(position,text)

Posiciones:

  //Estas son las posiciones, es decir el primer parametro de los insertAdjacent...

  beforebegin (hermano anterior)
  afterbegin (primer hijo)
  beforeend (ultimo hijo)
  afterend  (hermano siguiente)

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure")

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any" />
  <figcaption></figcaption>
`

$newCard.insertAdjacentHTML("beforeend", $contenCard)

$newCard.classList.add("card")

$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")

$cards.insertAdjacentElement("afterbegin", $newCard)

//Metodos que tenia jquery, es decir que ya no hace falta aprenderlo porque ya lo trae JavasCript


//Primer Hijo
//$cards.prepend($newCard);

//Ultimo Hijo
//$cards.append($newCard);

//Hermano Anterior
//$cards.before($newCard);

//Hermano siguiente
//$cards.after($newCard); 

*/





// <=============================69.DOM: Templates HTML=============================>

/* 

* 👉 Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.

* 👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido Manejadores de Eventos, o tambien Observadores o Escuchadores.

*/


//*👀IMPORTANTE: Todos los eventos empiezan con la palabra "on", excepto cuando lo definimos con addEventListener en un Manejador de Eventos Multiples

//3️⃣ Hay 3 formas de definir los eventos en JS:

//*Forma 1️⃣

  //!❌ A traves de ATRIBUTOS
    //!Lo cual es una mala practica. Para que el evento funcione a manera de atributo lo unico que hay que hacer es invocarlo de manera semantica. El valor del atributo va a ser el codigo JavaScript que yo quiera ejecutar

  //🟠 Cogido HTML: 

      //<button onclick="alert('Hola Mundo')">Evento con atributo HTML</button>👈Ejecuta el EVENTO onclick

    //❕Podemos ejecutar un Event Handler:

  //🟠 Codigo HTML:

    //<button onclick="holaMundo()">Evento con atributo HTML</button>

    //👉 Esta funcion funcion se va a convertir en el manejador de evento(Event Handler)

    //*👉 Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event'

  //🟡 Codigo JS:
    
    function holaMundo() {
      alert("Hola Mundo")
      console.log(event)
    } //*👈 Con esto en la consola, se desencadena un tipo de Objeto MouseEvent (evento del Mouse), y dentro de él se encuentran dos propiedades muy importantes: type y target.

    //*⏩Type: es el tipo de evento que se desencadeno
    //*⏩Target: indica cual fue el objeto que origino el evento


//*Forma 2️⃣

  //*✅ A traves de un Evento con Manejador Semantico
    //*Es una forma correcta de hacerlo. Se le llama manejador semantico porque va teniendo una coerencia la manera de como la vamos definiendo

  //*🔷Estas funciones se pueden definir como arrow function o como funciones anonimas

  //🟠 Codigo HTML:

    //<button id="evento-semantico">Evento con Manejador Semantico</button>;
  
  //🟡 Codigo JS

    const $eventoSemantico = document.getElementById("evento-semantico")

  //*📑Formula para ejecutar Funcion como Manejador Semantico:
  
  //*elementoHTMLQueAsignamosEvento.nombreDelEvento = funcionQueQueramosEjecutar

  //👀IMPORTANTE: 
  //!🚫NO hay que ponerle PARENTESIS() a la funcion porque sino se EJECUTA AUTOMATICAMENTE

    $eventoSemantico.onclick = holaMundo

  //!❗❗❗Tienen un inconveniente:
    //!Las limitantes que tiene es que una vez que hayas definido el evento semantico va a poder ejecutar UNA SOLA funcion, es decir, que pasa si por ejemplo le quiero agregar otra funcion:

    $eventoSemantico.onclick = function (e)  {
      alert("Hola Mundo Manejador de Eventos Semanticos")//👈Las funciones semanticas NO pueden RECIBIR PARAMETROS, el UNICO parametro que recibe es el evento en si. Que lo podemos obtener con la palabra 'event'

      //*🔧Los desarrolladores lo suelen SIMPLIFICAR a la palabra 'e'

      console.log(e)
      console.log(event)
    }

    //?🤔En este caso pensariamos que el evento tendria que ejecutar 2 alerts, pero NO. Ya que es como estar 📝📝 reescribiendo la otra funcion
    

//*Forma 3️⃣

  //*✅ A traves de un Evento con Manejador Multiple

  //*🔀 Esta forma es muy util cuando queramos hacer que un evento EJECUTE VARIAS FUNCIONES

  //🟠 Codigo HTML:

    //<button id="evento-multiple">Evento con Manejador Multiple</button>

  //🟡 Codigo JS:

    const $eventoMultiple = document.getElementById("evento-multiple")

  //*📑Formula para ejecutar Funcion como Manejador Multiple:
  //*elementoHTMLQueAsignamosEvento.addEventListener("nombreDelEvento", "funcionQueQueramosEjecutar")

  //👀IMPORTANTE: 
  //!🚫NO hay que ponerle PARENTESIS() a la funcion porque sino se EJECUTA AUTOMATICAMENTE

    $eventoMultiple.addEventListener("click", holaMundo)

    $eventoMultiple.addEventListener("click", (e) => {
      alert("Hola Mundo Manejador de Eventos Multiples")
      console.log(e)
      console.log(e.type)//👈 Devuelve el tipo de evento
      console.log(e.target)//👈 Devuelve el objeto que lo origina, es decir la etiqueta HTML
      console.log(event)
    })


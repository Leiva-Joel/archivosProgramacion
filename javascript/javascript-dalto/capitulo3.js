class Celular {
  constructor(color, peso, resolucion, camara, ram, prender) {
    this.color = color;
    this.peso = peso;
    this.resolucion = resolucion;
    this.camara = camara;
    this.ram = ram;
    this.reiniciar = false
    this.prender = false
  }
  prender() {
    if (this.prender == false) {
      alert("Celular prendido")
      prender = true
    } else {
      alert('Celular apagado')
    }
  }
  info() {
    document.write(`
    Este celular tiene las siguientes caracteristicas:
    Color: ${this.color} </br>
    Peso: ${this.peso} </br>
    Resolucion de la pantalla: ${this.resolucion} </br>
    Resolucion de la camara: ${this.camara} </br>
    Memoria RAM: ${this.ram} </br>
    </br>
    `);
  }
  reiniciar() {
    if (this.prender == true && reiniciar == false) {
      alert('Reiniciando celular')
    } else {
      alert('El celular esta apagado')
    }

    reiniciar == true
  }
  tomarFotos() {
    alert('Tomando una foto')
  }
  grabar() {
    alert("Grabando un video")
  }
}

class AltaGama extends Celular {
  constructor(color, peso, resolucion, camara, ram) {
    super(color, peso, resolucion, camara, ram);
  }

  camaraLenta() {
    alert('Estas grabando en camara lenta')
  }
  reconocimientoFacial() {
    alert('Activando reconocimiento facial')
  }

  info() {
    document.write(`
    Este celular tiene las siguientes caracteristicas:
    Color: ${this.color} </br>
    Peso: ${this.peso} </br>
    Resolucion de la pantalla: ${this.resolucion} </br>
    Resolucion de la camara: ${this.camara} </br>
    Memoria RAM: ${this.ram} </br>
    Contiene una camara extra </br>
    </br>
    `);
  }
}

celular1 = new Celular('rojo', '400gr', '350px', '9mpx', '1gb');
celular1.prender();
celular1.tomarFotos();

celular2 = new Celular('azul', '500gr', '300px', '12mpx', '2gb');
celular2.info();

celular3 = new Celular('dorado', '250gr', '400px', '7mpx', '1gb');
celular3.info();

celularPro1 = new AltaGama('Plata', '600gr', '750px', '18mpx', '4gb');
celularPro1.info()

celularPro2 = new AltaGama('Lima', '700gr', '850px', '15mpx', '5gb');
celularPro2.info()
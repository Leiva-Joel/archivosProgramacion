const d = document

export function reloj(iniciarReloj, detenerReloj, reloj ) {
  
  let relojDigital

  d.addEventListener("click", e => {
    if(e.target.matches(iniciarReloj)) {

      relojDigital = setInterval(() => {
        let hora = new Date().toLocaleTimeString()
        d.querySelector(reloj).innerHTML = `<h3>${hora}</h3>`
      }, 1000);

      d.querySelector(iniciarReloj).disabled = true

    }

    if(e.target.matches(detenerReloj)) {

      clearInterval(relojDigital)
      d.querySelector(reloj).innerHTML = null
      d.querySelector(iniciarReloj).disabled = false

    }

  })
}

export function alarma(iniciarAlarma, detenerAlarma, sonido) {
  let alarma
  const $alarma = d.createElement("audio")
  $alarma.src = sonido

  d.addEventListener("click", e => {
    if(e.target.matches(iniciarAlarma)) {
        alarma = setTimeout(() => {
          $alarma.play()
        }, 1000);

        d.querySelector(iniciarAlarma).disabled = true
    }
    
    if(e.target.matches(detenerAlarma)) {
      clearTimeout(alarma)
      $alarma.pause()
      $alarma.currentTime = 0
      d.querySelector(iniciarAlarma).disabled = false
      console.log(e)
    }

  })

}
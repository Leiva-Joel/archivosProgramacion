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

export function alarma(iniciarAlarma, detenerAlarma, audio) {

  d.addEventListener("click", e => {
    if(e.target.matches(iniciarAlarma)) {
      audio.play()
    }
    
    if(e.target.matches(detenerAlarma)) {
      d.querySelector(audio).removeAttribute("autoplay")
      d.querySelector(iniciarAlarma).disabled = false
      
    }
  })
  

}
const d = document,
  n = navigator

export default function webCam(id){
  const $cam = d.getElementById(id)
  let $webcam = n.mediaDevices
    .getUserMedia({video:true, audio:false})
    .then((stream) => {
      $cam.srcObject = stream
      $cam.play()
    })
    .catch((err) => {
      $cam.insertAdjacentHTML("afterend", `<p><mark>${err}</mark></p>`)
    })

}
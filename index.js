function seleccionarMascota(){
    if (hipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (capipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (ratigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
} else{
    alert('Debes seleccionar una mascota')
}}

let hipodoge = document.getElementById('hipodoge')
let capipepo = document.getElementById('capipepo')
let ratigueya = document.getElementById('ratigueya')

let spanMascotaJugador = document.getElementById('mascota-jugador')

let botonMascota = document.getElementById('boton-mascota')
botonMascota.addEventListener('click', seleccionarMascota)
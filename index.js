function seleccionarMascota(){
    if (hipodoge.checked){
        alert('Has seleccionado a Hipodoge')
    } else if (capipepo.checked){
        alert('Has seleccionado a Capipepo')
    } else if (capipepo.checked){
        alert('Has seleccionado a Ratigueya')
} else{
    alert('Debes seleccionar una mascota')
}}

let hipodoge = document.getElementById('hipodoge')
let capipepo = document.getElementById('capipepo')
let ratigueya = document.getElementById('ratigueya')

let botonMascota = document.getElementById('boton-mascota')
botonMascota.addEventListener('click', seleccionarMascota)
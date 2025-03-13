function seleccionarMascota(){
    if (document.getElementById('hipodoge').checked){
        alert('Has seleccionado a Hipodoge')
    } else if (document.getElementById('capipepo').checked){
        alert('Has seleccionado a Capipepo')
    } else if (document.getElementById('ratigueya').checked){
        alert('Has seleccionado a Ratigueya')
} else{
    alert('Debes seleccionar una mascota')
}}

let botonMascota = document.getElementById('boton-mascota')
botonMascota.addEventListener('click', seleccionarMascota)
function seleccionarMascota(){
    if (hipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (capipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (ratigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
} else{
    alert('Debes seleccionar una mascota')
}
    seleccionarMascotaEnemigo()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function seleccionarMascotaEnemigo(){
    let enemigoAleatorio = aleatorio(1, 3)

    if (enemigoAleatorio === 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }
    else if (enemigoAleatorio === 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }
    else if (enemigoAleatorio === 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else{
        alert('Error al seleccionar la mascota enemiga')
    }
}

function ataqueEnemigoAleatorio(){
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio === 1){
        ataqueEnemigo = 'Fuego'
    }
    else if (ataqueAleatorio === 2){
        ataqueEnemigo = 'Agua'
    }
    else if (ataqueAleatorio === 3){
        ataqueEnemigo = 'Tierra'
    } else{
        alert('Error al seleccionar el ataque enemigo')
    }
    combate()
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueEnemigoAleatorio()
}

function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueEnemigoAleatorio()
}

function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueEnemigoAleatorio()
}

function combate (){
    if (ataqueEnemigo == ataqueJugador) {
        resultado = 'Empate'
    } else if (ataqueEnemigo == 'Fuego' && ataqueJugador == 'Tierra'){
        resultado = 'Ganaste'
    } else if (ataqueEnemigo == 'Agua' && ataqueJugador == 'Fuego'){
        resultado = 'Ganaste'
    } else if (ataqueEnemigo == 'Tierra' && ataqueJugador == 'Agua'){
        resultado = 'Ganaste'
    }
    else{
        resultado = 'Perdiste'
    }
    crearMensaje()
    return resultado
}

function crearMensaje (){
    let parrafo = document.createElement('p')
    let mensaje = document.createTextNode('Tu ataque es ' + ataqueJugador + ' y el ataque de tu enemigo es ' + ataqueEnemigo + '. El resultado es ' + resultado)
    parrafo.appendChild(mensaje)
    document.body.appendChild(parrafo)
}

let hipodoge = document.getElementById('hipodoge')
let capipepo = document.getElementById('capipepo')
let ratigueya = document.getElementById('ratigueya')

let spanMascotaJugador = document.getElementById('mascota-jugador')
let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

let botonMascota = document.getElementById('boton-mascota')
botonMascota.addEventListener('click', seleccionarMascota)

let ataqueJugador = ''
let ataqueEnemigo = ''
let botonFuego = document.getElementById('boton-fuego')
botonFuego.addEventListener('click', ataqueFuego)
let botonAgua = document.getElementById('boton-agua')
botonAgua.addEventListener('click', ataqueAgua)
let botonTierra = document.getElementById('boton-tierra')
botonTierra.addEventListener('click', ataqueTierra)

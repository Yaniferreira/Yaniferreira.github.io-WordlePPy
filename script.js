let intentos = 5;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH', "SMILE", "TIGER", "MUSIC", "DANCE", "WATER"]
let palabra;
window.addEventListener('load', init)
const button = document.getElementById("guess-button");
const input = document.getElementById("guess-input");
const valor = input.value;
function init() {
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
    palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
}
const avisoUsuario = document.getElementsByTagName("h2")[0];
function intentar() {
    const INTENTO = leerIntento();
    const letras = /^[a-zA-Z]+$/;
    if (!letras.test(INTENTO)) {
        avisoUsuario.innerHTML = "solo estan perimitidas letras";
        intentos--
    } else if (INTENTO.length !== 5) {
        avisoUsuario.innerHTML = "debes ingresar 5 letras";
        intentos--
    } else {
        if (INTENTO === palabra) {
            terminar("<h1>GANASTE!😀</h1>")
            return
        }
        const GRID = document.getElementById("grid");
        const ROW = document.createElement('div');
        ROW.className = 'row';
        for (let i in palabra) {
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            if (INTENTO[i] === palabra[i]) { //VERDE
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = '#79b851';
            } else if (palabra.includes(INTENTO[i])) { //AMARILLO
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = '#f3c237';
            } else {      //GRIS
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = '#a4a7ac';
            }
            ROW.appendChild(SPAN)
        }
        GRID.appendChild(ROW)
        intentos--
    }
    if (intentos == 0) {
        terminar("<h1>PERDISTE!😖</h1>")
    }
}
    button.addEventListener("click", intentar);
    function leerIntento() {
        let intento = document.getElementById("guess-input");
        intento = intento.value;
        intento = intento.toUpperCase();
        return intento;
    }
    function terminar(mensaje) {
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        button.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
    }

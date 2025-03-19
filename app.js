let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumeroSortiados = [];
let numeroMaximo = 10;

AsignarTexto('h1','juego de adivinar');
AsignarTexto('p',`Indique un numero entre 1 y ${numeroMaximo}`);

function AsignarTexto (elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

function IntetoDeUsuario() {
    let NumeroDeUsuario = parseInt (document.getElementById('ValorUsuario')).value;


    if (NumeroDeUsuario === numeroSecreto) {

        AsignarTexto('p',`Acertaste el numero secreto en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (NumeroDeUsuario > numeroSecreto){
        AsignarTexto('p','numero secreto es menor');

    }else {
        AsignarTexto('p','el numero secreto es mayor');

    }

    intentos++;
    LimpiarCaja();
        return;
}

function LimpiarCaja() {
   document.querySelector('#ValorUsuario').value = "";

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumeroSortiados.length == numeroMaximo) {
        AsignarTexto('p', 'Ya se sortearon todos los numeros posibles');
    }else {

        if(listaNumeroSortiados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        }else {
            listaNumeroSortiados.push(numeroGenerado);
            return numeroGenerado;
       }
    }
}

function condicionesIniciales() {
    AsignarTexto('h1','juego de adivinar');
    AsignarTexto('p',`Indique un numero entre 1 y ${numeroMaximo}`);
    intentos = 1;
    generarNumeroSecreto();

}

function ReiniciarJuego() {
    LimpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('diabled',true);

}


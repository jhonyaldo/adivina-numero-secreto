let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);    
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el Número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero Secreto es menor') 
        } else {
            asignarTextoElemento('p','El numero Secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    };
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value= '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   // Si ya sorteamos toos los números
   if (listaNumerosSorteados.length == numeroMaximo)  {
      asignarTextoElemento('p', 'Ya se sortearon todos los Números Posibles')
   } else {
        //Si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            
        } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto!');
    asignarTextoElemento('p',`Indica un Número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    //Indicar Mensaje de Intervalos de Numeros
    condicionesIniciales();    
    //Deshabilitar boton de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);    
}

condicionesIniciales();

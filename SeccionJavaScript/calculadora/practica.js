const numeroUno = document.getElementById('nUno');
const numeroDos = document.getElementById('nDos');
const numeroResultado = document.getElementById('resulArea');
const btn = document.getElementById('btnOperar');

btn.addEventListener("click",mostrarResultado);

function obtenerResultado(){
        return parseFloat( numeroUno.value)+ parseFloat( numeroDos.value);     
}

function mostrarResultado(){
    numeroResultado.innerHTML = obtenerResultado();
}
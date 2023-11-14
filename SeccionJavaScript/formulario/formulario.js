// Definicion de variables
const formulario = document.getElementById('formy'),
      inputName= formulario.nombre,
      inputCorreo= formulario.correo,
      inputSexo= formulario.sexo,
      inputTerms= formulario.terminos;

const areaError =document.getElementById('liErros');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

function seleccionarGenero() {
    if(inputSexo.value=='men'){
        document.getElementById('labelMen').style.opacity='1';
        document.getElementById('labelWomen').style.opacity='.5';
    }
    if (inputSexo.value=='women') {
        document.getElementById('labelWomen').style.opacity='1';
        document.getElementById('labelMen').style.opacity='.5';
    }
}


function comprobarCampos(e) {
    limpiarError()
    comprobarNombre(e);
    comprobarCorreo(e);
    comprobarGenero(e);
    comprobarTerminos(e);
   
}

function cargarError(e,campo){

    inputName.className= "falta"
    areaError.style.display= "block";
    areaError.innerHTML+= `<li>Por favor completar el ${campo}</li>`;
    e.preventDefault();
}
//verificacion de campos

function comprobarNombre(e) {
    if (inputName.value==""||inputName.value==null  || !(expresiones.nombre.test(inputName.value))) {
        cargarError(e, 'nombre')
    }else{
        areaError.style.display= "none"; 
    }
    
}


function comprobarCorreo(e) {
    if (inputCorreo.value==""||inputCorreo.value==null|| !(expresiones.correo.test(inputCorreo.value))) {
        cargarError(e, 'correo');
    }else{
        areaError.style.display= "none";
    }
    
}
function comprobarGenero(e) {
    if(inputSexo.value==''||inputSexo.value==null){

        areaError.style.display= "block";
        areaError.innerHTML+= "<li>Por favor seleccion el sexo</li>";
        e.preventDefault();
        
    }else{
        areaError.style.display= "none";
    }
    
}

function comprobarTerminos(e) {
    if(inputTerms.checked==false){
        inputTerms.className= "falta"
        areaError.style.display= "block";
        areaError.innerHTML+= "<li>Debes aceptar los terminos</li>";
        e.preventDefault();
        
    }else{
        areaError.style.display= "none";
    }
    
}
function limpiarError() {
    areaError.innerHTML=""
}

document.getElementById('men').addEventListener('click',seleccionarGenero);
document.getElementById('women').addEventListener('click',seleccionarGenero);
document.querySelector('input[type="submit"]').addEventListener('click', comprobarCampos)
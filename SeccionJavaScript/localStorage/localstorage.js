let nombre = document.getElementById('valorIngresado')
let listado = document.getElementById('lista')
let nombres = [];
let nombresobtenidos = [];



function Persona(nombre) {
    this.nombre=nombre; 
}

function guardar() {
    let n = nombre.value;
    let nombres = JSON.parse( localStorage.getItem('personas'));
    if(n!=""||n!=null){
        nombres.push(new Persona(n))

        if (typeof(Storage)!= undefined) {
            localStorage.setItem('personas', JSON.stringify(nombres) )
            limpiarCampo()
            mostrarGuardado(n)
        }else{
            console.log('No soporta')
        }
    }

}
function limpiarCampo() {
    nombre.value=""
}
function mostrarGuardado(n) {
    let ultimo = `
        <tr>
            <td>${n}</td>
        </tr>
    `
    document.getElementById('cuerpoTabla').innerHTML+=ultimo;
}

function mostrar() {
    let nombresobtenidos = JSON.parse( localStorage.getItem('personas'));
    let listado = ""

    for (let i = 0; i < nombresobtenidos.length; i++) {
           
        listado += `
            <tr>
                <td>${nombresobtenidos[i].nombre}</td>
            </tr>
            
        `;      
              
          
    }
    
    document.getElementById('cuerpoTabla').innerHTML=listado;
    
}



document.getElementById('btnSave').addEventListener('click',guardar)

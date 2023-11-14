
//funcion auto envocada
(function(){
    const btnCreatediv = document.getElementById('btnCrear');
    const btnBorrarDiv = document.getElementById('btnEliminar');
    const btnReemdiv = document.getElementById('btnReemplazar');
    const btnEdit = document.getElementById('btnModificar')
  
    const divsCajas = document.getElementsByClassName('cajaThis');


    function crearN(){
        let nuevaCaja = document.createElement('div');
        let nuevoContenido = document.createTextNode('Somos Nuevos');
        nuevaCaja.appendChild(nuevoContenido);
        nuevaCaja.setAttribute('class','box nuevo');
        nuevaCaja.setAttribute('id','box');
        document.getElementById('container').appendChild(nuevaCaja);
    }

    function crear(posicion){
        let nuevaCaja = document.createElement('div');
        let nuevoContenido = document.createTextNode('Somos Un Reemplazo');
        nuevaCaja.appendChild(nuevoContenido);
        nuevaCaja.setAttribute('class','box reem');
        nuevaCaja.setAttribute('id','box');

        let cajas = document.getElementsByClassName('box');
        let cajaPadre = cajas[0].parentNode;

        cajaPadre.replaceChild(nuevaCaja, cajas[posicion])
    }


    function borrar(){
        let cajas = document.getElementsByClassName('box');
        let cajaPadre = cajas[0].parentNode;
        console.log(cajas.length)
        cajaPadre.removeChild(cajas[cajas.length-1])
    }

    function reemplazar(){
        let cajas = document.getElementsByClassName('box');
        
        if (cajas.length>=0) {
            crear(Math.floor( Math.random()* (cajas.length - 0) + 0))
        } else {
            crear(cajas.length)
        }

         
        console.log(cajas.length)
        
    }

    function randomEdit() {
        let cajas = document.getElementsByClassName('box');
     
        let cajaRandom = Math.floor( Math.random()* cajas.length)
        

        cajas[cajaRandom].innerHTML = " modificación random"
    }
    


    function cambiarColor(){
        let r = Math.floor( Math.random()* (255 - 0) + 0);
        let g = Math.floor( Math.random()* (255 - 0) + 0);
        let b = Math.floor( Math.random()* (255 - 0) + 0);
        let stringRgb = "rgb("+ r+"," +g +","+ b+ ")";
        this.style.background= stringRgb
    }

    
    for (let i = 0; i < divsCajas.length; i++) {
        divsCajas[i].addEventListener('click', cambiarColor)
        
    }

    btnCreatediv.addEventListener('click', crearN);
    btnBorrarDiv.addEventListener('click', borrar);
    btnReemdiv.addEventListener('click',reemplazar);
    btnEdit.addEventListener('click', randomEdit)
  

}())
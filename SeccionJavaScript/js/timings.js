const caja3 = document.getElementById('caja3');
const caja1 = document.getElementById('caja1');
const caja5 = document.getElementById('caja5');


function probanTiming() {
    caja3.className+=' probanTi';
}
function probanTiming2() {
    caja5.className+=' probanTi2';
}
function probanTiming3() {
    caja1.className+=' probanTi3';
}
/* let tiempo1=setTimeout(probanTiming,1000) */

let tiempo3=setTimeout(probanTiming3,500)
setTimeout(probanTiming,100)


   let intervalonuevo= setInterval(() => {
        document.getElementById('ccThis2').innerHTML+=`<div class="cajaThis" id="caja1" (onclick)="cambiarColor()">nueva</div>`
    }, 3000);

    
     
document.getElementById('btnp1').addEventListener('click',function () {
    clearInterval(intervalonuevo);
    console.log('se detuvo')
});


probanTiming2()


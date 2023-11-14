const horaLabel =document.getElementById('hora'),
      minLable = document.getElementById('min'),
      segLabel = document.getElementById('seg');

const diaLabel =document.getElementById('dia'),
      mesLable = document.getElementById('mes'),
      yearLabel = document.getElementById('year');




function refreshReloj() {
    let fecha = new Date()
    
    h=fecha.getHours();
    mi=fecha.getMinutes();
    se = fecha.getSeconds();

    d = fecha.getDate()
    me = fecha.getMonth()
    ye = fecha.getFullYear()

    crono=`<small class="hora" id="hora"> ${formato(h)}</small> : <small class="minuto" id="min">${formato(mi)}</small> : <small class="seg" id="seg">${formato(se)}</small>`;
    dma=`<small class="dia" id="dia">${formato(d)}</small> - <small class="mes" id="mes">${convertir(me)}</small> - <small class="year" id="year">${ye}</small>`;
    
    document.getElementById('cronoH').innerHTML=crono;
    document.getElementById('dmaH').innerHTML=dma;
    
}


function formato(n) {
    if (n >= 0 && n <= 9) {
        return "0"+n;
    } else {
        return ""+n;
    }
    
}

let intervalReloj= setInterval(() => {
    refreshReloj()
    
}, 1000);


let meses={
    0: "Enero",
    1: "Febrero",
    2: "Marzo",
    3: "Abril",
    4: "Mayo",
    5: "Junio",
    6: "Julio",
    7: "Agosto",
    8: "Septiembre",
    9: "Octubre",
    10: "Noviembre",
    11: "Diciembre"
}

function convertir(n) {
    if (n >=0 && n <=11) {
        return meses[n]
        
    }
    
}
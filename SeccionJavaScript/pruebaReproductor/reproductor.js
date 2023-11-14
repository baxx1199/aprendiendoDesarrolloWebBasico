const btnSearch= document.getElementById('btnBuscar')
const videoElement = document.getElementById('videoCanva')

let reproductor = videojs('videoCanva',{
    
})
let urlinput = document.getElementById('inputBuscar');

function getUrl() {
    console.log("si")
    let _URL ="";
    if (urlinput.value ==""|| urlinput.value ==null ) {
        console.log("nooo")
        alert('debe ingresar una url')
    } else {
        console.log("si x2")
        _URL=urlinput.value
        loadResource(_URL)
    }
}

let loadResource = (urlStr)=>{
   
        videoElement.setAttribute('src', urlStr)

}


btnSearch.addEventListener('click', getUrl)
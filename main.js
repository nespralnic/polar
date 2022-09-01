//DISPLAY DE CARDS

let cardContainer = document.querySelector(".card-container")
let cont = 1;
let scrollMax=0;
let scrolling = false
let scrollDown = false
let lengthArray = 10
//let contadorIntervalo = 0

console.log(window.innerWidth);

let setDisplay = 0

function displayStartF(){
    let initialWidth = window.innerWidth

    switch (true) {
        case initialWidth > 2450 :
            setDisplay = 7;
            break;
        case initialWidth > 2100 :
            setDisplay = 6;
            break;
        case initialWidth > 1750 :
            setDisplay = 5;
            break;
        case initialWidth > 1400 :
            setDisplay = 4;
            break;
        case initialWidth > 1050 :
            setDisplay = 3;
        break;
        default:
            setDisplay = 2;
            break;
    }

    console.log(setDisplay);

    
    for (let index = 0; index < setDisplay*2; index++) {
        setTimeout(()=>{
            let contenido = document.createElement("div")
            contenido.classList.add("card","new-card")
            cardContainer.appendChild(contenido);
        },index*200)
        
    }
}

//MAIN
//print 2 complete rows of initial cards depending on viewport size
displayStartF()

//"light" event
window.addEventListener('scroll',()=>{
    scrolling = true
})

// handle event with interval
const interv = setInterval(() => {
    
    //scrolling direction
    if (window.scrollY > scrollMax){
        scrollMax = window.scrollY
        scrollDown = true
    } else {
        scrollDown = false
    }

    //contadorIntervalo++

    //console.log("ContInt" + contadorIntervalo + "scroll ON: "+scrolling + "scroll DOWN: "+scrollDown);
    if (scrolling && scrollDown) {
        scrolling = false;
        //setDisplay completes each row
        for (let index = 0; index < setDisplay; index++) {
            setTimeout( ()=>{
            
                cont +=1
                let contenido = document.createElement("div")
                contenido.classList.add("card","new-card")
                contenido.innerHTML = cont
                
                //fin del intervalo con el length de fotos
                if (cont < lengthArray ){
                    cardContainer.appendChild(contenido);
                    //console.log("insert " + cont + "Ciclo: " + index);
                    //console.log("Window: " + window.scrollY + "Max: "+ scrollMax)
                    
                } else {
                        clearInterval(interv)
                }
            },index*300)    
        }
    }
    
    
},1200);


//---------------- FIN DISPLAY DE CARDS

//

//MENU DESPLEGABLE

function collapse(x) {
    x.classList.toggle("change");
    
    console.log(x);
    
    const itemsMenu = document.querySelector(".menu-container-items")

    itemsMenu.innerHTML ="" //double click issues

    if (x.classList.contains("change")){
        setTimeout(()=>{
            itemsMenu.innerHTML = '<div class="menu-categorias">'+
            '<a href="" class="menu-links"><h2>QUIENES SOMOS</h2></a>'
            +'<a href="" class="menu-links"><h2>SERVICIOS</h2></a>'
            +'<a href="" class="menu-links"><h2>NOTICIAS</h2></a>'
            +'<a href="" class="menu-links"><h2>CONTACTO</h2></a></div>'
        },200)
    } else {
        itemsMenu.innerHTML =""
    }
    

    console.log(x.classList.add);
    
  }

  

   








//detectan cambios cuando entrás y salís de la pestaña
/*
window.addEventListener('blur', function(){
    console.log('blur')
    console.log(window.innerWidth);
}, false)

window.addEventListener('focus', function(){
    console.log('focus')
}, false)
*/
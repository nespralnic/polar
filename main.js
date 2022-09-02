// hardcode pictures
let picsBase = [
    {
    "id": 1,
    "url": "./images/pelis/afterthe.jpeg",
    "categories": []
    },
    {
    "id": 2,
    "url": "./images/pelis/reygitano.jpg",
    "categories": []
    },
        {
    "id": 3,
    "url": "./images/pelis/biutiful.jpg",
    "categories": []
    },
    {
    "id": 4,
    "url": "./images/pelis/blackhollow.jpg",
    "categories": []
    },   
    {
    "id": 5,
    "url": "./images/pelis/bloodbonding.jpg",
    "categories": []
    },
        {
    "id": 6,
    "url": "./images/pelis/contetrencat.jpeg",
    "categories": []
    },
    {
    "id": 7,
    "url": "./images/pelis/cruzdelsur.jpeg",
    "categories": []
    },
    {
    "id": 8,
    "url": "./images/pelis/diezmil.jpg",
    "categories": []
    },
    {
    "id": 9,
    "url": "./images/pelis/elperdido.jpg",
    "categories": []
    },
        {
    "id": 10,
    "url": "./images/pelis/exile.jpg",
    "categories": []
    },
    {
    "id": 11,
    "url": "./images/pelis/lagallina.jpg",
    "categories": []
    },   
    {
    "id": 12,
    "url": "./images/pelis/luz.jpg",
    "categories": []
    },
        {
    "id": 13,
    "url": "./images/pelis/maniac.jpeg",
    "categories": []
    },
    {
    "id": 14,
    "url": "./images/pelis/monstresdepaper.jpg",
    "categories": []
    },
    {
    "id": 15,
    "url": "./images/pelis/nana.jpeg",
    "categories": []
    },   
    {
    "id": 16,
    "url": "./images/pelis/plenamar.jpg",
    "categories": []
    },
        {
    "id": 17,
    "url": "./images/pelis/prescindibles.jpg",
    "categories": []
    },
    {
    "id": 18,
    "url": "./images/pelis/recursoshumanos.jpg",
    "categories": []
    },
    {
    "id": 16,
    "url": "./images/pelis/red dress.jpg",
    "categories": []
    },
    {
    "id": 1,
    "url": "./images/pelis/todoparecia.jpg",
    "categories": []
    },
]


//DISPLAY DE CARDS

let cardContainer = document.querySelector(".card-container")
let scrollMax=0;
let scrolling = false
let scrollDown = false
let lengthArray = 10
//let contadorIntervalo = 0


//fetch pictures
console.log(picsBase);
let arrayPic = []
picsBase.forEach(element => {
    arrayPic.push(element.url);
});

console.log(arrayPic)

// starting foto delivery
//let arrayPic = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
let counterPic = 0;
let totalPic = arrayPic.length

function deliverPic(arrayPic){
    let x = arrayPic[counterPic]
    counterPic+=1
    return `<img src="${x}" alt="" class="card-image"></img>`
}




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

    
    for (let index = 0; index < setDisplay*2; index++) {
        setTimeout(()=>{
            let contenido = document.createElement("div")
            contenido.classList.add("card","new-card")
            contenido.innerHTML = deliverPic(arrayPic)
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

    
    if (scrolling && scrollDown) {
        scrolling = false;
        //setDisplay completes each row
        for (let index = 0; index < setDisplay; index++) {
            setTimeout( ()=>{
                if (counterPic < totalPic ){
                    let contenido = document.createElement("div")
                    contenido.classList.add("card","new-card")
                    contenido.innerHTML = deliverPic(arrayPic)
                    cardContainer.appendChild(contenido);
                    console.log(counterPic +" "+ totalPic);
                }else{
                    clearInterval(interv)
                }
                },index*300
            )   
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
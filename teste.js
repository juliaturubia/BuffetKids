
let fotosa = ["galeria1.png","galeria2.png", "galeria3.png", "galeria4.png" , "galeria5.png"  , "galeria6.png" , "galeria7.png"  ]
/*
console.log(slides[0])
console.log(slides.length)
*/

let intervalo1 = 3500
let indice1 = 0

teste()

function teste(){

    document.getElementById("fotos").src = (`img/${fotosa[indice1] }`)
    indice1++
    if (indice1 === 7){
        indice1 = 0
    }
    //**Trocar o slide a cada 3s */
    setTimeout(teste, intervalo1)
}


 
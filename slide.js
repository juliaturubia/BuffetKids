
let testes = ["gastronomia.png","personagens.png", "moni.png", "cozinha.png" ]
/*
console.log(slides[0])
console.log(slides.length)
*/

let intervalos = 4500
let indices = 0

slide()

function slide(){

    document.getElementById("slider").src = (`img/${testes[indices] }`)
    indices++
    if (indices === 4){
        indices = 0
    }
    //**Trocar o slide a cada 3s */
    setTimeout(slide, intervalos)
}


 
 
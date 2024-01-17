
let logoc = ["logo9.png","logo10.png"]
/*
console.log(slides[0])
console.log(slides.length)
*/

let intervalo = 1000
let indice = 0

show()

function show(){

    document.getElementById("logoca").src = (`img/${logoc[indice] }`)
    indice++
    if (indice === 2){
        indice = 0
    }
    //**Trocar o slide a cada 3s */
    setTimeout(show, intervalo)
}


 
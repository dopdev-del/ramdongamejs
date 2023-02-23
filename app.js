let randomnum1 = Math.floor(Math.random() * 6) + 1;
let selectednum1 = "dice" + randomnum1 + ".png"
let botonjugar = document.getElementById("boton");
document.querySelectorAll("img")[0].setAttribute("src", "./images/" + selectednum1);

let randomnum2 = Math.floor(Math.random() * 6) + 1;
let selectednum2 = "dice" + randomnum2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", "./images/" + selectednum2);

if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML = "Jugador 1 gana"
    let audiogana1 = new Audio("./audio/jugador1.mp3");
    audiogana1.play();
   

}else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML = "Jugador 2 gana"
    let audiogana2 = new Audio("./audio/jugador2.mp3");
    audiogana2.play();
   
   
}else if(randomnum1 === randomnum2){
    document.querySelector("h1").innerHTML = "Empate"
    let empate = new Audio("./audio/empate.mp3");
    empate.play();
}

botonjugar.addEventListener("click", ()=>{
    location.reload()
})

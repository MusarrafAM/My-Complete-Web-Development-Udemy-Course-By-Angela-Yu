
var randomNumber1 = Math.floor(Math.random() * 6 + 1)
var randomNumber2 = Math.floor(Math.random() * 6 + 1)

console.log(randomNumber1 , randomNumber2)


// ----------------------My way (W3school)
document.querySelector(".img1").src = "./images/dice"+ randomNumber1 +".png";
document.querySelector(".img2").src = "./images/dice"+ randomNumber2 +".png";

// --------------------------Using setAttribute (Angela)
// random1New = "./images/dice"+ randomNumber1 +".png"
// random2New = "./images/dice"+ randomNumber2 +".png"


// document.querySelector(".img1").setAttribute("src", random1New)
// document.querySelector(".img2").setAttribute("src", random2New)



if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw"
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Win 🚩"
}
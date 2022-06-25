var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var image1 = "dice" + randomNumber1 + ".png";
var image2 = "dice" + randomNumber2 + ".png";

var link1 = "images/" + image1;
var link2 = "images/" + image2;


document.querySelector(".img1").setAttribute("src", link1);
document.querySelector(".img2").setAttribute("src", link2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
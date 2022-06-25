var items = document.querySelectorAll(".drum");

// dodanie eventu dla każdego z przycisków
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        var passMe = this.innerHTML;
        play(passMe)
    });
}

// dodanie listenera do klawiatury
document.addEventListener("keydown", function (e) {
    passMe = e.key;
    play(passMe);
});

// obsługa dźwięku
function play (klucz) {
    switch (klucz) {
        case "w":
            tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            tom2 = new Audio("sounds/snare.mp3");
            tom2.play();
            break;
        case "k":
            tom3 = new Audio("sounds/kick-bass.mp3");
            tom3.play();
            break;
        case "l":
            tom4 = new Audio("sounds/crash.mp3");
            tom4.play();
            break;
        default:
            console.log("Something went wrong...");
            break;
    };
}




        
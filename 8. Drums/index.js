var sounds = [new Audio("sounds/tom-1.mp3"), 
              new Audio("sounds/tom-2.mp3"),
              new Audio("sounds/tom-3.mp3"),
              new Audio("sounds/tom-4.mp3"),
              new Audio("sounds/snare.mp3"),
              new Audio("sounds/kick-bass.mp3"),
              new Audio("sounds/crash.mp3")];

var items = document.querySelectorAll(".drum");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        var passMe = this.innerHTML;
        switch (passMe) {
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
        }
    });
}





        
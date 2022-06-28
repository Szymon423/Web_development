//  pattern of buttons
 var gamePattern = [];

//  avaliable buttons
 var buttonColours = ["red", "blue", "green", "yellow"];
 
//  randomly choosing number from 0 - 3
 var randomChosenColour = buttonColours[randomNumber()]

//  aktualizacja patternu dla gry
 gamePattern.push(randomChosenColour);
 
// mignięcie
 $("." + randomChosenColour).fadeOut(70).fadeIn(70);

// odtworzenie dźwięku
var name_ = "sounds/" + randomChosenColour + ".mp3";
alert(name_);
var audio = new Audio(name_);
audio.play();


//  function for generating random numbers
 function randomNumber() {
    return Math.floor(Math.random() * 4);
 }
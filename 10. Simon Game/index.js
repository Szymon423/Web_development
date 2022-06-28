// user level
var lvl = 0;

// user clicks counter
var clicks = 0;

// user pattern
var userClickedPattern = [];

// pattern of buttons
var gamePattern = [];

 // avaliable buttons
var buttonColours = ["red", "blue", "green", "yellow"];
 
// randomly choosing number from 0 - 3
var randomChosenColour = buttonColours[nextSequence()]

// aktualizacja patternu dla gry
gamePattern.push(randomChosenColour);
 
// odtworzenie dźwięku
playSound(randomChosenColour);

// mignięcie
$("." + randomChosenColour).fadeOut(70).fadeIn(70);

$(".btn").click(function(event) {
   userChosenColour = this.id;

   //  play the coresponging sound
   playSound(userChosenColour);
   userClickedPattern.push(userChosenColour);

   animatePress(userChosenColour);
   // increasing clicking counter
   clisks++;
 });

 $("body").keypress(function() {
  $("h1").text("Level " + lvl);
 });

 if (clicks === lvl) {
  checkAnswer();
 }


// checking answer function
function checkAnswer() {
  var it = (userClickedPattern === gamePattern);
  alert(it);
  return it;
}


// animation of the press
function animatePress(btn) {
  $("." + btn).addClass("pressed");

  setTimeout(function() {
      $("." + btn).removeClass("pressed");
  }, 100);
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  lvl++;
 }

function playSound(sound) {
   sound = new Audio("sounds/" + sound + ".mp3");
   sound.play();
}


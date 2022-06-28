// user level
var lvl = 1;

// start
var start = false;

// user clicks counter
var clicks = 0;

// user pattern
var userClickedPattern = [];

// pattern of buttons
var gamePattern = [];

 // avaliable buttons
var buttonColours = ["red", "blue", "green", "yellow"];
 


$(".btn").click(function(event) {
  if (start) {
    userChosenColour = this.id;

    //  play the coresponging sound
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    // increasing clicking counter
    if (start) {
    clicks++;
    }

    console.log("clicks: " + clicks);
    console.log("level: " + lvl);
    console.log("usr: " + userClickedPattern);
    console.log("prg: " + gamePattern);

    if (clicks === lvl) {
      checkAnswer();
    }
  }
});

//  czekanie na kliknięcie przycisku przez usera
$("body").keypress(function() {
  $("h1").text("Level " + lvl);
  start = true;
  nextSequence();
});
 

// checking answer function
function checkAnswer() {
  if (equals(userClickedPattern, gamePattern)) {
    var resoult = true;
    console.log("correct");
  } else {
    var resoult = false;
    console.log("wrong");
    $("h1").text("GAME OVER!");

  }


  if (resoult) {
    lvl++;
    
    setTimeout(function() {
      $("h1").text("Level " + lvl);
      nextSequence();
  }, 2000);
  }

  clicks = 0;
  userClickedPattern = [];
  return resoult;
}

// animation of the press
function animatePress(btn) {
  $("." + btn).addClass("pressed");

  setTimeout(function() {
      $("." + btn).removeClass("pressed");
  }, 100);
}

function nextSequence() {
  setTimeout(function() {
    // generate random number
    var randomNumber = Math.floor(Math.random() * 4);

    // randomly choosing number from 0 - 3
    var randomChosenColour = buttonColours[randomNumber]

    // aktualizacja patternu dla gry
    gamePattern.push(randomChosenColour);
    
    // odtworzenie dźwięku
    playSound(randomChosenColour);

    // mignięcie
    $("." + randomChosenColour).fadeOut(70).fadeIn(70);

  }, 1000);
 }

function playSound(sound) {
   sound = new Audio("sounds/" + sound + ".mp3");
   sound.play();
}

function equals(a, b) {
  if (a.length !== b.length) {
    console.log("wrong length");
    console.log(a);
    console.log(b);
    return false;
  } else {
    console.log("I'am here");
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        console.log("here: " + a[i] + "and " + b[i]);
        return false;
      }
    }
  }
  return true;  
}
  


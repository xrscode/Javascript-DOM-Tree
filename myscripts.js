"use strict";
//Listen for Events by selecting the element where the event will happen;

//Score Tally
let score = 20;
let highScore = 0;

//The Secret Number
let secretNumber = Math.round(Math.random() * 20);
console.log(`The secret number is; ${secretNumber}.`);
//document.querySelector(".number").textContent = secretNumber;

//Reset
document.querySelector(".again").addEventListener("click", function () {
  //RESET SCORE TO 20.
  score = 20;
  secretNumber = Math.round(Math.random() * 20);
  console.log(`New Secret Number ${secretNumber}.`);
  document.querySelector(".score").textContent = score;
  //Reset Number Variables
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

//The Check Button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //console.log(typeof guess, guess);

  //No Input
  if (!guess) {
    document.querySelector(".message").textContent = `No Number! 🙈`;

    //Player Wins
  } else if (guess === secretNumber) {
    highScore = highScore + 1;
    document.querySelector(".message").textContent =
      "🐒Congratulations you guessed correctly!🐦";
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".number").textContent = secretNumber;

    //Change Colour to GREEN:
    document.querySelector("body").style.backgroundColor = "#60b347";

    //Increase Width of Number:
    document.querySelector(".number").style.width = "30rem";

    //Player Loses
  } else if (guess > secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector(
        ".message"
      ).textContent = `Better luck next time!  Your guess was too high. 🙊`;
      document.querySelector("body").style.backgroundColor = "#b12222";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost the game.`;
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector(
        ".message"
      ).textContent = `Your guess was too low! 🐝`;
      document.querySelector("body").style.backgroundColor = "#b12222";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost the game.`;
      document.querySelector(".score").textContent = 0;
    }
  }
});

// document.querySelector(".score").textContent = score;
// document.querySelector(".highscore").textContent = highScore;

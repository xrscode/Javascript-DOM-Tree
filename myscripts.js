"use strict";
//Listen for Events by selecting the element where the event will happen;

//Score Tally
let score = 20;
let highScore = 0;

//The Secret Number
const secretNumber = Math.round(Math.random() * 20);
console.log(`The secret number is; ${secretNumber}.`);
document.querySelector(".number").textContent = secretNumber;

//The Check Button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //console.log(typeof guess, guess);

  //Guess correctly
  if (!guess) {
    document.querySelector(".message").textContent = `No Number! 🙈`;
  } else if (guess === secretNumber) {
    highScore = highScore + 1;
    document.querySelector(".message").textContent =
      "🐒Congratulations you guessed correctly!🐦";
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector(
        ".message"
      ).textContent = `Better luck next time!  Your guess was too high. 🙊`;
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
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost the game.`;
      document.querySelector(".score").textContent = 0;
    }
  }
});
console.log("fly");
console.log("fly");

// document.querySelector(".score").textContent = score;
// document.querySelector(".highscore").textContent = highScore;

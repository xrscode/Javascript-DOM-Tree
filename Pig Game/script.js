"use strict";
//Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting Conditions; Score 0.
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  //1.  Generate random dice roll.
  let dice = Math.ceil(Math.random() * 6);

  //2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //3. Check for rolled 1.  If true, switch to next player.
  if (dice !== 1) {
    //If dice score is NOT 1, add number to current score.
    currentScore += dice;
    current0El.textContent = currentScore; //Change Later
  } else {
    //Stay on player.
  }
});

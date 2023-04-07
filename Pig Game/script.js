"use strict";
let dice = Math.ceil(Math.random() * 6);

//Roll Dice
document.querySelector('.dice').addEventListener('click'), function () {

};



document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

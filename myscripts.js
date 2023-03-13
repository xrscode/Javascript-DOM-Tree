"use strict";
console.log(document.querySelector(".message").textContent); //Select in the same way you would CSS.
document.querySelector(".message").textContent = "Correct Number!";
console.log(document.querySelector(".message").textContent);

// //Score:
// //Class = 'label-score'
// console.log(document.querySelector(".label-score").textContent);
// document.querySelector(".label-score").textContent = 10;

// //Secret Number;
// //Class = 'number'
// console.log(document.querySelector(".number").textContent);
// document.querySelector(".number").textContent = 13;

// //Input Field;
// //Class = 'guess'
// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

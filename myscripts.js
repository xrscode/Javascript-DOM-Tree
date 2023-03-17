"use strict";
//Listen for Events by selecting the element where the event will happen;

//The Check Button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector(".message").textContent = `No Number! 🙈`;
  }
});

// Getting Elements
const containerEl = document.querySelector(".container");
const secondsEl = document.querySelector("#seconds");
const miliSecondsEl = document.querySelector("#mili-seconds");

// const buttonEls = document.querySelectorAll("button");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const recodeButton = document.getElementById("recodeButton");
const resetButton = document.getElementById("resetButton");

// console.log(startButton, stopButton, recodeButton, resetButton);

// setInterval(() => {
//   console.log(123);
// }, 1000);

let interval;
let seconds = 0;
let miliSeconds = 0;

// startButton 누르면 timer 시작
startButton.addEventListener("click", () => {
  interval = setInterval(() => {
    if (seconds < 10) {
      secondsEl.innerText = "0" + seconds;
    } else {
      secondsEl.innerText = seconds;
    }

    miliSeconds++;
    if (miliSeconds > 99) {
      seconds++;
      miliSeconds = 0;
    }

    miliSecondsEl.innerText = miliSeconds;
  }, 10);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  seconds = 0;
  miliSeconds = 0;
  secondsEl.innerText = "00";
  miliSecondsEl.innerText = "00";
});

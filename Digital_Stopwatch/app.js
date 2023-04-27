// Getting Elements
const containerEl = document.querySelector(".container");
const secondsEl = document.querySelector("#seconds");
const miliSecondsEl = document.querySelector("#mili-seconds");
const recodeListEl = document.querySelector("#recodeList");

// const buttonEls = document.querySelectorAll("button");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const recodeButton = document.getElementById("recodeButton");
const resetButton = document.getElementById("resetButton");

// console.log(startButton, stopButton, recodeButton, resetButton);
console.log(recodeListEl);

// setInterval(() => {
//   console.log(123);
// }, 1000);

let interval;
let seconds = 0;
let miliSeconds = 0;

// startButton 누르면 timer 시작
startButton.addEventListener("click", () => {
  clearInterval(interval);

  interval = setInterval(() => {
    // seconds 자리가 10보다 작은 경우, 두자리로 표시하기 위함
    if (seconds < 10) secondsEl.innerText = "0" + seconds;
    else secondsEl.innerText = seconds;

    miliSeconds++;

    if (miliSeconds > 99) {
      seconds++;
      miliSeconds = 0;
    }

    if (miliSeconds < 10) miliSecondsEl.innerText = "0" + miliSeconds;
    else miliSecondsEl.innerText = miliSeconds;
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
  recodeListEl.textContent = "";
});

recodeButton.addEventListener("click", () => {
  const recodeDiv = document.createElement("div");
  recodeListEl.appendChild(recodeDiv);
  recodeDiv.id = Number(new Date());
  recodeDiv.innerText = `${secondsEl.innerText}:${miliSecondsEl.innerText}`;
});

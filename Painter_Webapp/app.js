const canvasElement = document.querySelector("canvas");
const canvasContext = canvasElement.getContext("2d");
const lineWidthInput = document.querySelector("input#lineWidth");
const lineColorInput = document.querySelector("input#lineColor");
const lineColors = document.querySelectorAll(".color");
const modeButton = document.querySelector("button");

// console.log(lineColorInput);
// console.log(modeButton);

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

let paintingFlag = false;
let modeFlag = modeButton.innerText;

// Set canvas size
canvasElement.width = CANVAS_WIDTH;
canvasElement.height = CANVAS_HEIGHT;

// canvasContext.moveTo(0, 0);
canvasElement.addEventListener("mousedown", () => {
  paintingFlag = true;
  canvasContext.beginPath();
  if (modeFlag === "Fill Mode") {
    canvasContext.fillRect(0, 0, 700, 700);
  }
});

canvasElement.addEventListener("mouseup", () => {
  paintingFlag = false;
  canvasContext.closePath();
});

canvasElement.addEventListener("mousemove", (event) => {
  if (paintingFlag) {
    canvasContext.lineTo(event.offsetX, event.offsetY);
    canvasContext.stroke();
  }
});

canvasElement.addEventListener("mouseleave", () => {
  paintingFlag = false;
});

lineWidthInput.addEventListener("change", (event) => {
  const lineWidth = event.target.value;
  canvasContext.lineWidth = lineWidth;
});

lineColorInput.addEventListener("change", (event) => {
  //   console.log(event.target.value);
  canvasContext.strokeStyle = event.target.value;
});

lineColors.forEach((color) => {
  color.addEventListener("click", (event) => {
    canvasContext.strokeStyle = event.target.style.backgroundColor;
    canvasContext.fillStyle = event.target.style.backgroundColor;
  });
});

modeButton.addEventListener("click", () => {
  if (modeFlag === "Draw Mode") {
    modeButton.innerText = "Fill Mode";
    modeFlag = "Fill Mode";
  } else {
    modeButton.innerText = "Draw Mode";
    modeFlag = "Draw Mode";
  }
});

console.dir(document.body);

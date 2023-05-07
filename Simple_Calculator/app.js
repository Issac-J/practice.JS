// Getting Elements
const calculatorEl = document.querySelector(".calculator");
const inputEl = document.querySelector(".input");
const buttonEls = document.querySelectorAll(".buttons"); // Array
const operatorEl = document.querySelector(".operators");
const panelEl = document.querySelector(".panel");
const numberEls = document.querySelectorAll(".numbers div");
const equalEl = document.querySelector(".equal");
const clearEl = document.getElementById("clear");

// Global Variables
let resultDisplayFlag = false;

const exampleArr = ["7+8"];
// const inputArr

// Events

// ----- NumberButton
numberEls.forEach((numberButton) => {
  numberButton.addEventListener("click", (event) => {
    // 클릭한 버튼의 숫자를 inputEl 에 출력

    // 출력된 inputEl 의 String을 담기 위한 변수
    let currentString = inputEl.textContent;
    let lastChar = currentString[currentString.length - 1];

    if (resultDisplayFlag === false) {
      inputEl.textContent += event.target.textContent;
    } else if (
      (resultDisplayFlag === true && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "x" ||
      lastChar === "÷"
    ) {
      resultDisplayFlag = false;
      inputEl.textContent += event.target.textContent;
    } else {
      resultDisplayFlag = false;
      inputEl.textContent = "";
      inputEl.textContent += event.target.textContent;
    }
    // console.log(currentString, lastChar);
  });
});

// ----- OperatorButton

operatorEl.addEventListener("click", (event) => {
  let currentString = inputEl.textContent;
  let lastChar = currentString[currentString.length - 1];

  // 마지막에 클릭한 버튼이 연산자일 떄
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "x" ||
    lastChar === "÷"
  ) {
    let newString =
      currentString.substring(0, currentString.length - 1) +
      event.target.textContent;
    inputEl.textContent = newString;

    // console.log(currentString, newString);
  }
  // 아무것도 입력하지 않은 상태에서는 연산자를 클릭할 수 없을 때
  else if (currentString.length === 0) {
    console.log("Enter a Number first");
  } else {
    inputEl.textContent += event.target.textContent;
  }
});

equalEl.addEventListener("click", () => {
  let inputString = input.textContent;
  let numbers = inputString.split(/\+|\-|\x|\÷/g);
  let operators = inputString.replace(/[0-9]|\./g, "").split("");

  let divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  let multiply = operators.indexOf("x");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("x");
  }

  let subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  let add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    );
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  inputEl.textContent = numbers[0];
  resultDisplayFlag = true;
});

clearEl.addEventListener("click", (event) => {
  inputEl.textContent = "";
});

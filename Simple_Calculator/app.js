// Getting Elements
const inputElement = document.querySelector("div#input");
const operators = document.querySelectorAll(".operators div");
const numbers = document.querySelectorAll(".numbers div");

const clearButton = document.querySelector("#clear");

// console.log(inputElement);
// console.log(operators);
// console.log(clearButton);

let resultFlag = false;

// EventListener
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    const clickedOperator = event.target.className;
    let currentInputString = inputElement.innerText;
    let lastChar = currentInputString[currentInputString.length - 1];

    /*
      currentInputString 의 마지막 문자(lastChar)가 연산자가 아닌 경우
      currentInputString 에 클릭한 문자를 추가
    */
    if (
      lastChar !== "+" &&
      lastChar !== "-" &&
      lastChar !== "*" &&
      lastChar !== "/"
    ) {
      currentInputString += clickedOperator;
      inputElement.innerText += clickedOperator;
      console.log(currentInputString);
    }
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    const clickedNumber = number.innerText;
    inputElement.innerText += clickedNumber;

    /*
      number Button 을 클릭했을 경우 이어서 추가되어야 한다. 
    */
  });
});

/*
  ClearButton 을 클릭한 경우
  입력한 내용이 모두 제거되야 한다. 
*/
clearButton.addEventListener("click", (event) => {
  inputElement.innerText = "";
});

"use strict";

// input box
const inputBox = document.getElementById("input-box");
// all the buttons
const correctBtn = document.getElementById("b1");
const openBracesBtn = document.getElementById("b2");
const closeBracesBtn = document.getElementById("b3");
const modBtn = document.getElementById("b4");
const piBtn = document.getElementById("b5");
const sevenBtn = document.getElementById("b6");
const eightBtn = document.getElementById("b7");
const nineBtn = document.getElementById("b8");
const divideBtn = document.getElementById("b9");
const sqrtBtn = document.getElementById("b10");
const fourBtn = document.getElementById("b11");
const fiveBtn = document.getElementById("b12");
const sixBtn = document.getElementById("b13");
const multiplyBtn = document.getElementById("b14");
const squreBtn = document.getElementById("b15");
const oneBtn = document.getElementById("b16");
const twoBtn = document.getElementById("b17");
const threeBtn = document.getElementById("b18");
const subtractBtn = document.getElementById("b19");
const equalToBtn = document.getElementById("b20");
const zeroBtn = document.getElementById("b21");
const decimalBtn = document.getElementById("b22");
const percentBtn = document.getElementById("b23");
const addBtn = document.getElementById("b24");

// btn on click events

// correct button
correctBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression = expression.substring(0, expression.length - 1);
  inputBox.value = expression;
});
// open braces button
openBracesBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "(";
  inputBox.value = expression;
});

// close braces button
closeBracesBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += ")";
  inputBox.value = expression;
});

modBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "mod";
  inputBox.value = expression;
});

piBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "\u03C0";
  inputBox.value = expression;
});

sevenBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "7";
  inputBox.value = expression;
});

eightBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "8";
  inputBox.value = expression;
});

nineBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "9";
  inputBox.value = expression;
});

divideBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "/";
  inputBox.value = expression;
});

sqrtBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "\u221A";
  inputBox.value = expression;
});

fourBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "4";
  inputBox.value = expression;
});

fiveBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "5";
  inputBox.value = expression;
});

sixBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "6";
  inputBox.value = expression;
});

multiplyBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "x";
  inputBox.value = expression;
});

squreBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "\u00B2";
  inputBox.value = expression;
});

oneBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "1";
  inputBox.value = expression;
});

twoBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "2";
  inputBox.value = expression;
});

threeBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "3";
  inputBox.value = expression;
});

subtractBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "-";
  inputBox.value = expression;
});

zeroBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "0";
  inputBox.value = expression;
});

decimalBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += ".";
  inputBox.value = expression;
});

percentBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "%";
  inputBox.value = expression;
});

addBtn.addEventListener("click", () => {
  let expression = inputBox.value;
  expression += "+";
  inputBox.value = expression;
});

// code to test the code
document.addEventListener("keydown", (e) => {
  if (e.key == "d") {
    evaluate(inputBox.value);
  }
});

const evaluate = (expression) => {
  console.log(expression);
  try {
    console.log(validate(expression));
    let result = eval(validate(expression));
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const validatePi = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "\u03C0") {
      if (i == 0) {
        str = Math.PI + "*" + str.slice(1);
      } else if (i == str.length - 1) {
        str = str.slice(0, str.length - 1) + "*" + Math.PI;
      } else {
        str = str.slice(0, i) + "*" + Math.PI + "*" + str.slice(i + 1);
      }
    }
  }

  return str.replace(/\*\*/g, "*");
};

const validate = (input) => {
  // validate spaces + validate mod + validate x (multiplication)
  input = input.replace(/\s/g, "").replace(/mod/g, "%").replace(/x/g, "*");
  // validate pi
  input = validatePi(input);
  return input;
};

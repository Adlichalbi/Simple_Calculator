const add = () => {
  let num1 = parseFloat(document.getElementById("num1-el").value);
  let num2 = parseFloat(document.getElementById("num2-el").value);
  let sum = document.getElementById("result-el");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
  } else {
    sum.textContent = "Result: " + (num1 + num2);
  }
};

const subtract = () => {
  let num1 = parseFloat(document.getElementById("num1-el").value);
  let num2 = parseFloat(document.getElementById("num2-el").value);
  let sum = document.getElementById("result-el");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
  } else {
    sum.textContent = "Result: " + (num1 - num2);
  }
};

const divide = () => {
  let num1 = parseFloat(document.getElementById("num1-el").value);
  let num2 = parseFloat(document.getElementById("num2-el").value);
  let sum = document.getElementById("result-el");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
  } else if (num2 === 0) {
    alert("Cannot divide by zero.");
  } else {
    sum.textContent = "Result: " + num1 / num2;
  }
};

const multiply = () => {
  let num1 = parseFloat(document.getElementById("num1-el").value);
  let num2 = parseFloat(document.getElementById("num2-el").value);
  let sum = document.getElementById("result-el");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
  } else {
    sum.textContent = "Result: " + num1 * num2;
  }
};

const reset = () => {
  document.getElementById("num1-el").value = "";
  document.getElementById("num2-el").value = "";
  document.getElementById("result-el").textContent = "Result: ";
};

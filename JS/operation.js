"use strict";

/***** Function in the calculator *******/

/***
 * Reset the caluclation 
 * Del one number 
 * Operation
 * Associate the number with each number key
 * Update the display result on the display 
 ***/

 const number = document.querySelectorAll("[data-num]");
 const result = document.querySelector("[data-equal]");
 const operators = document.querySelectorAll("[data-operator]");
 const delBtn = document.querySelector("[data-del]");
 const resetBtn = document.querySelector("[data-reset]");
 
 const currentValue = document.getElementById("current-value");
 const previousValue = document.getElementById("previous-value");
 
 //variable to hold typed value 
 let typedValue = "";
 //variable to hold the operator that have previously clicked
 let previousOperator = "";
 let haveDot = false;
let operation;
 

 // Math Operations
function selectOperator(operator) {
  if(currentValue === undefined) return;
  if(previousValue!==""){
    calculation();
  }
  operation = operator;
  typedValue = currentValue.innerText + operation;
  previousValue.innerText = typedValue;
  currentValue.innerText = "";
}
  
 // Calculation Operations
 function calculation() {
  let result = "";
  let previous = parseFloat(previousValue.innerText);
  let current = parseFloat(currentValue.innerText);
  if(isNaN(previous) || isNaN(current)) {typedValue=""};

  switch(operation) {
    case "+":
      result = previous + current;
      break;
    case "-":
      result = previous - current;
      break;
    case "x":
      result = previous * current;
      console.log(result);
      break;
    case "÷":
      result = previous / current;
      break;
    default:
      return;
  }
  currentValue.innerText = (Number(result)).toLocaleString();
  operation = undefined;
  previousValue.innerText = "";
  }
 

// Associated clicked operator buttons 
 operators.forEach(btn => {
  btn.addEventListener("click",() => {
    selectOperator(btn.innerText);
    typedValue = "";
    currentValue.innerText = "";
  })
 })

 //Make number clickable and show on display
number.forEach((num) => {
    num.addEventListener("click", (e) => {
      if (e.target.innerText === "." && !haveDot) {
        haveDot = true;
      } /*else if (e.target.innerText === "." && haveDot) {
        return;
      } */ else if (currentValue.innerText.length === 20) {
        return;
      } else if (currentValue.innerText === undefined) {
        return;
      }
      typedValue += e.target.innerText;
      currentValue.innerText = typedValue;
      // console.log();
    });
  });

 // Reset calculation
  resetBtn.addEventListener("click",() => {
     previousValue.innerText = 0;
     currentValue.innerText = 0; 
     typedValue = ""; // Remove the item that typed before
     haveDot = false;
  });

  // Delete function
  delBtn.addEventListener("click",()=> {
  typedValue = currentValue.innerText.toString().slice(0,-1);
  currentValue.innerText = typedValue;
  if(typedValue.length===0){
    currentValue.innerText = 0;
  }
  });

// Result function
result.addEventListener("click",() => {
  calculation();
  previousValue.innerText = "";
  delBtn.disabled = true; // User can't press del to del the number for the result
})




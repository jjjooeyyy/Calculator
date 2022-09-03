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
 
 /* //operators functions
 const add = (num1,num2)=> num1+num2;
 const sub = (num1,num2)=> num1-num2;
 const multi = (num1,num2)=> num1*num2;
 const div = (num1,num2)=> num1/num2;
 
 //a function for return result from the above operators functions
 const caluclation = (operator,num1,num2) => {
   switch (operator) {
     case "+": //from id in the keycaps input
       return add(num1,num2);
     case "-":
       return sub(num1,num2);
     case "x":
       return multi(num1,num2);
     case "/":
       return div(num1,num2);
     default:
       return 0;
   }
 } */

 //Make number clickable and show on display
 /* number.forEach(target => {
    target.addEventListener("click", () =>{
        if (currentValue.innerHTML[0] == "0" && currentValue.innerHTML[1] !== "." ) {
            currentValue.innerHTML = target.innerHTML
        }else{
            currentValue.innerHTML += target.innerHTML
        }
    })
}); */

 //Make number clickable and show on display
number.forEach((num) => {
    num.addEventListener("click", (e) => {
      if (e.target.innerText === "." && !haveDot) {
        haveDot = true;
      } else if (e.target.innerText === "." && haveDot) {
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
  });
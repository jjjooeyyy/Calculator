
/******* Change Theme *******/
document.body.addEventListener("change", function(e) {
  let target = e.target;
  const calculator = document.body.querySelector(".container");

  switch (target.id) {
    case "theme1": /** the id for the radio input button **/
      //console.log("default");
      calculator.setAttribute("data-theme","one"); /** Change the value of "data-theme"attribute to "one" */
      break;
    
    case "theme2":
      //console.log("light");
      calculator.setAttribute("data-theme","two");
      break;

    case "theme3":
      //console.log("dark");
      calculator.setAttribute("data-theme","three");
      break;
  }
});

/*** Add and associate click function  *********/
document.body.addEventListener("click",(e) => {
  let target = e.target;
  if(e.target.id) { /** theme1,theme2,theme3 **/
    const key = (document.getElementById(`${e.target.id}`)).textContent;
  } /** change its text content, textcontent return HTML and CSS text */
 //console.log(e.target.id);
});
 
 
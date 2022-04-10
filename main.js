// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const convertNumberToString = (str) => {
  console.log(typeof str)
  const result = Number(str)
  console.log(typeof result)
  return result
}

console.log(convertNumberToString)

// Write a JavaScript program to convert a string to the number.
const convertStringToNumber = (num) => {
  console.log(typeof num)
  const result = String(num)
  return result
  console.log(typeof result)
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  function checkDataType (element) {
    return typeof element
  }
  console.log(checkDataType(5))

  
// Write a JavaScript program that adds 2 numbers together.
const sumOfTwoNumbers = (num1, num2) => {
  return num1 + num2;
}

sumOfTwoNumbers(1,2)
console.log(sumOfTwoNumbers)
// Write a JavaScript program that runs only when 2 things are true.
const bothAreTrue = (a,b) => {
  if(a && b){
  return true
}else {
  return false
}
}


bothAreTrue(1,2)
// Write a JavaScript program that runs when 1 of 2 things are true.
const onlyOneTrue = (a,b) => {
  if(a || b){
  return true
}else {
  return false
}
}


// Write a JavaScript program that runs when both things are not true.  
const noneAreTrue = (a,b) => {
  if(!a && !b){
  return true
}else {
  return false
}
}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

const numInput = document.getElementById("num2str")
num2str.value
console.log (num2str)

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24

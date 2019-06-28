
// Add
let add = document.getElementById("add")
// Subtract
let subtract = document.getElementById("subtract")
// Multiply
let multiply = document.getElementById("multiply")
// Divide
let divide = document.getElementById("divide")
// Equals
let equals = document.getElementById("equals")
// Answer
let answer = document.getElementById("answer")

add.addEventListener("click", create_calculation);
subtract.addEventListener("click", create_calculation);
multiply.addEventListener("click", create_calculation);
divide.addEventListener("click", create_calculation);
equals.addEventListener("click", calculation);

add.addEventListener("click", function () {
  color_change()
  this.classList.add("selectedButton")
});

subtract.addEventListener("click", function () {
  color_change()
  this.classList.add("selectedButton")
});

multiply.addEventListener("click", function () {
  color_change()
  this.classList.add("selectedButton")
});

divide.addEventListener("click", function () {
  color_change()
  this.classList.add("selectedButton")
});

function color_change () {
  var elements = document.getElementsByClassName("selectedButton");
  while(elements.length > 0) {
    elements[0].classList.remove("selectedButton")
  }
}

function create_calculation() {

  // Get the first number input
  let first_num = document.getElementById("first_number").value
  // Get the second number input
  let second_num = document.getElementById("second_number").value

  let opId = this.attributes.name.value

  if (opId === "add") {
    opId = "+"
  } else if (opId === "subtract") {
    opId = "-"
  } else if (opId === "multiply") {
    opId = "*"
  } else if (opId === "divide") {
    opId = "/"
  } else {
    opId
  }

  sum = first_num + opId + second_num

  console.log(sum)
}

function calculation() {
  answer.innerText = eval(sum)
}

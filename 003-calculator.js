function sum() {
  var operandA = document.getElementById("operand-a");
  var operandB = document.getElementById("operand-b");
  var result = document.getElementById("result");

  result.value = Number(operandA.value) + Number(operandB.value);
}

function sub() {
  var operandA = document.getElementById("operand-a");
  var operandB = document.getElementById("operand-b");
  var result = document.getElementById("result");

  result.value = Number(operandA.value) - Number(operandB.value);
  
}

function mul() {
  var operandA = document.getElementById("operand-a");
  var operandB = document.getElementById("operand-b");
  var result = document.getElementById("result");

  result.value = Number(operandA.value) * Number(operandB.value);

}

function div() {
  var operandA = document.getElementById("operand-a");
  var operandB = document.getElementById("operand-b");
  var result = document.getElementById("result");

  result.value = Number(operandA.value) % Number(operandB.value);

}

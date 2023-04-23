let answer = document.getElementById("Answer");
let op;
function EnterNumber(number) {
  answer.value += number;
}

function EnterOperator(operator) {
  op = operator;
  answer.value += operator;
}

function EnterClear() {
  answer.value = "";
}

function EnterEqual() {
  let values = answer.value.split(op);
  console.log(values);
  switch (op) {
    case "+":
      answer.value = parseInt(values[0]) + parseInt(values[1]);
      break;
    case "-":
      answer.value = values[0] - values[1];
      break;
    case "/": {
      if (parseInt(values[1]) == 0) {
        answer.value = "Error";
      } else {
        answer.value = values[0] / values[1];
      }
      break;
    }
    case "*":
      answer.value = values[0] * values[1];
  }
}

let sum = 0;
let input;
do {
  input = prompt("Enter a number (0 to exit))").trim();
  if (isNaN(input) || input == null || input.length == 0) {
    alert("please enter a valid number");
  } else {
    sum += parseFloat(input);
  }
} while (input != 0 || input == "");
alert(`The sum is : ${sum}`);

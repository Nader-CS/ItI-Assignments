let i, j, input, sensitive, isPalidrome, original;
input = prompt("Enter a string : ").trim();
while (input == null || input.length == 0) {
  input = prompt("Enter a String");
}
sensitive = parseInt(prompt("1=>case sensetive , 2=>not case sensitive :"));
while (sensitive != 1 && sensitive != 2) {
  alert("Enter a valid number");
  sensitive = parseInt(prompt("1=>case sensetive , 2=>not case sensitive :"));
}
i = 0;
j = input.length - 1;
isPalidrome = true;
original = input;
if (sensitive == 2) {
  input = input.toLowerCase();
}
while (i != j && i < j) {
  if (input[i] != input[j]) {
    isPalidrome = false;
    break;
  }
  i++;
  j--;
}
alert(`is ${original} palidrome ?  ${isPalidrome}`);

let input = prompt("Enter a string").trim();
let counter = 0;
while (input == null || input.length == 0) {
  input = prompt("Enter a String");
}
input = input.toLowerCase();
for (let i = 0; i < input.length; i++) {
  if (input[i] == "e") {
    counter++;
  }
}
alert(`The number of e in ${input} is : ${counter}`);

let input = prompt("Enter a String");
while (input == null || input.length == 0) {
  input = prompt("Enter a String");
}
document.write("Heading");
for (let i = 1; i <= 6; i++) {
  document.write(`<h${i}>${input}</h${i}>`);
}

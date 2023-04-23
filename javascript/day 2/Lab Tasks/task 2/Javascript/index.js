let n = parseInt(prompt("Enter a number"));
let inputs = [];
let sum = 0,
  Multiplying = 1;
for (let i = 0; i < n; i++) {
  inputs[i] = parseFloat(prompt(`Enter number ${i + 1}`));
}
document.write(
  "You have entered : ".fontsize(16).fontcolor("red"),
  inputs.join(" , ").fontsize(16),
  "<br />"
);
document.write(
  "Your values after bein sorted descending  : ".fontsize(16).fontcolor("red"),
  inputs
    .sort(function (a, b) {
      return b - a;
    })
    .join(" , ")
    .fontsize(16),
  "<br />"
);
document.write(
  "Your values after being sorted ascending  : ".fontsize(16).fontcolor("red"),
  inputs
    .sort(function (a, b) {
      return a - b;
    })
    .join(" , ")
    .fontsize(16),
  "<br />"
);

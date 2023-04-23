let n = parseInt(prompt("Enter a number"));
let inputs = [];
let sum = 0,
  Multiplying = 1;
for (let i = 0; i < n; i++) {
  inputs[i] = parseFloat(prompt(`Enter number ${i + 1}`));
}
let dividing = inputs[0] * inputs[0];
document.write(
  "<h1>Adding -- Multiplying --and dividing 3 values </h1>",
  "<br />"
);
for (let i = 0; i < n; i++) {
  sum += inputs[i];
  Multiplying *= inputs[i];
  if (inputs[i] != 0) {
    dividing /= inputs[i];
  }
}

document.write(
  `sum of ${n} values ${inputs.join("+")} : `.fontcolor("red"),
  sum,
  "<br />"
);
document.write(
  `\nmultiplication of ${n} values ${inputs.join("*")} : `.fontcolor("red"),
  Multiplying,
  "<br />"
);
document.write(
  `division of ${n} values ${inputs.join("/")} : `.fontcolor("red"),
  dividing,
  "<br />"
);

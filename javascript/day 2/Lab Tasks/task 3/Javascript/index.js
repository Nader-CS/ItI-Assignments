let radius = parseFloat(prompt("Enter the value of a circle radius"));
alert(`Total area of the circle is : ${Math.PI * radius * radius}`);
let square = parseFloat(
  prompt("What is the value you want to calculate square root : ")
);
alert(`The squre root of ${square} is : ${Math.sqrt(square)}`);
let degrees = parseFloat(
  prompt("What is the angle you want to calculate it's cos value : ")
);

document.write(calculateCos(degrees).toFixed(2));

function calculateCos(deg) {
  let rad = (Math.PI / 180) * deg;

  return Math.cos(rad);
}

let red = document.getElementById("red-range");
let green = document.getElementById("green-range");
let blue = document.getElementById("blue-range");
let parent = document.getElementById("parent");
let text = document.getElementById("text");
parent.addEventListener("input", function () {
  text.style.color = `rgb(${red.value},${green.value},${blue.value})`;
  console.log(`rgb(${red.value},${green.value},${blue.value})`);
});

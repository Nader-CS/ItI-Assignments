let childWindow;
let input;
let inputLength;
let delay = 3000;
function openPopUpWindow() {
  childWindow = window.open("", "popup window", "width=400,height=400");
  childWindow.moveTo(50, 50);
}
input = prompt("Enter a message");
inputLength = input.length;
for (let i = 0; i < inputLength; i++) {
  setTimeout(function () {
    childWindow.document.write(`${input[i]}`.fontsize(16));
  }, delay);
  delay += 2000;
}
setTimeout(function () {
  childWindow.close();
}, delay);

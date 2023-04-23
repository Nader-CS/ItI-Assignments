let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.beginPath();
let x = 0;
let y = 0;
ctx.moveTo(x, y);
let interval = setInterval(function () {
  if (x <= 500) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x += 50;
    y += 50;
    ctx.lineTo(x, y);
    ctx.stroke();
  } else {
    clearInterval(interval);
    alert("Ended...");
  }
}, 3000);

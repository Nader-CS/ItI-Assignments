let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let grad = ctx.createLinearGradient(300, 150, 300, 400);
grad.addColorStop(0, "blue");
grad.addColorStop(0.3, "white");
grad.addColorStop(0.3, "green");
grad.addColorStop(1, "white");
ctx.fillStyle = grad;
ctx.fillRect(50, 50, 430, 350);

ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(200, 150);
ctx.lineTo(350, 150);
ctx.moveTo(350, 148.5);
ctx.lineTo(350, 250);
ctx.moveTo(200, 148.5);
ctx.lineTo(200, 250);
ctx.stroke();

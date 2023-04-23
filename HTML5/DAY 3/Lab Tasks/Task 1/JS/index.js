let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let count = 0;
interval = setInterval(function () {
  let time1 = setTimeout(function () {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.arc(250, 250, 100, 0, Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }, 1000);
  let time2 = setTimeout(function () {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.arc(250, 150, 100, 0, Math.PI, true);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    count++;
  }, 4000);
  if (count == 10) {
    clearInterval(interval);
    //clear any registerd timeout
    clearTimeout(time1);
    clearTimeout(time2);
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.arc(250, 250, 100, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    console.log(count);
  }
}, 5000);

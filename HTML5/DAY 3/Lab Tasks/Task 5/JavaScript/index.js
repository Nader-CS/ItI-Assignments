let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let img = new Image();
img.src = "../banner-1.jpg";
img.onload = function () {
  ctx.drawImage(img, 0, 0, 500, 500);
  ctx.fillStyle = "white";
  ctx.font = "bold 13px Verdana";
  ctx.fillStyle = "white";
  ctx.fillText(
    "Building the Web of Tomorrow: Empowered by HTML5 and CSS3!",
    10,
    480
  );
};

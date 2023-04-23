let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let interval;
let icon2_direction = 1;
let icon1_direction = 1;
// console.log(parseInt(getComputedStyle(icon1).getPropertyValue("left")));
start.addEventListener("click", function () {
  interval = setInterval(function () {
    setTimeout(function () {
      if (icon1_direction == 1) {
        icon1.style.right =
          parseInt(getComputedStyle(icon1).getPropertyValue("right")) -
          50 +
          "px";
        if (parseInt(getComputedStyle(icon1).getPropertyValue("left")) == 500) {
          icon1_direction = -1;
        }
      } else {
        icon1.style.right =
          parseInt(getComputedStyle(icon1).getPropertyValue("right")) +
          50 +
          "px";
        if (
          parseInt(getComputedStyle(icon1).getPropertyValue("right")) == 498
        ) {
          icon1_direction = 1;
        }
      }
    }, 25);
    setTimeout(function () {
      if (direction == 1) {
        icon2.style.left =
          parseInt(getComputedStyle(icon2).getPropertyValue("left")) -
          50 +
          "px";
        console.log(parseInt(getComputedStyle(icon2).getPropertyValue("left")));
      }
    }, 50);
  }, 50);
});

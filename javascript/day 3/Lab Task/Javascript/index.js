let imageNames = [
  "pexels-any-lane-5945953.jpg",
  "pexels-bruno-scramgnon-1337825.jpg",
  "pexels-ella-olsson-1640767.jpg",
  "pexels-jj-jordan-7585533.jpg",
  "pexels-john-finkelstein-1630588.jpg",
  "pexels-karolina-grabowska-4038655.jpg",
  "pexels-rachel-claire-4819823.jpg",
];
let img = document.getElementById("image");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let slideShow = document.getElementById("slide");
let stop = document.getElementById("stop");
let interval;
nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);
slideShow.addEventListener("click", slidePlayer);
stop.addEventListener("click", stopSlidePlayer);

function next() {
  if (interval) {
    return;
  }
  let index = getImgIndex();
  if (index == imageNames.length - 1) {
    return;
  }

  document
    .getElementById("image")
    .setAttribute("src", "../images/" + imageNames[index + 1]);
}
function prev() {
  if (interval) {
    return;
  }
  let index = getImgIndex();
  if (index == 0) {
    return;
  }
  document
    .getElementById("image")
    .setAttribute("src", "../images/" + imageNames[index - 1]);
}
function slidePlayer() {
  if (interval) {
    return;
  }
  interval = setInterval(function () {
    let index = getImgIndex();
    if (index == imageNames.length - 1) {
      index = -1;
    }
    document
      .getElementById("image")
      .setAttribute("src", "../images/" + imageNames[index + 1]);
    console.log(index + 1);
  }, 2000);
}
function stopSlidePlayer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}
function getImgIndex() {
  let currentImg = img.getAttribute("src").split("/")[2];
  let index = imageNames.indexOf(currentImg);
  return index;
}

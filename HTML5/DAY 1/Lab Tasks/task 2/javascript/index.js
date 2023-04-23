let video = document.getElementById("video");
let play = document.getElementById("play");
let stop = document.getElementById("stop");
let progess = document.getElementById("prgoress");
let videoStart = document.getElementById("video-start");
let lowTime = document.getElementById("low-time");
let highTime = document.getElementById("high-time");
let videoEnd = document.getElementById("video-end");
let volume = document.getElementById("volume");
let mute = document.getElementById("mute");
let speed = document.getElementById("speed");
play.addEventListener("click", function () {
  video.play();
});
stop.addEventListener("click", function () {
  video.pause();
});
video.addEventListener("timeupdate", function () {
  progess.value = video.currentTime;
});
videoStart.addEventListener("click", function () {
  video.pause();
  video.currentTime = 0;
});

lowTime.addEventListener("click", function () {
  video.currentTime = video.currentTime - 0.3;
});
highTime.addEventListener("click", function () {
  video.currentTime = video.currentTime + 0.3;
  console.log(video.currentTime);
});
videoEnd.addEventListener("click", function () {
  video.pause();
  video.currentTime = video.duration;
});
volume.addEventListener("input", function () {
  video.volume = volume.value;
});
mute.addEventListener("click", function () {
  if (video.volume == 1) {
    video.volume = 0;
    mute.innerText = "unmute";
  } else {
    video.volume = 1;
    mute.innerText = "mute";
  }
});
speed.addEventListener("input", function () {
  video.playbackRate = speed.value;
  console.log(speed.value);
});

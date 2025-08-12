var leftEye = document.querySelector("#leftEye");
var rightEye = document.querySelector("#rightEye");
var mouse = document.querySelector("#mouse");
var leftMouse = document.querySelector("#leftMouse");
var rightMouse = document.querySelector("#rightMouse");
function colorSmile() {
  mouse.style.stroke = "blue";
  leftMouse.style.stroke = "blue";
  leftMouse.style.fill = "blue";
  rightMouse.style.stroke = "blue";
  rightMouse.style.fill = "blue";
}
function unColorSmile() {
  mouse.style.stroke = "black";
  leftMouse.style.stroke = "black";
  leftMouse.style.fill = "black";
  rightMouse.style.stroke = "black";
  rightMouse.style.fill = "black";
}
mouse.addEventListener("mouseover", colorSmile);
mouse.addEventListener("mouseout", unColorSmile);
leftMouse.addEventListener("mouseover", colorSmile);
leftMouse.addEventListener("mouseout", unColorSmile);
rightMouse.addEventListener("mouseover", colorSmile);
rightMouse.addEventListener("mouseout", unColorSmile);

leftEye.addEventListener("mouseover", function () {
  // leftEye.setAttribute("fill", "blue");
  leftEye.style.fill = "blue";
});
rightEye.addEventListener("mouseover", function () {
  rightEye.style.fill = "blue";
});

leftEye.addEventListener("mouseout", function () {
  leftEye.style.fill = "black";
});
rightEye.addEventListener("mouseout", function () {
  rightEye.style.fill = "black";
});

var video = document.querySelector("video");
var btnPlay = document
  .querySelector("#btnPlay")
  .addEventListener("click", function () {
    video.play();
  });
var btnStop = document
  .querySelector("#btnStop")
  .addEventListener("click", function () {
    video.pause();
  });

var btnMute = document.querySelector("#btnMute");
var btnUnMute = document.querySelector("#btnUnMute");
btnMute.addEventListener("click", function () {
  video.muted = true;
});
btnUnMute.addEventListener("click", function () {
  video.muted = false;
});

var progressBar = document.querySelector("#progressBar");
setInterval(function () {
  progressBar.value = video.currentTime;
});

var volumeRange = document.querySelector("#volumeRange");
volumeRange.addEventListener("change", function () {
  video.volume = volumeRange.value;
});
setInterval(function () {
  volumeRange.value = video.volume;
}, 700);


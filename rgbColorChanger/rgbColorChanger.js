var div1 = document.getElementById("div1");

var redColor = document.getElementById("red");
var greenColor = document.getElementById("green");
var blueColor = document.getElementById("blue");

redColor.addEventListener("input", getColorValue);
greenColor.addEventListener("input", getColorValue);
blueColor.addEventListener("input", getColorValue);

function getColorValue() {
  var redColorValue = redColor.value;
  var greenColorValue = greenColor.value;
  var blueColorValue = blueColor.value;
  console.log(redColorValue);

  div1.style.color =
    "rgb(" + redColorValue + "," + greenColorValue + "," + blueColorValue + ")";
}

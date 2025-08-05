// var http = new XMLHttpRequest();
// var data;
// http.open("GET", "https://fakestoreapi.com/products", false);
// http.onreadystatechange = function () {
//   if (http.readyState == 4 && http.status == 200) {
//     data = JSON.parse(http.responseText);
//   }
// };
// http.send();

// var imgArr = [];
// for (var i = 0; i < data.length; i++) {
//   imgArr.push(data[i].image);
// }

// var imgSlider = document.querySelector("#img");
// imgSlider.style.width = "300px";
// imgSlider.style.height = "300px";
// var imgIdx = 0;

// //next button
// var nextBtn = document
//   .querySelector("#nextBtn")
//   .addEventListener("click", function () {
//     imgIdx++;
//     if (imgIdx >= imgArr.length) {
//       imgIdx = 0;
//     }
//     imgSlider.src = imgArr[imgIdx];
//     clearInterval(playSlider);
//     playSlider = setInterval(function () {
//       imgSlider.src = imgArr[imgIdx];
//       imgIdx++;
//       if (imgIdx >= imgArr.length) {
//         imgIdx = 0;
//       }
//     }, 6000);
//   });

// //prev button
// var prevBtn = document
//   .querySelector("#prevBtn")
//   .addEventListener("click", function () {
//     imgIdx--;
//     if (imgIdx < 0) {
//       imgIdx = imgArr.length - 1;
//     }
//     imgSlider.src = imgArr[imgIdx];
//     clearInterval(playSlider);
//     playSlider = setInterval(function () {
//       imgSlider.src = imgArr[imgIdx];
//       imgIdx++;
//       if (imgIdx >= imgArr.length) {
//         imgIdx = 0;
//       }
//     }, 6000);
//   });

// //Play Auto
// var playSlider = setInterval(function () {
//   imgSlider.src = imgArr[imgIdx];
//   imgIdx++;
//   if (imgIdx >= imgArr.length) {
//     imgIdx = 0;
//   }
// }, 6000);

// //Play
// var playBtn = document
//   .querySelector("#playBtn")
//   .addEventListener("click", function () {
//     clearInterval(playSlider);
//     playSlider = setInterval(function () {
//       imgSlider.src = imgArr[imgIdx];
//       imgIdx++;
//       if (imgIdx >= imgArr.length) {
//         imgIdx = 0;
//       }
//     }, 6000);
//   });

// //Stop
// var stopBtn = document
//   .querySelector("#stopBtn")
//   .addEventListener("click", function () {
//     clearInterval(playSlider);
//     console.log("slider stopped");
//   });
// //1x Speed
// var x1Btn = document
//   .querySelector("#x1Btn")
//   .addEventListener("click", function () {
//     clearInterval(playSlider);
//     playSlider = setInterval(function () {
//       imgSlider.src = imgArr[imgIdx];
//       imgIdx++;
//       if (imgIdx >= imgArr.length) {
//         imgIdx = 0;
//       }
//     }, 6000);
//   });

// // //2x Speed
// var x2Btn = document
//   .querySelector("#x2Btn")
//   .addEventListener("click", function () {
//     clearInterval(playSlider);
//     playSlider = setInterval(function () {
//       imgSlider.src = imgArr[imgIdx];
//       imgIdx++;
//       if (imgIdx >= imgArr.length) {
//         imgIdx = 0;
//       }
//     }, 4000);
//   });

// // //3x Speed
// var x3Btn = document
//   .querySelector("#x3Btn")
//   .addEventListener("click", function () {
//     clearInterval(playSlider);
//     playSlider = setInterval(function () {
//       imgSlider.src = imgArr[imgIdx];
//       imgIdx++;
//       if (imgIdx >= imgArr.length) {
//         imgIdx = 0;
//       }
//     }, 2000);
//   });

//Ex2
var setCookies = function (name, value, domain) {
  var cookie = name + "=" + value + ";domain=" + domain;
  document.cookie = cookie;
};
setCookies("user", "admin", "127.0.0.1");

var getCookie = function (key) {
  var cookieUser = document.cookie.split("; ");
  var cookies = [];
  for (var i = 0; i < cookieUser.length; i++) {
    var cookieSplit = cookieUser[i].split("=");
    if (key === cookieSplit[0]) {
      cookies.push(cookieSplit[1]);
    }
  }
  console.log(cookies);
  return cookies.length > 0 ? cookies : null;
};
getCookie("user");

var checkCookies = function (key) {
  var values = getCookie(key);
  if (values) {
    console.log("Found:", values);
  } else {
    console.log("Not Found");
  }
};

checkCookies("user");

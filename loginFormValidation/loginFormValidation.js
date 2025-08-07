// Ex1
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.marginTop = "50px";
document.body.style.backgroundColor = "rgb(38, 180, 38)";

var inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.style.margin = "10px";
  input.style.padding = "8px";
  input.style.width = "200px";
});

var btn = document.getElementById("btn");
btn.style.margin = "10px";
btn.style.padding = "8px 16px";
btn.style.fontSize = "16px";
btn.style.width = "220px";
btn.style.backgroundColor = "rgb(38, 180, 38)";
btn.style.color = "rgb(238, 228, 228)";
btn.style.border = "none";

var div1 = document.getElementById("loginForm");
div1.style.border = "2px solid white";
div1.style.padding = "30px";
div1.style.height = "200px";
div1.style.backgroundColor = "white";

var messageBox = document.getElementById("message");
messageBox.style.marginTop = "20px";
messageBox.style.fontSize = "18px";

btn.addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var login = {
    username: username,
    password: password,
  };

  if (login.username === "admin" && login.password === "123") {
    messageBox.textContent = "Welcome";
    messageBox.style.color = "yellow";
  } else {
    messageBox.textContent = "Not registered";
    messageBox.style.color = "red";
  }
});

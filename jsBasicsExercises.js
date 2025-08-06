//Lab 1
// // display my name
// console.log("My name is Bakr");
// //display my age
// console.log("My Age is 22");
// //display my favorite programming language
// console.log("My favorite programming language is JavaScript");

//Lab 2
// var $firstName = "Bakr";
// var LastName = "AbuHassiba";
// var _age = 22;
// var is_Student = true;

// try {
//     console.log($firstName);
//     console.log(LastName);
//     console.log(_age);
//     console.log(is_Student);
//     // var 123name;
//     // var my-name;
//     // var while;
// } catch (error) {
//     console.log("invalid variables names");

// }

//Lab3
// var grade = parseInt(prompt("enter the grade"));
// if (grade >= 90 && grade <= 100) {
//   alert("Excellent");
// } else if (grade >= 75 && grade <= 89) {
//   alert("Good");
// } else if (grade >= 60 && grade >= 74) {
//   alert("pass");
// } else if (grade <= 60) {
//   alert("Fail");
// } else {
//   alert("enter a number less than 100");
// }

// lab 4
// var randomNum = Math.floor(Math.random() * 100).toFixed(2);
// if (randomNum >= 10 && randomNum <= 100) {
//   alert(randomNum);
// }

// lab 5
// var productName = prompt("enter the product name").toLowerCase();
// productName.includes("a") ? alert("The product name have 'a'")
//     : alert("The product name haven't 'a'");

//lab 6
// var myDate = new Date();
// var day = myDate.getDate() + 3;
// console.log("Day: " + day);

// lab 7
// var attempts = 0;
// var maxAttempts = 3;
// var loggedIn = false;
// while (attempts < maxAttempts && !loggedIn)
// {
//     var userName = prompt("Enter username");
//     var userPassword = prompt("Enter your password");
//     if (userName === "admin" && userPassword === "1234")
//     {
//         alert("Welcome " + userName);
//         loggedIn = true;
//     } else
//     {
//         attempts++;
//         if (attempts >= maxAttempts)
//         {
//             alert("attempts run out");
//         } else
//         {
//             alert("Invalid username or password");
//         }
//     }
// }

// do while loop
// var attempts = 0;
// do
// {
//     var userName = prompt("Enter username");
//     var userPassword = prompt("Enter your password");
//     if (userName === "admin" && userPassword === "1234")
//     {
//         alert("Welcome " + userName);
//         break;
//     } else
//     {
//         attempts++;
//         if (attempts >= 3)
//         {
//             alert("attempts run out");
//             break;
//         } else
//         {
//             alert("Invalid username or password");
//         }
//     }
// } while (attempts < 3 && (userName !== "admin" || userPassword !== "1234"));

//lab 8
// for (var i = 1; i <= 50; i++)
// {
//     if (i % 2 == 0)
//     {
//         continue;
//     } else if (i == 37)
//     {
//         console.log(i);
//         break;
//     }
//     else
//     {
//         console.log(i);
//     }

// }

// lab 9

// var num = parseInt(prompt("Enter a number:"));
// for (var i = 1; i <= num; i++)
// {
//     console.log("*".repeat(i));
// }

//another Sol
// var num = parseInt(prompt("Enter a number:"));
// for (var i = 1; i <= num; i++)
// {
//     var line = "";

//     for (var j = 1; j <= i; j++)
//     {
//         line += "*";

//     }
//     console.log(line);
// }

//lab 10
// var num = parseInt(prompt("Enter a number:"));
// var tax = num;
// tax *= 0.14;
// var discountedPrice = num;
// discountedPrice *= 0.9;
// console.log("The tax is: " + tax.toFixed(2));
// console.log("The price after discount is: " + discountedPrice.toFixed(2));

// lab 11

// var password = (prompt("Enter your password:"));
// var hasLetter = false;
// var hasNumber = false;
// for (var i = 0; i < password.length; i++)
// {
//     var char = password[i].toLowerCase();
//     if (char >= "a" && char <= "z")
//     {
//         hasLetter = true;
//     }
//     else if (char >= "0" && char <= "9")
//     {
//         hasNumber = true;
//     }
// }
// if (hasLetter && hasNumber && password.length >= 8)
// {
//     alert("Password is strong.");
// } else
// {
//     alert("password is weak")
// }

//lab 12
// var promoCodes = [];
// for (var i = 0; i < 5; i++)
// {
//     var code = "PROMO"
//     for (var j = 0; j < 4; j++)
//     {
//         code += Math.floor(Math.random() * 10);
//     }
//     promoCodes.push(code);
// };

// for (var i = 0; i < promoCodes.length; i++) {
//   console.log(promoCodes[i]);
// }

//lab 13
// (function ()
// {
//     var config = "hello";
//     console.log(config);

// })();

//lab 14
// try
// {
//     var num1 = parseInt(prompt("Enter the first number:"));
//     var num2 = parseInt(prompt("Enter the second number:"));
//     var oprateor = prompt("Enter the operator (+, -, *, /):")
//     var result = 0;
//     switch (oprateor)
//     {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 === 0)
//             {
//                 throw "Error: Division by zero is not allowed";
//             } else
//             {
//                 result = num1 / num2;
//             }
//             break;
//         default:
//             throw "Error: Invalid data";
//     }
//     console.log("Result: " + result);
// } catch (error)
// {
//     alert(error);

// } finally
// {
//     console.log("completed.");
// }

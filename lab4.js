// 1
// var car = { brand: "BMW", model: "X5", year: 2020 };
// function getCarInfo(car)
// {
//     console.log("Car Brand: " + car.brand + ", Model: " + car.model + ", Year: " + car.year);
// }
// getCarInfo(car);

// //2
// for (var key in car)
// {
//     console.log("key: " + key + ", value: " + car[key]);
// }

// 3
// function swapObjects(obj)
// {
//     newObj = {};
//     for (var key in obj)
//     {
//         newObj[obj[key]] = key;
//     }
// }
// swapObjects(car);
// console.log(newObj);

//4
// var person = {
//     address: { city: "cairo", country: "egypt" },
//     job: { tittle: "developer", salary: 5000 },
// };
// function GetPersonInfo(person)
// {
//     console.log("city: " + person.address.city + ", country: " + person.address.country);
//     console.log("job title: " + person.job.tittle + ", salary: " + person.job.salary);
// }
// GetPersonInfo(person);

//5
// var person = [
//     { name: "Ahmed", age: 30, city: "Cairo" },
//     { name: "Bakr", age: 25, city: "Alex" },
//     { name: "Mohamed", age: 35, city: "Giza" },
//     { name: "Abdo", age: 28, city: "Helwan" },
// ]
// function sortPersonByAge(person)
// {
//     return person.sort(function (a, b)
//     {
//         return a.age - b.age;
//     });
// }
// sortPersonByAge(person);
// console.log(person);

//6
// var arr = [3, 2, 6, 4, 5];
// var maximum = arr[0];
// for (var i = 0; i < arr.length; i++)
// {
//     if (arr[i] > maximum)
//     {
//         maximum = arr[i];
//     }
// }
// console.log("Maximum value is: " + maximum);
// var minimum = arr[0];
// for (var i = 0; i < arr.length; i++)
// {
//     if (arr[i] < minimum)
//     {
//         minimum = arr[i];
//     }
// }
// console.log("Minimum value is: " + minimum);

//7
// var arr = [10, 20, 30, 40];
// var arrReversed = [];
// for (var i = arr.length - 1; i >= 0; i--) {
//     arrReversed.push(arr[i]);
// }
// console.log(arrReversed);

//8
// var arr = [
//     { name: "shirt", price: 100 },
//     { name: "polo", price: 200 },
//     { name: "shoes", price: 300 },
//     { name: "T-shit", price: 250 }
// ]
// function discountPrice(arr)
// {
//     for (var i = 0; i < arr.length; i++)
//     {
//         arr[i].discountedPrice = 0;
//         arr[i].discountedPrice = arr[i].price * 0.9;
//         console.log(" Price: " + arr[i].price + ", After Discounted: " + arr[i].discountedPrice);
//     }
// }
// discountPrice(arr);

//9
// function getDateDay(date)
// {
//     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     var dateObj = new Date(date);
//     var dayIndex = dateObj.getDay();
//     console.log(dayIndex);
//     console.log("The day is " + days[dayIndex]);
// }
// getDateDay("2025-7-25");

//10
// var input1 = prompt("Enter numbers for the first array like (1,6,5,9,1,2):");
// var strArr1 = input1.split(",");
// var arr1 = [];
// for (var i = 0; i < strArr1.length; i++)
// {
//     arr1.push(parseInt(strArr1[i]));
// }
// var input2 = prompt("Enter numbers for the second array like (5,6,3,1,9):");
// var strArr2 = input2.split(",");
// var arr2 = [];
// for (var i = 0; i < strArr2.length; i++)
// {
//     arr2.push(parseInt(strArr2[i]));
// }
// var mergedArr = arr1.concat(arr2);
// console.log("mergedArr: " + mergedArr);

// var finalArr = [];
// for (var i = 0; i < mergedArr.length; i++)
// {
//     if (!finalArr.includes(mergedArr[i]))
//     {
//           finalArr.push(mergedArr[i]);
//     }
// }
// alert("The merged array without duplicates is: " + finalArr);
// console.log(finalArr);

//11

// var concatArr = [];
// var operator = prompt("Enter an operator (add, search, exit):");
// while (operator !== "exit")
// {
//     if (operator === "add")
//     {
//         var phoneName = prompt("Enter the name:");
//         var phoneNumber = prompt("Enter the phone number:");
//         var phoneBook = {
//             PhoneName: phoneName,
//             PhoneNumber: phoneNumber
//         };
//         concatArr.push(phoneBook);
//         console.log(" Phone book added:", phoneBook);
//         console.log("Current phone book:", concatArr);

//     } else if (operator === "search")
//     {
//         var nameSearch = prompt("Enter the name to search:");
//         var found = false;
//         for (var i = 0; i < concatArr.length; i++)
//         {
//             if (concatArr[i].PhoneName === nameSearch)
//             {
//                 console.log("Contact found:");
//                 console.log("Name:", concatArr[i].PhoneName);
//                 console.log("Number:", concatArr[i].PhoneNumber);
//                 found = true;
//                 break;
//             }
//         }
//         if (!found)
//         {
//             console.log("Contact not found");
//         }
//     } else
//     {
//         console.log("Invalid operation enter add, search, or exit");
//     }
//     operator = prompt("Enter an operator (add, search, exit):");
// }

//12

// var obj1 = { name: "Baker", age: 30, city: "Cairo", country: "Egypt" };
// var obj2 = { name: "Ahmed", age: 25, city: "Alex" };
// var obj3 = {};

// Object.assign(obj3, obj1);
// console.log(obj3);
// for (var key in obj2) {
//   if (Object.keys(obj3).includes(key)) {
//     obj3[key + "_1"] = obj2[key];
//   } else {
//     obj3[key] = obj2[key];
//   }
//   console.log(obj3);
// }

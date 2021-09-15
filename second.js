// function printStars(symb = "*", symb2 = " ") {
//   for (let i = 0; i < 2; i++) {
//     let output = "";
//     for (let j = 0; j < 10; j++) output += symb + symb2;
// ​
//     console.log(output);
//     console.log("");
//   }
// }
// ​
// printStars("|", "@", "&", 34343, 688986);
// // string
// // number
// // boolean
// // arrays
// // objs
// // functions
// ​
// function shortCircut(username) {
//   username = username || "new user";
// ​
//   console.log("Welcome ", username);
// }
// ​
// shortCircut("xyz");
// ​
// function sumOf(array = []) {
//   let sum = 0;
//   for (let i of array) {
//     // i = 3
//     if (typeof i === "number") sum = sum + i;
//     // 0 + 3  ===> 3
//   }
//   return sum;
// }
// ​
// let result = sumOf([3, 3, 2, "3", "3243"]);
// console.log(result);
// ​
// function CreateNewUserObj(username = "", password = "", email = "") {
//   // let newObj = {
//   //   username: username,
//   //   password: password,
//   //   email: email,
//   // };
// ​
//   // return newObj;
// ​
//   return {
//     username: username,
//     password: password,
//     email: email,
//   };
// }
// ​
// let newUser = CreateNewUserObj(213213213, "slkdfjlk34", 3434234323);
// // console.log(newUser);
// // // Tasks to do
// // Question # 1
// //The Fortune Teller
// // Why pay a fortune teller when you can just program your fortune yourself?
// // Write a function named tellFortune that:
// // takes 4 arguments: number of children, partner's name, geographic location, job title.
// // outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// // Call that function 3 times with 3 different values for the arguments.
// /* YOUR SOLUTION */​
// ////////////////////////////////////////////////////
// //88888888888888888888888888888888888888888888888//
// ////////////////////////////////////////////////////
function tellFortune(
  Numofchild = "",
  partner = "",
  geolocation = "",
  jobtitle = ""
) {
  return `you will be  ${jobtitle} in ${geolocation} , and married to ${partner} with ${Numofchild} kids`;
}
console.log(tellFortune(5, "rrrr ", "rwp", "master"));
console.log(tellFortune(2, "xxx ", "isb", "dev"));
console.log(tellFortune(5, "qqq ", "sadiqabd", "driver"));

// // Question # 2
// // The Puppy Age Calculator
// // You know how old your dog is in human years, but what about dog years? Calculate it!
// ​
// // Write a function named calculateDogAge that:
// // takes 1 argument: your puppy's age.
// // calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// // outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// // Call the function three times with different sets of values.
// // Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
// ​
// /* YOUR SOLUTION */
// ​
// ////////////////////////////////////////////////////
// //88888888888888888888888888888888888888888888888//
// ////////////////////////////////////////////////////
// ​
function calculateDogAge(PuppyAge = "") {
  return `Your doggie is ${PuppyAge * 7} years old in dog years!`;
}
console.log(calculateDogAge(6));
// // Question # 3
// // Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// ​
// // Write a function named calculateSupply that:
// // takes 2 arguments: age, amount per day.
// // calculates the amount consumed for rest of the life (based on a constant max age).
// // outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// // Call that function three times, passing in different values each time.
// // Bonus: Accept floating point values for amount per day, and round the result to a round number.
// ​
// /* YOUR SOLUTION */
// ​
// ////////////////////////////////////////////////////
// //88888888888888888888888888888888888888888888888//
// ///////////////////////////////////////////////////
// ​
function calculateSupply(age = "", amountOfPerDay = "") {
  const ripeage = 70;
  let ageremainig = (ripeage - age) * 365;

  return `you will need ${Math.ceil(
    ageremainig * amountOfPerDay
  )} to last you until the ripe old age of ${ripeage}`;
}
console.log(calculateSupply(24, 45345.646));
// // Question # 4
// // The Geometrizer
// // Create 2 functions that calculate properties of a circle, using the definitions here.
// ​
// // Create a function called calcCircumfrence:
// ​
// // Pass the radius to the function.
// // Calculate the circumference based on the radius, and output "The circumference is NN".
// // Create a function called calcArea:
// ​
// // Pass the radius to the function.
// // Calculate the area based on the radius, and output "The area is NN".
// ​
// /* YOUR SOLUTION */
// ​
// ////////////////////////////////////////////////////
// //88888888888888888888888888888888888888888888888//
// ////////////////////////////////////////////////////
// ​
function calcCircumfrence(radius) {
  let r = radius;
  let c = 2 * Math.PI * r;
  let out = "The circumference is " + c;
  console.log(out);
}
calcCircumfrence(7);
function calcArea(radius) {
  let r = radius;
  let c = Math.PI * r * r;
  let out = "The area is " + c;
  console.log(out);
}
calcArea(3);
// // Question # 5
// ​
// // The Temperature Converter
// // It's hot out! Let's make a converter based on the steps here.
// ​
// // Create a function called celsiusToFahrenheit:
// ​
// // Store a celsius temperature into a variable.
// // Convert it to fahrenheit and output "NN°C is NN°F".
// // Create a function called fahrenheitToCelsius:
// ​
// // Now store a fahrenheit temperature into a variable.
// // Convert it to celsius and output "NN°F is NN°C."
// ​
// /* YOUR SOLUTION */
// ​
// ////////////////////////////////////////////////////
// //88888888888888888888888888888888888888888888888//
// ////////////////////////////////////////////////////
function celsiusToFahrenheit(celsius) {
  let x = celsius;
  let y = (x * 9) / 5 + 32;
  let k =
    "celsius is" + "°C" + " " + x + " " + "Fahrenhiet is" + " " + y + "°F";
  console.log(k);
}
celsiusToFahrenheit(40);
function fahrenheitToCelsius(fahreheit) {
  let x = fahreheit;
  let y = ((x - 9) * 5) / 9;
  let k =
    "fahreheit is" + " " + x + "°F" + " " + "celsius is" + "   " + y + "°C";
  console.log(k);
}
fahrenheitToCelsius(20);

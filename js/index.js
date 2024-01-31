console.log("Hello World");

// Before 2015 changes to JavaScript
var a = 85; // assigning 85 to "a" or declaration
var b = 5;

var c = a + b;

console.log(c);

// after the 2015 changes to JavaScript
let age = 23;
const firstName = "Shakirah"; // create constant values

age = 35; // reassigning 35 to age

console.log(age);

let height = 11.6;

let canVote = false;

// function declaration
function sayHey() {
  console.log("Hey");
}

// running the function
sayHey();

function conversation() {
  console.log(sayHey()); // "Hey"
  console.log("How are you doing?");
  console.log("Goodbye");
}

conversation();

// declaring a function with parameters (placeholder)
function sayHeyWithParameter(firstName) {
  console.log("Hey, " + firstName);
}

sayHeyWithParameter("Shakirah");
sayHeyWithParameter("Davina");

function addition() {
  const result = 2 + 3;
  return result;
}

function calculate() {
  const additionResult = addition();

  console.log(2 * additionResult);
}

calculate();

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

addTwoNumbers(1000, 20);
addTwoNumbers(2000, 1);

// console.log(myName); - myName has function scope

// constructor function - it starts with a capital letter
function Book(name) {
  return "This is " + name;
}

const book1 = new Book("book1");
const book2 = new Book("book2");

// global scope
// function scope
// block scope
if (age > 18) {
  let voting = true;
  console.log("You are allowed to vote: ", voting);
}

/* console.log(voting); - only available inside the block (curly braces)
when you create a variable with either let or const */

let votingAge = 22;

votingAge = 18;

// Immeditely-Invoked Function Expression
(function () {
  console.log("Running Immediately");
})();

// function expression - basically assigning a function to a variable name
const sayHello = function () {
  const myName = "Shakirah Usman"; // function scope
  console.log("Hello" + myName);
};

sayHello();

// arrow function - shorter syntax for function expression

const sayHello2 = () => {
  return "Hello";
};

const sayHello3 = () => console.log("Hello");

const greetPerson = (person) => console.log("Hey " + person); // takes a parameter

const subtract = (num1, num2) => {
  result = num1 - num2;
  console.log(result);
};

/* SESSION 2 */
// creating an object
const person = {
  name: "Shakirah Usman",
  age: 23,
  likes: "Pizza",
  getName: function () {
    return this.name;
  },
};

// dot notation
console.log(person.name);

// bracket notation
console.log(person["age"]);

console.log(person.getName());

person.age = 25;

console.log(person.age);

const personA = {
  firstName: "Monique",
  likes: "pizza",
};

const personB = personA;

//const personB = { ...personA }; // spread operator

console.log("Before");
console.log(personA.firstName);
console.log(personB.firstName);

personA.firstName = "Stacy";

console.log("After");
console.log(personA.firstName);
console.log(personB.firstName);

person.getName();
console.log(person.age);

let add = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;
let exponentiation = a ** b;

// let increment = a++;

// let decrement = b--;
// ++a (pre-increment) - increment the value of a and returns it
// a++ (post-increment) - returns the current value of a and then increments it

console.log("Addition of a and b is: " + add);
console.log("Subtraction of a and b is: " + subtraction);
console.log("Multiplication of a and b is: " + multiplication);
console.log("Division of a and b is: " + division);
console.log("The remainder of a modulus b is: " + modulus);
console.log("Exponentiation of a and b is:" + exponentiation);
console.log("The increment of a is: " + ++a);
console.log("The decrement of b is: " + --b);

console.log(2 + Number("2"));

//"=" // assignment operator

console.log(2 == "2"); // checking the values
console.log(2 === "2"); // checking both values and types.
//"==" //
//"===" // strict equality sign

const apples = "apples";
const oranges = "oranges";

const isEqual = apples === oranges;

const isNotEqual = apples !== oranges;

console.log("Are apples and oranges the same? " + isEqual);
console.log("Apples and oranges are not the same: " + isNotEqual);

const volunteers = 20;
const students = 24;
const pizzas = 25;

const moreStudents = students > volunteers;
console.log("Are there more students than volunteers? " + moreStudents);

const lessStudents = students < pizzas;
console.log("Are there fewer students than pizzas? " + lessStudents);

const enoughPizzas = volunteers + students < pizzas;
console.log("Do we have enough pizzas for everybody? " + enoughPizzas);

const myAge = 18;
const drivingAge = 18;

if (myAge >= drivingAge) {
  // runs when the condition is true
  console.log("You are eligible to drive");
} else {
  // runs when the condition is false
  console.log("You are not eligible to drive");
}

// ternary operator
myAge >= drivingAge
  ? console.log("You are eligible to drive")
  : console.log("You are not eligible to drive");

// check if a number is positive or negative
let num = 200;

if (num > 0) {
  console.log("Number is positive");
} else if (num === 0) {
  console.log("Number is 0");
} else {
  console.log("Number is negative");
}

// print grades

const score = 75;

if (score > 90) {
  console.log("A");
} else if (score > 80) {
  console.log("A");
} else if (score > 70) {
  console.log("B");
} else if (score > 60) {
  console.log("C");
} else if (score > 50) {
  console.log("D");
} else if (score > 40) {
  console.log("E");
} else {
  console.log("F");
}

// get the day of the week (0 - 6)
let dayNumber = new Date().getDay(); // 3
console.log(new Date());
switch (dayNumber) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Unknown value");
}

let fruits = "Pear";

switch (fruits) {
  case "Banana":
    console.log("Hello");
    break;
  case "Apple":
    console.log("Welcome");
    break;
  case "Orange":
    console.log("Goodbye");
    break;
  default:
    console.log("I don't know you");
}

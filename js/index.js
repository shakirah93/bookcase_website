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

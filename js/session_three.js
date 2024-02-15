let shoeNumber = 1;
let limit = 5; // maximum

while (shoeNumber <= limit) {
  console.log(shoeNumber);
  shoeNumber += 1; // increment
}

// a while loop that prints random numbers while count is less than 10
/*
- starting point
- condition: count < 10
- increment
*/

let count = 1;

while (count < 10) {
  console.log(count + " : " + Math.random().toFixed(1));
  count = count + 1;
}

// for loop
for (let count = 1; count < 10; count += 1) {
  console.log(count + " : " + Math.random().toFixed(1));
}

for (shoeNumber = 1; shoeNumber < 5; shoeNumber++) {
  console.log(shoeNumber);
}
/*
    They are all increasing shoeNumber by 1
    shoeNumber++
    shoeNumber+=1
    shoeNumber=shoeNumber +1
*/

// an array

const animals = ["dog", "cat", "horse", "sheep"];
const personArray = ["Sakirat Usman", 30, 1.5, true];
const arrayOfEvenNumbers = [2, 4, 6, 8, 10];

const arrayOfObjects = [
  {
    name: "Sakirat Usman",
    age: 30,
    height: 1.5,
  },
  {
    name: "John Doe",
    age: 40,
    height: 2.5,
  },
];

// animals[0]
// animals[1]
// animals[2]
// animals[3]

console.log(animals[animals.length - 1]);
console.log(animals.length);

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

/*
i= 0
animals.length = 4
0<4 - true
// dog - first iteration

i=1
1<4 - true
//cat - second iteration

i=2
2<4 - true
//horse - third iteration

i=3
3<4 - true
//sheep - fourth iteration

i=4
4<4 - false
The fifth iteration results in false, the loops stop
*/

// add new element to the animals array
animals.push("zebra"); // at the end of the array
console.log(animals);

animals.unshift("lion");
console.log(animals);

// remove elements in an array
animals.pop(); // remove the last element of an array
console.log(animals);

animals.shift(); //remove the first element of an array
console.log(animals);

console.log(animals.sort());
console.log(animals.sort().reverse());

const numbers = [1, 5, 3, 19, 20, 45, 6];
console.log(numbers.sort()); // 1, 19, 20, 3,45

people = [
  { name: "Shuri", age: 25 } - a,
  { name: "Killmonger", age: 30 } - b
]


function sortNumbersAscending(a, b) {
  return a - b;
}

console.log(numbers.sort(sortNumbersAscending));

// 1 and 5, return -4  => [1, 5, 3, 19, 20, 45, 6]
// 5 and 3, return 2 => [1, 3, 5, 19, 20, 45, 6]
// 5 and 19, return -14 => [1, 3, 5, 19, 20, 45, 6]
// 19 and 20, return -1 => [1, 3, 5, 19, 20, 45, 6]
// 20 and 45, return -25 => [1, 3, 5, 19, 20, 45, 6]
// 45 and 6, return 31 => [1, 3, 5, 19, 20, 6, 45]
//[1, 3, 5, 19, 6, 20, 45]
//[1, 3, 5, 6, 19, 20, 45]

// sort in descending order
console.log(numbers.sort(sortNumbersAscending).reverse());

const fruitAndVeg = [
  "apple",
  "orange",
  "banana",
  "kiwi",
  "avocado",
  "celery",
  "aubergine",
];

const noAvocados = [];

// starting point of the while loop
let i = 0;

while (i < fruitAndVeg.length) {
  if (fruitAndVeg[i] !== "avocado") {
    noAvocados.push(fruitAndVeg[i]);
  }
  i = i + 1; // increment
  console.log(i);
}

console.log(noAvocados);

/* 
1st iteration, i=0, 0 < 7
"apple" !== "avocado",
result = noAvocados = ["apple"];

2nd iteration, i=1 , 1<7
"orange" !== "avocado"
result = noAvocados = ["apple", "orange"];

3rd iteration, i=2, 2<7
"banana" !== "avocado"
result = noAvocados = ["apple", "orange", "banana"];

4th iteration, i=3, 3<7
"kiwi" !== "avocado"
result = noAvocados = ["apple", "orange", "banana", "kiwi"];

5th iteration, i=4, 4<7
"avocado" !== "avocado"
result = noAvocados = ["apple", "orange", "banana", "kiwi"];

6th

*/

// using the filter method

const noAvocados_2 = fruitAndVeg.filter((fruit) => !fruit.includes("avocado"));
console.log(noAvocados_2);

// map method
const arrayOfRandomNumbers = [3, 7, 80, 20, 2];

const numbersDoubled = arrayOfRandomNumbers.map((num) => num * 2);
console.log(numbersDoubled);

// chaining methods
const numbersDoubledAndGreaterThan10 = arrayOfRandomNumbers
  .map((num) => num * 2)
  .filter((num) => num > 10);

console.log(numbersDoubledAndGreaterThan10);

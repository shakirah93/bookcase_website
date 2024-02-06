// Task One

function sumOfEvenIndices(arrayOfNumbers) {
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i = i + 2) {
    sum = sum + arrayOfNumbers[i];
    console.log(arrayOfNumbers[i]);
  }
  console.log(sum);
}

const arrayOfNumbers = [2, 3, 4, 6, 8, 10, 2, 3, 2];

sumOfEvenIndices(arrayOfNumbers);

// Task 2
function countOccurrences(arrayOfNumbers, targetNumber) {
  let count = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] === targetNumber) {
      count = count + 1;
    } else {
      console.log("Number not in array");
    }
  }

  console.log(count);
}

countOccurrences(arrayOfNumbers, 2);


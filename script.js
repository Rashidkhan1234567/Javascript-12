//           Task 01

let even_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = even_list.filter((val) => {
  return val % 2 == 0;
});
document.write(`<center><h2>${even}<h2/><center/><hr>`);

//       Task 02

let reverse_input = "Hello world!";

document.write(`<center><h1>Reverse Hello World</h1></center>`);
document.write(
  `<center><h2>${reverse_input.split("").reverse().join("")}<h2/><center/><hr>`
);

//       Task 03

let num = +prompt("Enter a number:");
let isPrime = true;

if (num <= 1) {
  document.write(`<center><h3>${num} is not a prime number<h3/><center/><hr>`);
} else if (num % 2 === 0) {
  document.write(`<center><h3>${num} is not a prime number<h3/><center/><hr>`);
} else {
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    document.write(`<center><h3>${num} is a prime number<h3/><center/><hr>`);
  } else {
    document.write(
      `<center><h3>${num} is not a prime number<h3/><center/><hr>`
    );
  }
}

//   Task 04

let arr = [1, 2, 3, 4, 5];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

document.write(`<center><h3>Orignal Array: [${arr}]<h3/><center/>`);

document.write(
  `<center><h4>Maximum element in the array is: ${max}<h4/><center/><hr>`
);

//   Task 05

let input = prompt("Please enter any word to confirm palinddrome word.");

if (input === input.split("").reverse().join("")) {
  document.write(
    `<center><h3>${input} is a palinddrome word.<h3/><center/><hr>`
  );
} else {
  document.write(
    `<center><h3>The string ${input} is not a palindrome<h3/><center/><hr>`
  );
}

//      Task 06

let numTerms = 10;

let num1 = 0, num2 = 1, nextTerm;

console.log(num1);
console.log(num2);

for (let i = 3; i <= numTerms; i++) {
    nextTerm = num1 + num2;
    console.log(nextTerm);

    num1 = num2;
    num2 = nextTerm;
}
//     Task 07

 let vowelCount = 0;
 // Create a regular expression to match vowels
 const vowelsRegex = /[aeiou]/gi;
 const inputString = "This is an example string.";
 const vowelMatches = inputString.match(vowelsRegex);

 if (vowelMatches) { 
     vowelCount = vowelMatches.length;
 }

 document.write(`<center><h5>The number of vowels in "${inputString}" is: ${vowelCount}<h5/><center/><hr>`);

//     Task 08

let nums = 5; 
let fact = 1;

for (let i = 2; i <= nums; i++) {
    fact *= i;
}


document.write(`<center><h2>Factorial Calculate${fact}<h2/><center/><hr>`);

//   Task 09

let nume = 12345;
let sum = 0;

for (let i = nume; i > 0; i = Math.floor(i / 10)) {
  sum += i % 10;
}

document.write(`<center><h2>Sum of ${sum}<h2/><center/><hr>`);

//   Task 10

let array = [1, 2, 3, 4, 5];
document.write(`Orignal Array [${array}]<br>`);
array.reverse();
document.write(`Reverse Array [${array}]`);


// print odd numbers in array 
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = a.filter((num) => num % 2 !== 0);

oddNumbers.forEach((num) => console.log(num));

// convert all strings to title caps in a string way 
const strings = ["hello world",  "i love javascript"];

// A function that converts a string to title case 
const ToTitleCase = (str) =>
  // Replace the first letter of each word with its uppercase version
  str.replace(/\b\w/g, (match) => match.toUpperCase());

// Use map to apply the function to each element of the array
const titleCaseStrings = strings.map(ToTitleCase);


console.log(titleCaseStrings); 

// sum of all  numbers in an array 
const c = ["hello world", "this is javascript"];

// A function that converts a string to title case using an arrow function
const totitleCase = (str) =>
  // Replace the first letter of each word with its uppercase version
  str.replace(/\b\w/g, (match) => match.toUpperCase());

// Use map to apply the function to each element of the array
const titleCasec = c.map(totitleCase);

console.log(titleCasec);

// return all prime numbers in array 

const abrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isprime = (num) => {
  // If the number is less than 2, return false
  if (num < 2) return false;
  // Loop from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If the number is divisible by i, return false
    if (num % i === 0) return false;
  }
  // Otherwise, return true
  return true;
};

const primes = abrr.filter(isprime);

console.log(primes); 

// return all palindromes in an array 

const arr = ["racecar", 1344, 12321, "did", "cannot"];

// A function that checks if an element is a palindrome using an arrow function
const ispalindrome = (element) =>
  String(element) ===
  // Reverse the string and compare it with the original one
  String(element).split("").reverse().join("");

// Use filter to return a new array with only palindromes
const palindromes = arr.filter(ispalindrome);

console.log(palindromes); 

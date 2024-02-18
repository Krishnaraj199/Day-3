// odd number in an array
const aarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using anonymous function
const oddNumbers1 = aarr.filter(function (num) {
  // Return true if the number is not divisible by 2
  return num % 2 !== 0;
});

// Using IIFE
const oddNumbers2 = (function (aarr) {
  // Return a new array with only the odd numbers
  return aarr.filter(function (num) {
    // Return true if the number is not divisible by 2
    return num % 2 !== 0;
  });
})(aarr); 

console.log(oddNumbers1); 
console.log(oddNumbers2); 


// covert all strings to title caps in a string array
const strings = ["hello world", "i love javascript"];

// Use an anonymous function and IIFE to convert each string to title case
const titleCaseStrings = (function (arr) {
  // Return a new array with the converted strings
  return arr.map(function (str) {
    // Replace the first letter of each word with its uppercase version
    return str.replace(/\b\w/g, function (match) {
      return match.toUpperCase();
    });
  });
})(strings); // Pass the array as an argument to the IIFE

console.log(titleCaseStrings); 


// sum of all numbers in array

const arr = [1, 2, 3, 4, 5];

// Using anonymous function
const sum1 = arr.reduce(function (acc, val) {
  // Return the sum of the accumulator and the current value
  return acc + val;
}, 0); // The initial value is 0

// Using IIFE
const sum2 = (function (arr) {
  // Return the sum of all numbers in the array
  return arr.reduce(function (acc, val) {
    // Return the sum of the accumulator and the current value
    return acc + val;
  }, 0); // The initial value is 0
})(arr); // Pass the array as an argument to the IIFE

console.log(sum1); 
console.log(sum2); 


// return all prime numbers in array
const acrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using anonymous function
const primes1 = acrr.filter(function (num) {
  // If the number is less than 2, return false
  if (num < 2) return false;
  // Loop from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If the number is divisible by i, return false
    if (num % i === 0) return false;
  }
  // Otherwise, return true
  return true;
});

// Using IIFE
const primes2 = (function (arr) {
  // Return a new array with only the prime numbers
  return acrr.filter(function (num) {
    // If the number is less than 2, return false
    if (num < 2) return false;
    // Loop from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // If the number is divisible by i, return false
      if (num % i === 0) return false;
    }
    // Otherwise, return true
    return true;
  });
})(acrr); 

console.log(primes1);
console.log(primes2); 

// return all palindromes in array
const a = ["racecar", 1344, 12321, "did", "cannot"];

// Use an anonymous function and IIFE to return all palindromes in the array
const palindromes = (function (a) {
  // Return a new array with only the palindromes
  return a.filter(function (element) {
    // Convert the element to a string
    const str = String(element);
    // Reverse the string and compare it with the original one
    return str === str.split("").reverse().join("");
  });
})(a); // Pass the array as an argument to the IIFE

console.log(palindromes); 

// returm median of two sorted arrays of the same size

// A function that returns the median of two sorted arrays of the same size using an anonymous function and IIFE
const GetMedian = (function (nums1, nums2) {
    // Assume that nums1 and nums2 are not empty and have the same size
    const n = nums1.length;
  
    // Define a helper function that returns the kth smallest element of two sorted arrays using an anonymous function
    const kthSmallest = function (nums1, start1, end1, nums2, start2, end2, k) {
      // If the first array is empty, return the kth element of the second array
      if (start1 > end1) return nums2[start2 + k - 1];
      // If the second array is empty, return the kth element of the first array
      if (start2 > end2) return nums1[start1 + k - 1];
      // If k is 1, return the minimum of the first elements of both arrays
      if (k === 1) return Math.min(nums1[start1], nums2[start2]);
  
      // Find the middle elements of both arrays
      const mid1 = Math.min(start1 + Math.floor(k / 2), n) - 1;
      const mid2 = Math.min(start2 + Math.floor(k / 2), n) - 1;
  
      // If the middle element of the first array is smaller than the middle element of the second array
      if (nums1[mid1] < nums2[mid2]) {
        // The kth smallest element can only be in the right half of the first array or the left half of the second array
        return kthSmallest(
          nums1,
          mid1 + 1,
          end1,
          nums2,
          start2,
          mid2,
          k - (mid1 - start1 + 1)
        );
      } else {
        // The kth smallest element can only be in the left half of the first array or the right half of the second array
        return kthSmallest(
          nums1,
          start1,
          mid1,
          nums2,
          mid2 + 1,
          end2,
          k - (mid2 - start2 + 1)
        );
      }
    };
  
    // If the total number of elements is odd, return the middle element
    if ((n * 2) % 2 === 1) {
      return kthSmallest(nums1, 0, n - 1, nums2, 0, n - 1, n);
    } else {
      // If the total number of elements is even, return the average of the middle two elements
      return (
        (kthSmallest(nums1, 0, n - 1, nums2, 0, n - 1, n) +
          kthSmallest(nums1, 0, n - 1, nums2, 0, n - 1, n + 1)) /
        2
      );
    }
  })([1, 3, 5], [2, 4, 6]); // Pass the two arrays as arguments to the IIFE
  
  console.log(GetMedian);

//   remove duplicates  from an array

const c = [1, 2, 3, 3, 4, 5, 5, 6];

// Using anonymous function and IIFE to remove duplicates
const unique = (function (c) {
  // Create a new Set from the array
  const set = new Set(c);
  // Create a new array from the Set
  return [...set];
})(c); // Pass the array as an argument to the IIFE

console.log(unique); 


// rotate an array by k times
const abrr = [1, 2, 3, 4, 5, 6, 7];

// Using anonymous function and IIFE to rotate the array by k times
const rotated = (function (abrr, k) {
  // If the array is empty or k is zero, return the array as it is
  if (abrr.length === 0 || k === 0) return abrr;
  // If k is larger than the array length, use the modulo operator to get the effective rotation
  k = k % abrr.length;
  // Splice the last k elements from the array and concat them with the remaining elements
  return abrr.splice(-k).concat(abrr);
})(abrr, 3); // Pass the array and k as arguments to the IIFE

console.log(rotated); 


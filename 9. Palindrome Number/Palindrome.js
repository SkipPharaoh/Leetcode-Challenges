```
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```;

// 1st Method //
// var isPalindrome = function (x) {
//   let num = 0;
//   let y = x.toString().split("").reverse();
//   console.log(y.join(""));
//   if (y.join("") == x) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// 2nd Method //
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let y = x;
  let z = 0;
  while (y > 0) {
    z = z * 10 + y % 10;
    y = Math.floor(y / 10);
  }
  return z === x;
};

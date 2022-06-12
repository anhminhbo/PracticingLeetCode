// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //     // Reverse string to check
  //     const convertToString = x.toString();
  //     const reverseString = convertToString.split('').reverse().join('');

  //     return reverseString == convertToString

  // Integer
  if (x < 0) return false;
  let reverseInteger = 0;

  let newInt = x;

  // Remainder is the first digit of reverseInteger
  while (newInt !== 0) {
    let remainder = newInt % 10;
    reverseInteger = reverseInteger * 10 + remainder;
    newInt = Math.floor(newInt / 10);
  }

  if (reverseInteger !== x) return false;

  return true;
};

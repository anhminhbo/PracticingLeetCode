// 1332. Remove Palindromic Subsequences
// https://leetcode.com/problems/remove-palindromic-subsequences/
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  const isPalindrome = (subStr) => {
    const reverseString = s.split("").reverse().join("");
    return reverseString === subStr;
  };

  let step = 0;
  if (s.length === 0) return step;
  if (isPalindrome(s)) return ++step;

  let deleteA = "";
  let deleteB = "";

  if (s.includes("a")) {
    deleteA = s.replaceAll("a", "");
  } else {
    deleteB = s.replaceAll("b", "");
  }

  step++;

  if (deleteA || deleteB) {
    step++;
  }

  return step;
};

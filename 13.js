// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;

  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (i = 0; i < s.length; i++) {
    let currentChar = romanToIntMap[s[i]];

    let nextChar = romanToIntMap[s[i + 1]];

    if (currentChar < nextChar) {
      result = result - currentChar + nextChar;
      i++;
    } else {
      result = result + currentChar;
    }
  }

  return result;
};

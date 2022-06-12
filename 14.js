// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";

  //find the smallest str
  let smallestLength;

  smallestLength = strs.sort((a, b) => a.length - b.length)[0].length;

  currentChar = "";
  // check every str all contains that subString
  for (i = 0; i < smallestLength; i++) {
    currentChar = strs[0][i];

    if (!strs.every((str) => str[i] == currentChar)) {
      return result;
    } else {
      result += currentChar;
    }
  }

  return result;
};

// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  filterString = s.trim();

  arrayStr = filterString.split(" ");
  console.log(arrayStr);

  return arrayStr[arrayStr.length - 1].length;
};

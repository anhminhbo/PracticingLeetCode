// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //     for example: 'aaa'
  //     for example: 'aba'
  //     for example: 'abca'
  let result = 0;
  let subStr = "";

  for (const c of s) {
    const searchCharIndex = subStr.lastIndexOf(c);

    if (searchCharIndex !== -1) {
      subStr = subStr.substr(searchCharIndex + 1);
    }

    subStr += c;

    if (result < subStr.length) result = subStr.length;
  }

  return result;
};

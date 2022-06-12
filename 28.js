// 28. Implement strStr()
// https://leetcode.com/problems/implement-strstr/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  //     // easy solution
  // let result = 0;
  //     if (haystack.includes(needle)) result = haystack.indexOf(needle)
  //     else result = -1;
  // return result;

  //     // not using any built-in functions solution
  //     let repeat = needle.length;
  //     let subStr = '';
  //     for (let i = 0; i< haystack.length ; i++) {

  //         if (repeat === 1 && haystack[i] === needle) {
  //         return i;
  //         }

  //         else {

  //             for (let j=0; j < repeat; j++) {
  //                 subStr += haystack[i+j]
  //             }

  //             if (subStr === needle) {
  //                 return i;
  //             }
  //             else subStr= ''
  //         }

  //         if (i + repeat === haystack.length) break;

  //     }

  //     return -1;

  //subStr solution
  //     for example: hello ll the end check index is 3
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (needle === haystack.substring(i, i + needle.length)) return i;
  }

  return -1;
};

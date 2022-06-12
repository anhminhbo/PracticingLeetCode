// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //   ([{]})
  //   (]
  //    (){}[]

  // 1st: '(' --> must have ')'
  // 2nd:
  //  '([{}])' '()[]{}' -> valid

  // ({[dadasdas]})
  // (){}[]

  // this map will check valid from open and close
  const map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // check each character if it's open -> push to stack
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") stack.unshift(s[i]);
    else {
      if (!stack) {
        return false;
      } else {
        if (map[s[i]] !== stack.shift()) return false;
      }
    }

    // it's close --> check stack if empty -> not Valid
    // it's close --> stack no empty --> check first ele in stack if match with close -> valid
    // it's close --> stack no empty --> check first ele in stack if not match with close -> not valid

    // stack will contains open only
    // if close
  }

  if (stack.length !== 0) return false;

  return true;
};

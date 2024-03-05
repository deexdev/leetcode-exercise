var isValid = function (s) {
  const stack = [];
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (bracketMap[char] === undefined) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (top !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("({})"));

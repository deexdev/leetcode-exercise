var longestCommonPrefix = function (strs) {
  let anchor = strs[0];

  for (let i = 0; i < strs.length; i++) {
    let currWord = strs[i];
    let affWord = "";
    for (let j = 0; j < currWord.length; j++) {
      if (anchor[j] === currWord[j]) {
        affWord += currWord[j];
      } else {
        break;
      }
    }
    anchor = affWord;
  }
  return anchor;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["cier", "caer"]));

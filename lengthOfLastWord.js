var lengthOfLastWord = function (s) {
  let check = false;
  let result = 0

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == " " && check == true) {
        break
    }

    if (s[i] != " ") {
        result ++
        check = true;
    }
  }

  return result
};

console.log(lengthOfLastWord("hello world  "));

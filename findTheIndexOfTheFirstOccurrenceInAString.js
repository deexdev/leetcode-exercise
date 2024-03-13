var strStr = function (haystack, needle) {
  let result = [];
  let first = Array.from(needle);

  for (let i = 0; i < haystack.length; i++) {
    result.length = 0;
    if (haystack[i] == needle[0]) {
      for (let j = i; j < i + needle.length; j++) {
        result.push(haystack[j]);
      }
      if (result.toString() == first.toString()) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("mississippi", "issip"));

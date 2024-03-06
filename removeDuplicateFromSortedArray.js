function removeDuplicates(nums) {
  let number = [];
  let numsorted = nums.sort();

  for (let i = 0; i < numsorted.length; i++) {
    if (number[number.length - 1] != numsorted[i]) {
      number.push(numsorted[i]);
    }
  }

  return number.length;
}

console.log(removeDuplicates([1, 1, 2]));

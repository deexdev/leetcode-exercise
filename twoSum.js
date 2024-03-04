function twoSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            if (i != j) {
                result.push(i)
            }
        }
    }
  }
  return result;
}

console.log(twoSum([3,2,4], 5));

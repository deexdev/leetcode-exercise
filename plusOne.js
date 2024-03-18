var plusOne = function(digits) {
    result = []
    plus = 1

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + plus == 10) {
           result.unshift(0) 
        }else{
            result.unshift(digits[i] + plus);
            plus = 0
        }
    }

    if (plus == 1) {
        result.unshift(1)
    }

    return result;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9,9]));
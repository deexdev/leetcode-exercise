var isPalindrome = function(x) {
    convert = x.toString()
    fromStart = []
    fromEnd = []

    for (let i = convert.length - 1; i >= 0; i--) {
        fromEnd.push(convert[i])
    };

    for (let i = 0; i < convert.length; i++) {
        fromStart.push(convert[i])
        
    }

    if (fromStart.toString() === fromEnd.toString()) {
        return true
    }else{
        return false
    }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(505));

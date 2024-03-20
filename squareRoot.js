var mySqrt = function(x) {
    let result = 0

    for (let i = 1; i <= x; i++) {
        if (i * i > x) {
            break
        }else{
            result = i
        }
    }

    return result
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(20));
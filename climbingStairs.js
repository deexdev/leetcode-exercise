/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 3) return n;

    let a = 1;
    let b = 2;

    for (let i = 2; i < n; i ++) {
        let c = b;
        b = b + a;
        a = c;
    }

    return b;
};

console.log(climbStairs(3));
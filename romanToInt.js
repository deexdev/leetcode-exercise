var romanToInt = function (s) {
    const roman = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }

    let result = 0

    for (let i = 0; i < s.length; i++) {
        let prev = roman[s[i-1]]
        let curr = roman[s[i]]
        let next = roman[s[i+1]]

        if (prev == undefined || prev >= curr) {
            if (curr < next) {
                result += next-curr
            }else{
                result += curr
            }
        }
    }

    return result
};

// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"))
console.log(romanToInt("VIV"));

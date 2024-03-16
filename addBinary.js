var addBinary = function(a, b) {
    let line = 0

    if (a.length > b.length) {
        line = a.length
    }else{
        line = b.length
    }

    return b -= "1"
};

console.log(addBinary("11", "0"));
console.log(addBinary("1010", "1"));
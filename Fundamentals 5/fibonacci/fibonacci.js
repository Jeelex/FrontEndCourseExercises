const fibonacci = function(n) {
    let array = [0, 1];
    
    if (n > 0) {
        for (let i = 2; i < n+1; i++) {
            array.push(array[i-2] + array[i-1]);
        }
        return array[n];
    } else {
        return "OOPS";
    }
}

module.exports = fibonacci

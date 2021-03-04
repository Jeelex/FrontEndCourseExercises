const palindromes = function(str) {
    const strLowerCase = str.toLowerCase();
    const strReversed = str.split('').reverse().join('');
    if (strReversed === strLowerCase){
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes

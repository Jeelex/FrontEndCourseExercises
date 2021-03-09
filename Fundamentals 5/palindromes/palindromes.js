const palindromes = function(str) {
    const punctuation = /[^A-Za-z0-9]/g;
    const strLowNoPunct = str.toLowerCase().replace(punctuation, "");
    const strReversed = strLowNoPunct.split('').reverse().join('');

    return strLowNoPunct === strReversed;
}

module.exports = palindromes

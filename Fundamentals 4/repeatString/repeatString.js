const repeatString = function (str, times) {
    let result;
    if (times > 0) {
        result = str.repeat(times);
    } else if (times === 0) {
        result = '';
    } else {
        return 'ERROR';
    }
    return result;
};

module.exports = repeatString;

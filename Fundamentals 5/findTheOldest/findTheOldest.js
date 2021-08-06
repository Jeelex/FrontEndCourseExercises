let findTheOldest = function(array) {
    array.sort((a, b) => {
        return a.yearOfBirth - b.yearOfBirth;
    });
    return array[0];
}

module.exports = findTheOldest


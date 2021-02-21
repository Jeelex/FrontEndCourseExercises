const removeFromArray = function (array, ...elements) {
    console.log('original array: ' + array);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            // if (array[i] !== elements[j]) continue;

            if (array[i] === elements[j]) {
                // console.log('i before : ' + i);
                array.splice(i, 1);
                i--;
                // console.log('i after : ' + i);
            }
            // else {
            //     console.log('did not match element!');
            // }
        }
    }
    // console.log('final array: ' + array);
    return array;
};

module.exports = removeFromArray;

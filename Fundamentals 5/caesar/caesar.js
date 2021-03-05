const caesar = function (userInput, shiftNumber) {
	// we need to return the ENCODED STRING
	// turn userInput into charCodeAt()
	// const charCode = userInput.charCodeAt(0);
	// // add or subtract the shiftNumber
	// const finalCharCode = charCode + shiftNumber;
	// // return the result
	// return String.fromCharCode(finalCharCode);
	let result = '';

	for (let i = 0; i < userInput.length; i++) {
		// check if shiftNumber is a negative number
		if (shiftNumber < 0) {
			shiftNumber += 26 + (shiftNumber % 26);
		}

		// Uppercase letters
		if (userInput.charCodeAt(i) >= 65 && userInput.charCodeAt(i) <= 90) {
			const charCode = userInput.charCodeAt(i);
			result += String.fromCharCode(((charCode - 65 + shiftNumber) % 26) + 65);

			// Lowercase letters
		} else if (userInput.charCodeAt(i) >= 97 && userInput.charCodeAt(i) <= 122) {
			const charCode = userInput.charCodeAt(i);
			result += String.fromCharCode(((charCode - 97 + shiftNumber) % 26) + 97);

			// if it's not a letter
		} else {
			result += userInput.charAt(i);
		}
	}

	return result;
	// function convertToUnicode(input) {
	//     input.charCodeAt();
	//     charCode + shiftNumber;
	// }

	// const userInputArray = Array.from(userInput);
	// const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	// for (let i = 0; i < userInputArray.length; i++) {
	//     console.log(i);

	// };

	// let currentIndex = alphabet[];

	// const newArray = userInputArray.map(() => {
	//     if (shiftNumber > 0){
	//         return alphabet[shiftNumber -1];
	//     } else {
	//         return alphabet[shiftNumber -1];
	//     }
	// });

	// return newArray;
};

module.exports = caesar;

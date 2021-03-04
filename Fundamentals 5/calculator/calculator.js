function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
		return array.reduce((total, num) => {
			return total + num;
		}, 0);
		// let result = 0;
		// for (let i =0; i<array.length; i++){
		// 	result += array[i];
		// }
		// return result;
}

function multiply () {
	
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
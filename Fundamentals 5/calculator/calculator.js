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

function multiply (array) {
	return array.reduce((total, num) => {
		return total * num;
	}, 1);
}

function power(a, b) {
	return a ** b;
}

function factorial(n) {
	if (n === 0 || n === 1) {
		return 1;
	}
	// let result = 1;
	for (let i = n-1; i >= 1; i--) {
		n *= i;
	}
	return n;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
const grid = document.querySelector('.grid');
let squares = [];
const clearBtn = document.getElementById('clearBtn');
let userSelection = 16;

function addDivs(squareNo) {
	for (let i = 0; i < (squareNo*squareNo) ; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		grid.appendChild(square);
		squares.push(square);
	}
}
addDivs(userSelection);


// Event Listeners
squares.forEach(square => square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'gray';
}) )

clearBtn.addEventListener('click', () => {
    squares.forEach(square => square.style.backgroundColor = 'initial');
    console.log("BEFORE " + squares.length);
    squares.splice(0);
    console.log("AFTER " + squares.length);
    userSelection = parseInt(prompt('How many squares per side would you like?'));
    // console.log(userSelection + ' is a ' + typeof userSelection);
    // console.log('squares is clean!');
    addDivs(userSelection);
})
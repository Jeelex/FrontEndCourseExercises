const grid = document.querySelector('.grid');
let squares = [];
const clearBtn = document.getElementById('clearBtn');
let userSelection = 16;

addDivs(userSelection);


// Event Listeners
squares.forEach(square => square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'gray';
}) )

clearBtn.addEventListener('click', () => {
    squares.forEach(square => square.remove())
    // squares.forEach(square => square.style.backgroundColor = 'red');
    userSelection = parseInt(prompt('How many squares per side would you like?'));
    addDivs(userSelection);
})

function addDivs(squareNo) {
    for (let i = 0; i < (squareNo*squareNo) ; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        squares.push(square);
    }
}

// function removeDivs(squareNo) {
//     for (let i = 0; i < (squareNo*squareNo) ; i++) {
//         const square = document.getElementsByClassName('square');
//         square.remove();
//         // grid.removeChild(square);
//         squares.pop(square);
//         // squares.length = [];
//     }
// }
// removeDivs(userSelection);
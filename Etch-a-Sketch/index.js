const grid = document.querySelector('.grid');
let squares = [];
const clearBtn = document.getElementById('clearBtn');
let userSelection = 16;
const square = document.querySelector('.square');

addDivs(userSelection);





//   Event Listeners

clearBtn.addEventListener('click', () => {
    squares.forEach(square => square.remove());
    userSelection = parseInt(prompt('How many squares per side would you like?'));
    addDivs(userSelection);
    createMouseTrail();
    setGridDimensions(userSelection);
})


//   Functions

function addDivs(squareSizeNumber) {
    for (let i = 0; i < (squareSizeNumber*squareSizeNumber) ; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        squares.push(square);
    }
    createMouseTrail()
}

function createMouseTrail() {
    squares.forEach(square => square.addEventListener('mouseover', () => {
        square.style.backgroundColor = choosingRandomColor();
    }) )
}

function setGridDimensions(userChoice) {
    grid.style.width = 30 * userChoice + 'px';
    grid.style.height = grid.style.width;
}

function choosingRandomColor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}
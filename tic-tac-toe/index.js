"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const squares = Array.from(document.querySelectorAll(".grid div"));
	const playerDisplay = document.querySelector("#player-display");
	const replayBtn = document.querySelector("#replay-btn");
	
  const PLAYER_O = "O";
  const PLAYER_X = "X";
	let currentPlayer = PLAYER_X;

	squares.forEach((square) => {
		square.addEventListener("click", addMark);
	});

	function addMark(e) {
    if (checkWinner()) {
      return;
		}

    const index = squares.indexOf(e.target);

    if (squares[index].innerText !== "") {
      return;
    }

		if (currentPlayer === PLAYER_X) {
			// squares[index].classList.add("player-x");
			squares[index].innerText = currentPlayer;
		} else {
			// squares[index].classList.add("player-o");
			squares[index].innerText = currentPlayer;
		}
    
		if (checkWinner()) {
      return;
		} else {
      currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
      playerDisplay.innerText = `Player ${currentPlayer} turn`;
		}
	}

	replayBtn.addEventListener("click", replay);

	function replay() {
		playerDisplay.innerHTML = "Player X turn";
    currentPlayer = PLAYER_X;
    console.log({currentPlayer});
		squares.forEach((square) => {
      square.innerText = "";
			// square.classList.remove("player-x");
			// square.classList.remove("player-o");
		});
	}


	function checkWinner() {
		if (squares[0].innerText === currentPlayer) {
			if (squares[1].innerText === currentPlayer && squares[2].innerText === currentPlayer) {
				playerDisplay.innerHTML = `${currentPlayer} wins on top row!`;
				return true;
			}

			if (squares[3].innerText === currentPlayer && squares[6].innerText === currentPlayer) {
				playerDisplay.innerHTML = `${currentPlayer} wins on left row!`;
				return true;
			}
		}

		if (squares[8].innerText === currentPlayer) {
			if (squares[2].innerText === currentPlayer && squares[5].innerText === currentPlayer) {
				playerDisplay.innerHTML = `${currentPlayer} wins on right row!`;
				return true;
			}

			if (squares[6].innerText === currentPlayer && squares[7].innerText === currentPlayer) {
				playerDisplay.innerHTML = `${currentPlayer} wins on bottom row!`;
				return true;
			}
		}

		if (squares[4].innerText === currentPlayer) {
			if (
        squares[1].innerText === currentPlayer && squares[7].innerText === currentPlayer ||
        squares[3].innerText === currentPlayer && squares[5].innerText === currentPlayer
        ) {
				playerDisplay.innerHTML = `${currentPlayer} wins on middle row!`;
				return true;
			}

			if (
        squares[6].innerText === currentPlayer && squares[2].innerText === currentPlayer ||
        squares[0].innerText === currentPlayer && squares[8].innerText === currentPlayer
        ) {
				playerDisplay.innerHTML = `${currentPlayer} wins on diagonal row!`;
				return true;
			}
		}
	}
});
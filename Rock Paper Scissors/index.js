const playerSelection = ''
const computerSelection = computerPlay()
// const computerChoice = ''
// console.log(playRound(playerSelection, computerSelection))
let result

function game() {
  // use playRound()
  // play the game 5 times
  // keep score
  // announce winner at the end
  let playerScore = 0
  let computerScore = 0
// debugger
  playRound(playerSelection, computerSelection)
  // playRound()
  // playRound()
  // playRound()
  // playRound()
  // debugger
  if (
    result === `You Win! ${playerSelection} beats ${computerSelection}` ||
    result === `You Win! ${playerSelection} beats ${computerSelection}` ||
    result === `You Win! ${playerSelection} beats ${computerSelection}`
  ) {
    playerScore++
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
  } else if ((result = `It's a draw!`)) {
    playerScore++
    computerScore++
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
  } else {
    computerScore++
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
  }
  // console.log(playerScore, computerScore)
// return playerScore, computerScore
  // for (let i = 0; i < 5; i++) {
  //   playRound()
  //   i;
  // }

}
game()

function playRound(playerSelection, computerSelection) {
  // debugger
  playerSelection = prompt('User Choice: ')
  playerSelection = playerSelection.toLowerCase()
  computerPlay()
  // let computerChoice = computerSelection
  console.log(`User: ${playerSelection}`)
  console.log(`Computer: ${computerSelection}`)
  //   need to determine win or lose.
  // if statement?
  // rock > scissors  |   scissors > paper  | paper > rock

  // probably don't need this declaration in here. did a global scope
  // let result

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = `You Lose! ${computerSelection} beats ${playerSelection}`
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    result = `It's a draw!`
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = `You Win! ${playerSelection} beats ${computerSelection}`
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = `You Win! ${playerSelection} beats ${computerSelection}`
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result = `You Lose! ${computerSelection} beats ${playerSelection}`
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    result = `It's a draw!`
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    result = `It's a draw!`
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = `You Win! ${playerSelection} beats ${computerSelection}`
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = `You Lose! ${computerSelection} beats ${playerSelection}`
  } else {
    console.log("Sorry! You can only choose between 'rock', 'paper' or 'scissors' !")
  }

  // might be easier to turn it into a switch statement???
  //   switch ((playerSelection, computerSelection)) {
  //     case 'rock', 'paper':
  //       console.log('lose')
  //       break
  //     // case 2:
  //     //   // computerRound = 'Paper'
  //     //   console.log('Computer: Paper')
  //     //   break
  //     // case 3:
  //     //   // computerRound = 'Scissors'
  //     //   console.log('Computer: Scissors')
  //     //   break
  //   }
  //   return `You Win! ${playerSelection} beats ${computerSelection}`
  //   return 'You Lose! Paper beats Rock'

  return result
  // console.log(result)
}
// playRound(playerSelection, computerSelection)

function computerPlay() {
  // creating random number from 1 to 3
  randomNum = Math.floor(Math.random() * 3 + 1)

  //   switch statement to determine what the above random number represents
  let computerChoice
  switch (randomNum) {
    case 1:
      // console.log('Computer: rock')
      computerChoice = 'rock'
      return computerChoice
      break
    case 2:
      // console.log('Computer: paper')
      computerChoice = 'paper'
      return computerChoice
      break
    case 3:
      // console.log('Computer: scissors')
      computerChoice = 'scissors'
      return computerChoice
      break
  }
}

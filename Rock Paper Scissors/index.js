const playerSelection = ''
const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))
let result
let playerScore = 0
let computerScore = 0
let playerScoreRound = 0
let playerScoreTotal = 0
let computerScoreRound = 0
let computerScoreTotal = 0

function game() {
  //        TODO could try to use for loop

  playRound(playerSelection, computerSelection)
  playRound(playerSelection, computerSelection)
  playRound(playerSelection, computerSelection)
  playRound(playerSelection, computerSelection)
  playRound(playerSelection, computerSelection)

  
  console.log("\x1b[35m%s\x1b[0m" , `Player Total: ${playerScoreTotal}, Computer Total: ${computerScoreTotal}`)
  
  // TODO if statement for TOTAL score
if (playerScoreTotal > computerScoreTotal){
  console.log("\x1b[42m%s\x1b[0m", "You're the WINNER!")
} else if (playerScoreTotal === computerScoreTotal) {
  console.log("\x1b[33m%s\x1b[0m","It's a DRAW!")
} else {
  console.log("\x1b[31m%s\x1b[0m", "You LOSE!")
}

}
game()

function playRound(playerSelection, computerSelection) {
  // debugger
  playerScore = 0
  computerScore = 0

  playerSelection = prompt('User Choice: ')
  playerSelection = playerSelection.toLowerCase()
  // playerPlay()
  computerPlay()
  console.log(`Player: ${playerSelection}`)
  console.log(`Computer: ${computerSelection}`)
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++
    // playerScoreRound = playerScore
    // computerScoreRound = computerScore
    result = 'You Lose!'
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    playerScore++
    computerScore++
    // playerScoreRound = playerScore
    // computerScoreRound = computerScore
    result = "It's a draw!"
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    // playerScoreRound = playerScore
    result = 'You Win!'
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    // playerScoreRound = playerScore
    result = 'You Win!'
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    // playerScoreRound = playerScore
    // computerScoreRound = computerScore
    result = 'You Lose!'
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    playerScore++
    computerScore++
    // playerScoreRound = playerScore
    // computerScoreRound = computerScore
    result = "It's a draw!"
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    playerScore++
    computerScore++
    // playerScoreRound = playerScore
    // computerScoreRound = computerScore
    result = "It's a draw!"
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    // playerScoreRound = playerScore
    result = 'You Win!'
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    // playerScoreRound = playerScore
    // computerScoreRound = computerScore
    result = 'You Lose!'
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else {
    console.log("Sorry! You can only choose between 'rock', 'paper' or 'scissors' !")
  }

  // might be better to turn it into a switch statement???

  // console.log(result)
  // return result
  // return playerScoreRound, computerScoreRound
  // console.log(`Player: ${playerScoreRound}, Computer: ${computerScoreRound}`)
  // playerScoreTotal = playerScoreRound
  playerScoreTotal += playerScore
  computerScoreTotal += computerScore
  // console.log(`Player Round: ${playerScoreTotal}, Computer Round: ${computerScoreTotal}`)
}
// playRound(playerSelection, computerSelection)

// created this separate playerPlay() function but it's a bit annoying as it prompts 1 extra time (the first one) than actually needed
// function playerPlay(userChoice) {
//   userChoice = prompt('User Choice: ')
//   userChoice = userChoice.toLowerCase()
//   // console.log(`User: ${userChoice}`)
//   return userChoice
// }

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

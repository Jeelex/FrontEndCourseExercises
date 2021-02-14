const playerSelection = ''
const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))
let result
let playerScore = 0
let computerScore = 0
let playerScoreTotal = 0
let computerScoreTotal = 0

function game() {
  // use playRound()
  // play the game 5 times
  // keep score
  // announce winner at the end

  playRound(playerSelection, computerSelection)


  // TODO if statement for TOTAL score

  console.log(`Player: ${playerScore}`, `Computer: ${computerScore}`)
}
game()

function playRound(playerSelection, computerSelection) {
  // debugger
  playerSelection = prompt('User Choice: ')
  playerSelection = playerSelection.toLowerCase()
  // computerPlay()
  console.log(`User: ${playerSelection}`)
  console.log(`Computer: ${computerSelection}`)

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    ++computerScore
    playerScoreTotal += playerScore
    computerScoreTotal += computerScore
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
    result = "You Lose!"
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    ++playerScore
    ++computerScore
    playerScoreTotal += playerScore
    computerScoreTotal += computerScore
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
    result = "It's a draw!"
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    ++playerScore
    playerScoreTotal += playerScore
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
    result = 'You Win!'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    ++playerScore
    playerScoreTotal += playerScore
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
    result = 'You Win!'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    ++computerScore
    playerScoreTotal += playerScore
    computerScoreTotal += computerScore
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
    result = "You Lose!"
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    ++playerScore
    ++computerScore
    playerScoreTotal += playerScore
    computerScoreTotal += computerScore
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
    result = "It's a draw!"
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    ++playerScore
    ++computerScore
    playerScoreTotal += playerScore
    computerScoreTotal += computerScore
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
    result = "It's a draw!"
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    ++playerScore
    playerScoreTotal += playerScore
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
    result = 'You Win!'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    ++computerScore
    playerScoreTotal += playerScore
    computerScoreTotal += computerScore
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
    result = "You Lose!"
  } else {
    console.log("Sorry! You can only choose between 'rock', 'paper' or 'scissors' !")
  }

  // might be better to turn it into a switch statement???

  console.log(result)
  // return result
  return playerScoreTotal, computerScoreTotal
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

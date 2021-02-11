const playerSelection = 'RoCK'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))

function playRound(playerSelection, computerSelection) {
  playerSelectionLowerCase = playerSelection.toLowerCase()
  // debugger
  console.log(`User: ${playerSelectionLowerCase}`)

  //   need to determine win or lose.
  // if statement?
  // rock > scissors  |   scissors > paper  | paper > rock

  let result

  if (playerSelectionLowerCase === 'rock' && computerSelection === 'paper') {
    result = `You Lose! ${computerSelection} beats ${playerSelectionLowerCase}`
  } else if (playerSelectionLowerCase === 'paper' && computerSelection === 'paper') {
    result = "It's a draw"
  } else if (playerSelectionLowerCase === 'scissors' && computerSelection === 'paper') {
    result = `You Win! ${playerSelectionLowerCase} beats ${computerSelection}`
  } else if (playerSelectionLowerCase === 'rock' && computerSelection === 'scissors') {
    result = `You Win! ${playerSelectionLowerCase} beats ${computerSelection}`
  } else if (playerSelectionLowerCase === 'paper' && computerSelection === 'scissors') {
    result = `You Lose! ${computerSelection} beats ${playerSelectionLowerCase}`
  } else if (playerSelectionLowerCase === 'scissors' && computerSelection === 'scissors') {
    result = "It's a draw"
  } else if (playerSelectionLowerCase === 'rock' && computerSelection === 'rock') {
    result = "It's a draw"
  } else if (playerSelectionLowerCase === 'paper' && computerSelection === 'rock') {
    result = `You Win! ${playerSelectionLowerCase} beats ${computerSelection}`
  } else if (playerSelectionLowerCase === 'scissors' && computerSelection === 'rock') {
    result = `You Lose! ${computerSelection} beats ${playerSelectionLowerCase}`
  }

  //   switch ((playerSelection, computerSelection)) {
  //     //   debugger
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
}

function computerPlay() {
  // creating random number from 1 to 3
  randomNum = Math.floor(Math.random() * 3 + 1)

  //   let computerRound
  //   switch statement to determine what the above random number represents
  switch (randomNum) {
    case 1:
      console.log('Computer: rock')
      return 'rock'
      break
    case 2:
      console.log('Computer: paper')
      return 'paper'
      break
    case 3:
      console.log('Computer: scissors')
      return 'scissors'
      break
  }

  //   return computerRound
}

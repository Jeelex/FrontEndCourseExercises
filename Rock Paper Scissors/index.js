function computerPlay() {
  // creating random number from 1 to 3
  randomNum = Math.floor(Math.random() * 3 + 1)

  //   switch statement to determine what the above random number represents
  switch (randomNum) {
    case 1:
      console.log('Rock')
      break
    case 2:
      console.log('Paper')
      break
    case 3:
      console.log('Scissors')
      break
  }
}
// calling the above function
computerPlay()

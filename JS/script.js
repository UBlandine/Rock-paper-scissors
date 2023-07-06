// let playerScore = 0
// let computerScore = 0
// const button = document.querySelectorAll('selection')

// function getComputerChoice(){
//   let choices = ['rock', 'paper', 'scissors']
//    return choices[Math.floor(Math.random() * choices.length)]
// }

// function playRound() {




//  if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
//         (playerSelection == 'scissors' && computerSelection == 'paper') ||
//         (playerSelection == 'paper' && computerSelection == 'rock')) {
        
// }
// }
// Function to get the computer's choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner

function playround(playerSelection, computerSelection) {

  let playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound());

  if (playerSelection === computerSelection) {
    return 'It\'s a tie!';
  } else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Get the elements
const selectionButtons = document.querySelectorAll('.selection');
const playerSelectionButton = document.getElementById('player');
const computerSelectionButton = document.getElementById('computer');
const resultLabel = document.getElementById('result');
const recallButton = document.getElementById('recall');

// Event listener for player selection
selectionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.textContent;
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);
    
    playerSelectionButton.textContent = `Player selection: ${playerChoice}`;
    computerSelectionButton.textContent = `Computer selection: ${computerChoice}`;
    resultLabel.textContent = `Result: ${result}`;
  });
});

// Event listener for recall button
recallButton.addEventListener('click', () => {
  playerSelectionButton.textContent = 'Player selection';
  computerSelectionButton.textContent = 'Computer selection';
  resultLabel.textContent = 'Result';
});


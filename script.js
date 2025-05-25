// Function for computer choice

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
// Function for Human Choice

function getHumanChoice() {
  let humanInput = prompt().toLowerCase();
  return humanInput;
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

// Score Variables

// PlayRound Function
function playRound(humanChoice, computerChoice) {
  let humanScore = 0;
  let computerScore = 0;
  if (humanChoice === computerChoice) {
    console.log("Tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    return "Rock beats scissors. You win!";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    return "Paper beats rock. You win!";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    return "Scissors beats paper. You win!";
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    return "Paper beats rock. You lose!";
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    return "Scissors beats paper. You lose!";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    return "Rock beats scissors. You lose!";
    computerScore++;
  }
  
}
console.log(playRound(humanChoice, computerChoice));


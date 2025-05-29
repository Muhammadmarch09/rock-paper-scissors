// Function to generate random numbers
function randomNumberGenerator() {
  return Math.floor(Math.random() * 3);
}

// Function generate the computer Choice
function makeComputerChoice() {
  let randomNumber = randomNumberGenerator();

  if (randomNumber == 0) return "rock";
  else if (randomNumber == 1) return "paper";
  else if (randomNumber == 2) return "scissors";
}
// Function to get Human choice
function getHumanChoice() {
  return prompt("Enter rock paper or scissors").toLowerCase();
}

// Function play round
function playRound() {
  let computerChoice = makeComputerChoice();
  let humanChoice = getHumanChoice();
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("Paper beats Rock You lose !");
    return "c";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("Paper beats Rock You win !");
    return "h";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("Scissors beat Paper You win !");
    return "h";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("Scissors beat Paper You lose !");
    return "c";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("Rock beat Scissors You win !");
    return "h";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("Rock beat Scissors You lose !");
    return "c";
  }
}
// Scores of the players
let humanScore = 0;
let computerScore = 0;
// Function to increment or decrement Score
function incrementDecrementScore() {
  let resultOfPlayRound = playRound();
  if (resultOfPlayRound == "h") {
    humanScore++;
  } else if (resultOfPlayRound == "c") {
    computerScore++;
  }
  console.log(humanScore, computerScore)
}
// Function to choice winner 
function choiceWinner(){
    if(humanScore < computerScore){
        console.log("Computer Win")
    }else if(humanScore > computerScore){
        console.log("Human Win")
    }else if(humanScore == computerScore){
        console.log("Tie")
    }
}

// Final function to play the game 
function playGame(){
   for(let i = 0;i<5;i++){
     incrementDecrementScore()
     choiceWinner()
   }
}

playGame()
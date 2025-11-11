function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors.");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock"     && computerChoice === "scissors") ||
        (humanChoice === "paper"    && computerChoice === "rock")     ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
}

function playGame(numRounds) {
    for (let i = 0; i < numRounds; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Human score is ${humanScore}. Computer score is ${computerScore}.`);
    }

    console.log(`Total human score is ${humanScore}. Total computer score is ${computerScore}.`)
    if (humanScore > computerScore) {
        console.log(`Human wins!`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins!`);
    } else {
        console.log(`It's a tie!`);
    }
}

playGame(5);
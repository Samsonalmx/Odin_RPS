console.log("Rock, Paper, Scissors Game");
console.log("\n");
let humanScore = 0;
let computerScore = 0;

function getcomputerChoice() {
    let computerChoice;
    let random1 = Math.random();
    let random2 = Math.floor(random1 * 3) + 1;

    switch (random2) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function gethumanChoice() {
    let humanChoice;
    while (true) {
        let hchoice = prompt("Enter your choice: rock, paper, or scissors");
        if (!hchoice) continue;
        hchoice = hchoice.toLowerCase();

        if (hchoice === "rock" || hchoice === "paper" || hchoice === "scissors") {
            humanChoice = hchoice;
            break;
        } else {
            console.log("Invalid choice. Please try again.");
        }
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = gethumanChoice();
        let computerChoice = getcomputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("The game is a tie!");
    }
}

game();

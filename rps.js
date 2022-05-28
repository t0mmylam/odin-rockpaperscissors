function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let choice;
    switch (getRandomInt(3)) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    return (choice.toLowerCase());
}

function playerPlay() {
    let choice = prompt("Type Rock, Paper, or Scissors.")
    return (choice.toLowerCase());
}

function round(player, computer) {
    if (player == computer) {
        return ("The game is a tie.");
    }
    else if (player == "scissors") {
        if (computer == "rock") {
            return ("You lose. Rock crushes scissors.");
        }
        else {
            return ("You win! Scissors cuts paper!");
        }
    }
    else if (player == "rock") {
        if (computer == "paper") {
            return ("You lose. Paper covers rock.");
        }
        else {
            return ("You win! Rock crushes scissors!");
        }
    }
    else {
        if (computer == "rock") {
            return ("You win! Paper covers rock!");
        }
        else {
            return ("You lose. Scissors cuts paper.");
        }
    }
}

function changeScore(results, pScore, cScore) {
    console.log(pScore, cScore);
    if (results.substring(0, 8) == "You win!") {
        pScore += 1;
    }
    else if (results.substring(0, 9) == "You lose.") {
        cScore += 1;
    }
    else {
        pScore += 0.5;
        cScore += 0.5;
    }
    return [pScore, cScore];
}

let playerScore = 0;
let computerScore = 0;
const scoreDiv = document.querySelector('#score');
const scores = document.createElement('div');
scores.textContent = "Player Score: " + playerScore + " | Computer Score: " + computerScore;
scoreDiv.appendChild(scores);

const buttons = document.querySelectorAll('button');
const results = document.createElement('div');
const container = document.querySelector('.results');
container.appendChild(results);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let temp = round(button.id, computerPlay());
        results.textContent = temp;
        let tempScores = changeScore(temp, playerScore, computerScore);
        playerScore = tempScores[0];
        computerScore = tempScores[1];
        scores.textContent = "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    })
});
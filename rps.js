function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let choice;
    switch(getRandomInt(3)) {
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
    console.log(choice);
    return(choice.toLowerCase());
}

function playerPlay() {
    let choice = prompt("Type Rock, Paper, or Scissors.")
    return(choice.toLowerCase());
}

function round(player, computer) {
    if(player==computer) {
        return("The game is a tie.");
    }
    else if(player=="scissors") {
        if(computer=="rock") {
            return("You lose. Rock crushes scissors.");
        }
        else {
            return("You win! Scissors cuts paper!");
        }
    }
    else if (player=="rock") {
        if(computer=="paper") {
            return("You lose. Paper covers rock.");
        }
        else {
            return("You win! Rock crushes scissors!");
        }
    }
    else {
        if(computer=="rock") {
            return ("You win! Paper covers rock!");
        }
        else {
            return("You lose. Scissors cuts paper.");
        }
    }
}

function game(){
    let pScore = 0;
    let cScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = round(playerPlay(), computerPlay());
        console.log(result);
        if (result.substring(0, 8) == "You win!") {
            pScore+=1;
        }
        else if (result.substring(0, 9) == "You lose.") {
            cScore+=1;
        }
        else {
            pScore+=0.5;
            cScore+=0.5;
        }
        console.log("PSCORE: "+pScore);
        console.log("CSCORE: "+cScore);
    }
    console.log("You had "+pScore+" ponts and the computer had "+cScore+" points.");
}

game();
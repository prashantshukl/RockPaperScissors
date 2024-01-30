console.log("working");

function getComputerChoice() {
    const a = Math.floor(Math.random() * 3);
    const poss = ["rock", "paper", "scissor"]
    return poss[a];
}

function playARound(playerChoice, computerChoice) {
    console.log("Your Choice is : "+playerChoice+", computer Choice is :"+computerChoice);
    if (playerChoice=="rock" && computerChoice=="scissor") {
        return true;
    } if (playerChoice=="paper" && computerChoice=="rock") {
        return true;
    }
    if (playerChoice=="scissor" && computerChoice=="paper") {
        return true;
    } if (playerChoice==computerChoice) return playARound(playerChoice, getComputerChoice());
    return false;
}

function game() {
    var c_score = 0;
    var p_score = 0;
    for (let i = 0;i < 5; i++) {
        const p = prompt("Enter your Choice !! : ");
        if(playARound(p,getComputerChoice())) {
            p_score++;
        } else c_score++;
    }
    if (p_score > c_score) console.log("You win !!");
    else console.log("You Lose !!");
}
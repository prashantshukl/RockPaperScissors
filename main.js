const btn1 = document.querySelector('#Rock');
const btn2 = document.querySelector('#Paper');
const btn3 = document.querySelector('#Scissor');

btn1.addEventListener('click', playRock);
btn2.addEventListener('click', playPaper);
btn3.addEventListener('click', playScissor);

function playRock() {
    playARound('rock', getComputerChoice());
}
function playPaper() {
    playARound('paper', getComputerChoice());
}

function playScissor() {
    playARound('scissor', getComputerChoice());
}

function getComputerChoice() {
    const a = Math.floor(Math.random() * 3);
    const poss = ["rock", "paper", "scissor"]
    return poss[a];
}

function playARound(playerChoice, computerChoice) {
    //console.log("Your Choice is : "+playerChoice+", computer Choice is :"+computerChoice);
    const result = document.querySelector('#result');
    const score1 = document.querySelector('#score1');
    const score2 = document.querySelector('#score2');
    let your_score = parseInt(score1.textContent);
    let comp_score = parseInt(score2.textContent);
    if (playerChoice=="rock" && computerChoice=="scissor") {
        your_score++;
        score1.textContent = your_score;
        result.textContent = "You Win !!";
    }else if (playerChoice=="paper" && computerChoice=="rock") {
        your_score++;
        score1.textContent = your_score;
        result.textContent = "You Win !!";
    }
    else if (playerChoice=="scissor" && computerChoice=="paper") {
        your_score++;
        score1.textContent = your_score;
        result.textContent = "You Win !!";
    }else if (playerChoice==computerChoice) {
        result.textContent = 'Its A Draw !!';
    }
    else {
        comp_score++;
        score2.textContent = comp_score;
        result.textContent = "You LOSE!!";
    }
}

// function game() {
//     var c_score = 0;
//     var p_score = 0;
//     for (let i = 0;i < 5; i++) {
//         const p = prompt("Enter your Choice !! : ");
//         if(playARound(p,getComputerChoice())) {
//             p_score++;
//         } else c_score++;
//     }
//     if (p_score > c_score) console.log("You win !!");
//     else console.log("You Lose !!");
// }
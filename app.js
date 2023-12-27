
let userScore=0;
let CompScore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const generate = () =>{
    const options = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}
const drawGame = () =>{
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = '#081b31';
}

const showWinner = (userWin, userChoice, compchoice) =>{
    if(userWin){
        userScore++;
        msg.innerText = `You win! your ${userChoice} beats ${compchoice}.`;
        msg.style.backgroundColor = "Green";
        document.querySelector("#user-score").innerText=userScore;
        
    }else{
        CompScore++
        msg.innerText = `You lost. ${compchoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "Red";
        document.querySelector("#comp-score").innerText=CompScore;
    }
}
const playgame = (userChoice) =>{
    const compchoice=generate();
    if(userChoice===compchoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compchoice==='paper' ? false : true;
        }else if(userChoice === "paper"){
            userWin = compchoice === "rock" ? true : false;
        }else{
            userWin = compchoice === "paper" ? true: false;
        }
        showWinner(userWin,userChoice,compchoice);
    }
}
choices.forEach((choice) => {
        choice.addEventListener("click",()=>{
            const userChoice = choice.getAttribute("id");
            playgame(userChoice);
        });
    }
);


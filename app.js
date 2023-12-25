
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

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "Green";
        document.querySelector("#user-score").innerText=userScore;
        console.log(userScore);
    }else{
        CompScore++
        msg.innerText = "computer win!";
        msg.style.backgroundColor = "Red";
        document.querySelector("#comp-score").innerText=CompScore;
        console.log(CompScore);
    }
}
const playgame = (userChoice) =>{
    console.log("user choice ",userChoice);
    const compchoice=generate();
    console.log("computer choice",compchoice);

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
        console.log(userWin);
        showWinner(userWin);
    }
}
choices.forEach((choice) => {
        choice.addEventListener("click",()=>{
            const userChoice = choice.getAttribute("id");
            playgame(userChoice);
        });
    }
);


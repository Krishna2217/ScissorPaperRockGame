
let userScore=0;
letCompScore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

choices.forEach((choice) => {
        console.log(choice);
        choice.addEventListener("click",()=>{
            console.log("choice was clicked");
            const userChoice = choice.getAttribute("id");
        });
    }
);


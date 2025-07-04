let userscore = 0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara=document.querySelector("#yourscore");
const compscorepara=document.querySelector("#compscore");

const genCompChoice = () => {
    const options= ["rock","paper","scissor"];
    const randIdx= Math.floor(Math.random()*3);
     return options[randIdx];
};

const drawGame=() =>{
    msg.innerText="game was draw! play again";
    msg.style.backgroundColor="rgb(0, 0, 0)"
}

const showWinner = (userwin, userChoice, compchoice) => {
  
    if (userwin) {
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText = `you win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText = `you lose! ${compchoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    
};


 
const playgame= (userChoice) =>{
console.log("user choice =" ,userChoice);
const compchoice=genCompChoice();
console.log("comp choice =",compchoice);
if(userChoice=== compchoice){
    drawGame();
}else{
    let userwin=true;
  if (userChoice === "rock") {
    userwin = compchoice === "paper" ? false : true;
} else if (userChoice === "paper") {
    userwin = compchoice === "scissor" ? false : true;
} else {
    userwin = compchoice === "rock" ? false : true;
}


    showWinner(userwin ,userChoice,compchoice);
}

};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id").toLowerCase();
    console.log("User clicked:", userChoice); 
    playgame(userChoice);
});

});


let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game Draw!, Play Again...";
    msg.style.backgroundColor= "#081b31"
}

const ShowWinner=(UserWin,UserChoice,CompChoice)=>{
    if(UserWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${UserChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose!");
        msg.innerText=`You Lose! ${CompChoice} beats your ${UserChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(UserChoice)=>{
    console.log("User choice= ",UserChoice);
    const CompChoice=genCompChoice();
    console.log("Computer choice= ",CompChoice);

    if(UserChoice===CompChoice){
        drawGame()
    }else{
        let UserWin=true;
        if(UserChoice==="rock"){
            UserWin=CompChoice==="paper"? false:true;
        }else if(UserChoice==="paper"){
            UserWin=CompChoice==="scissors"?false:true;
        }else{
            UserWin=CompChoice==="paper"?false:true;
        }
        ShowWinner(UserWin,UserChoice,CompChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const UserChoice=choice.getAttribute("id");
        // console.log("choice was clicked",UserChoice);
        playGame(UserChoice);
    })
})
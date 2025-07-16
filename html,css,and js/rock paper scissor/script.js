let userScore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const getCompChoice=()=>{
    //rock, paper, scissor
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);//generates random number between 0 and 1;
    return options[randomIdx];
};

const drawGame=()=>{
    console.log("game was draw");

}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText="you win!!";
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        console.log("u loose");
        msg.innerText="you loose";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice=", userChoice);
    //genrate comp choice-> modular
    const compChoice=getCompChoice();
    console.log("comp choice=", compChoice);

    if(userChoice===compChoice){
        //draw game;
        drawGame();
        msg.innerText="Draw, play again";

    }else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin= compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;

        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id")
        console.log("Choice was  clicked",userChoice);
        playGame(userChoice);


    });
});
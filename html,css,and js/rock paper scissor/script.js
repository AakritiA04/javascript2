let userScore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

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
        console.log("you win");
    }else{
        console.log("u loose");
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
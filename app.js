let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("comp-score");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function converToWord(l){
    if(l=='r' )return "Rock";
    if(l=='p') return "Paper";
     return "Scissor";
}
function win(userChoice,computerChoice){
    const userChoice_div=document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${converToWord(userChoice)} beats ${converToWord(computerChoice)}. You Wins 🔥`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow") ,300);
}
function lose(userChoice,computerChoice){
    const userChoice_div=document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${converToWord(userChoice)} lose to ${converToWord(computerChoice)}. You Lost 💩`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow") ,300);
}
function draw(userChoice,computerChoice){
    const userChoice_div=document.getElementById(userChoice);
    result_p.innerHTML=`${converToWord(userChoice)} equals ${converToWord(computerChoice)}. It's Draw `;
    userChoice_div.classList.add("white-glow");
    setTimeout(() => userChoice_div.classList.remove("white-glow") ,300);
}
function getComputerChoice(){
    const choices =['r','p','s'];
    const randomIndex=Math.floor(Math.random()*3);
    return choices[randomIndex];
}
function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}
rock_div.addEventListener("click",function(){
    game("r");
})
paper_div.addEventListener("click",function(){
    game("p");
})
scissor_div.addEventListener("click",function(){
    game("s");
})
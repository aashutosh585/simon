let btns = ["yellow", "red", "purple", "green"];
let gameSeq = [];
let userSeq = [];

let MAX=0;

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let start = document.querySelector(".start");




start.addEventListener("click", function () {
    if (!started) {
        console.log("game started");
        started = true;
        levelUp();  
    }
});




function flash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("gren");
    setTimeout(() => {
        btn.classList.remove("gren");
    }, 250);
}

function levelUp() {
    level++;
    if(MAX<level){
        MAX=level;
    }
    h2.innerText = `Level ${level}`;
    userSeq=[];
    // blink random
    let i = Math.floor(Math.random() *  3);
    let randColor = btns[i];
    let randbtn = document.querySelector(`.${randColor}`);
   
    gameSeq.push(randColor);
    console.log(gameSeq); 

    flash(randbtn);
}

function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML=`Game Over ! your score is <b>${level}</b> <b>Highest Score ${MAX}</b><br> Press start key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },150);

        started = false;
        gameSeq = [];
        userSeq=[];
        level = 0;
    }
}

function btnPress(){
   let btn=this;
   userFlash(btn); 
//    console.log("btn clicked");

   let userColor =btn.getAttribute("id");
   userSeq.push(userColor);
//    console.log(userColor);

   checkAns(userSeq.length - 1);
}

let allBtns =document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
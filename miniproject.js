let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","blue"];

let started=false;
let level=0;
let highest=0;
let h2= document.querySelector('h2');
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;
    let randomindex=Math.floor(Math.random()*3);
    let randomclr=btns[randomindex];
    let randombtn=document.querySelector(`.${randomclr}`);
    gameSeq.push(randomclr);
    console.log(gameSeq);
    btnFlash(randombtn);
}
function checkAns(idx){
   
   if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp(), 2000);
    }
   }
   else{
    if(level-1 > highest){
        highest=level-1;
    }
    h2.innerHTML=`Game over! Your score is <b>${level-1}</b>.<br> Press any key to restart. <br>Highest score: ${highest}.`;
    document.querySelector('body').style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor="white";
    },500);
    reset();
   }
}
function btnPress(){
   let btn = this;
   userFlash(btn);

   userclr=btn.getAttribute("id");
   userSeq.push(userclr);
   checkAns(userSeq.length-1);
}

let allbtns= document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){

  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}

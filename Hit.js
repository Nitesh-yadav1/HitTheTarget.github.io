'use strict';
const scoreplayer1=document.querySelector(".ply1");
const scoreplayer2=document.querySelector(".ply2");
const btnplayer1=document.querySelector("#btn1");
const btnplayer2=document.querySelector("#btn2");
const reset=document.querySelector(".reset");

// console.log(scoreplayer1,scoreplayer2,btnplayer1,btnplayer2,reset);
const targetvalue=50;
let currentScoreplayer1=0;
let currentScoreplayer2=0;
let flag=1; // used to control over changes in which each of player get their chances
reset.addEventListener('click',function(){
  currentScoreplayer1=0;
  currentScoreplayer2=0;
  scoreplayer1.textContent=0;
  scoreplayer2.textContent=0;
  flag=1;
})

btnplayer1.addEventListener('click',function(){
  if(!flag){
    alert('wrong attempt')
    return;
  }
  flag=0;
  currentScoreplayer1+=Math.trunc(Math.random()*10)+1;
  scoreplayer1.textContent=currentScoreplayer1;
  if(currentScoreplayer1>=targetvalue){
    alert(`player 1 won of ${currentScoreplayer1} `)
  }
  });

  btnplayer2.addEventListener("click",function(){
    if(flag){
      alert("wrong attempt");
      return;
    }
    flag=1;
    currentScoreplayer2+=Math.trunc(Math.random()*10)+1;
    scoreplayer2.textContent=currentScoreplayer2;
    if (currentScoreplayer2>=targetvalue){
      alert(`Player 2 won ${currentScoreplayer2} `)
    }

  });
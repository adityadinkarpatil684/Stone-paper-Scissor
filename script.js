let a=document.querySelectorAll(".image");
let d=document.querySelectorAll("p");
let user=0,comp=0;

const comp_turn=()=>{
   let options=["paper","rock","scissors"];
   let comp_choice=Math.floor(Math.random()*3);
   return options[comp_choice];
}

const show_winner=(winner)=>{
       if(winner){
        ++user;
        d[1].innerText="User Score :"+user;
        d[3].style.backgroundColor="green";
        d[3].innerText="You Win !!";
       }
       else{
        ++comp;
        d[2].innerText="Comp Score :"+comp;
        d[3].style.backgroundColor="red";
        d[3].innerText="You Lose !!";
       }
}

function winner_updates(user_choice){
    let comp_choice = comp_turn();
    let winner;
    if(user_choice==comp_choice){
       d[3].innerText="DRAW";
       d[3].style.backgroundColor="rgb(167, 219, 240)";
    }
    else{
        if(user_choice=="paper"){
            winner=comp_choice=="scissors"?false:true;
        }
        else if(user_choice=="scissors"){
            winner=comp_choice=="rock"?false:true;
        }
        else{
            winner=comp_choice=="paper"?false:true;
        }
        show_winner(winner);
    }
}

a.forEach((op)=>{
    op.addEventListener("click",()=>{
       let b= op.getAttribute("id");
       winner_updates(b);
    });

});
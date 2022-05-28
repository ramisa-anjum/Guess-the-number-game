let button =document.querySelector(".btn")
let result = [Math.floor(Math.random()*100)+1]

let text=document.querySelector('input');
var msg=document.querySelector('h4')
var count_guess = 1;
function guessNumber(){
    let  guess=text.value
    
    if(count_guess <= 3){
        if(guess < 1 || guess > 100){
            msg.innerHTML = "please enter a number between 1 to 100"
            text.value=''
          }
          else{
            if(guess > result && count_guess >0){
                msg.innerHTML = "You guessed too high"
                count_guess ++;
                text.value=''
               }
             else if(guess < result && count_guess >0){
               msg.innerHTML = "You guessed too low"
               count_guess ++;
               text.value=''
              }
              else{
                msg.innerHTML='Congrats!!..You won,You guessed the number'
                count_guess ++;
                text.value=''
                gameover()
                   
               }
          }
    }else{
        msg.innerHTML = "Game over!! Sorry, your chances are over"
        text.value=''
        gameover()
    }
       
    }


function gameover(){
    button.disabled = true;
    text.disabled = true;
    button.style.backgroundColor='gray'
}
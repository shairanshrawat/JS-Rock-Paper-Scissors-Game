const game =()=>{
    let pScore =0;
    let cScore=0;

    //start the game

    const startGame=()=>{
        const playBtn= document.querySelector('.intro button');

        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');

        });
    };

    //play match

    const playMatch = () => {
        const options = document.querySelectorAll('.options button'); 
        const playerHand= document.querySelector('.player-hand');
        const computerHand= document.querySelector('.computer-hand');
        const hands= document.querySelectorAll('.hands img');
    //    everythime our animation runs it will run then remove everything
        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation ='';
            });
        });
  
      // computer option(we will generator random number and associate with the action)

      const computerOptions=['rock','paper','scissors'];

      options.forEach(option =>{
            option.addEventListener('click', function(){  
                //computer choice
                const computerNumber =Math.floor(Math.random() *3);
                const computerChoice = computerOptions[computerNumber];
                // console.log(computerChoise);    to check in console

                setTimeout(() => {
                    compareHands(this.textContent,computerChoice);

                // update images
                playerHand.src =`./assets/${this.textContent}.png`;
                computerHand.src =`./assets/${computerChoice}.png`;
                    
                }, 2000);
                playerHand.style.animation ='shakePlayer 2s ease';
                computerHand.style.animation ='shakeComputer 2s ease';

            });
      });
      
      //we did *3 bcz math.random will pick up b/w 0 and 1 so *3 it will increase/multiply by that
      //floor is for rounding off the output in console

     //   console.log(computerNumber);
    };
      
    const updateScore =() =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
        // when we will call this fn everyone time we need before return is there in below fn 
        

      
        // we now to remove the animation so to do that 22 line code



    }



    const compareHands =(playerChoice,computerChoice) =>{
            const winner = document.querySelector('.winner');
                // check for tie
            if(playerChoice===computerChoice){
                     winner.textContent='It is tie';
                     return; 
                 }
                //  check for rock
            if(playerChoice==='rock'){
                if(computerChoice==='scissors'){
                    winner.textContent='Player Wins'
                    pScore++;
                    updateScore();
                    return;

                }else{
                    winner.textContent='Computer Wins';
                    cScore++;
                    updateScore();
                    return;
                }
            }

                // check for paper
            if(playerChoice==='paper'){
                if(computerChoice==='scissors'){
                    winner.textContent='Computer Wins';
                    cScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent='Player Wins';
                    pScore++;
                    updateScore();
                    return;
                }
                
            } 
            
            // check for scissors
            if(playerChoice==='scissors'){
                if(computerChoice==='rock'){
                    winner.textContent='Computer Wins';
                    cScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent='Player Wins';
                    pScore++;
                    
                    updateScore();
                    return;
                }
                
            }    
    }
    //call the inner function
    startGame();
    playMatch();
    

};

//Start the game function
game(); 
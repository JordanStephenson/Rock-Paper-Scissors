const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };
//Play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const cpuHand = document.querySelector('.cpu-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand =>{
      hand.addEventListener('animationend', function(){
        this.style.animation = '';
      });
    });

    //Computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option =>{
      option.addEventListener('click', function(){
        //Computer choice
        const computerNum = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNum];

        setTimeout(() =>{
                  //Here we call compare hands
        compareHands(this.textContent, computerChoice);

        //update images
        playerHand.src = `assets/${this.textContent}.png`;
        cpuHand.src = `assets/${computerChoice}.png`; 
        }, 2000);

         playerHand.style.animation = 'shakePlayer 2s ease';
         cpuHand.style.animation = 'shakeComputer 2s ease';
         
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const ComputerScore = document.querySelector('.cpu-score p');
    playerScore.textContent = pScore;
    ComputerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) =>{
    //Update Text
    const winner = document.querySelector('.winner');
    //Checking for tie
     if(playerChoice === computerChoice){
      winner.textContent = 'It is a tie';
      return;
     }        
     //Check for rock
     if(playerChoice === 'rock'){
       if(computerChoice === 'scissors'){
         winner.textContent = 'Player Wins';
         pScore ++;
         updateScore();
         return;
       } else {
         winner.textContent = 'Computer Wins';
         cScore ++;
         updateScore();
         return;
       }
     };
     //Check for paper
     if(playerChoice === 'paper'){
      if(computerChoice === 'rock'){
        winner.textContent = 'Player Wins';
        pScore ++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer Wins';
        cScore ++;
        updateScore();
        return;
      }
    };
    //Check for scissors
    if(playerChoice === 'scissors'){
      if(computerChoice === 'paper'){
        winner.textContent = 'Player Wins';
        pScore ++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer Wins';
        cScore ++;
        updateScore();
        return;
      }
    };

  };


//Calling all inner functions
startGame();
playMatch();

};


//Start the game
game();
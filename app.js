/*
GAME RULES: - popup 

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 50 points on GLOBAL score wins the game

*/

alert("If the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn. The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn. The first player to reach 50 points on GLOBAL score wins the game");


var scores, roundScore, activePlayer, gamePlaying;

init();



document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying) {
            // 1. Rondom nr 
        var dice = Math.floor(Math.random() * 6) + 1; 

        // 2. Display the result 
        var  diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block'; // pt a nu repeta q.Selector
        diceDOM.src = 'dice-' + dice + '.png';


        //3. Update the round score, if the rollerd nr was not 1
        if (dice !== 1) {

            //add score
            roundScore += dice;  //  roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {

            //next player

            /* before: 

            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; ( -> este la fel ca:
            if(activePlayer === 0) {
                activePlayer = 1;
            } else{
                activePlayer = 0;
            }
            )


            roundScore =0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');

            document.querySelector('.dice').style.display= 'none';  */

            nextPlayer(); // DRY 
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
         if (gamePlaying) {
         // Add current score to Global score
         scores[activePlayer] += roundScore;
         // scores[activePlayer] = scores[activePlayer] + roundScore;
         
         // Update the UI 
         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
         
         // Check if player won the game
          if (scores[activePlayer] >= 25) {
              document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
              document.querySelector('.dice').style.display = 'none';
              document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
              document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
              gamePlaying = false;
          } else {          
         // Next Player 
            nextPlayer();
             }
          }
     });


document.querySelector('.btn-new').addEventListener('click', init);
 



 // DRY
     function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore =0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        
        document.querySelector('.dice').style.display= 'none';  
}



    function init(){
     scores = [0,0];
     roundScore = 0;
     activePlayer = 0;   


    //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

    //var x = document.querySelector('#score-0').textContent;
    //console.log(x);  

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');

    /* function btn(){
        //Do smth here
    }

    btn() */
        
    gamePlaying = true;

    }

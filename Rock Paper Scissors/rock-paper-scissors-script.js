// ******************************
// Rock Paper Scissors Game:
// ******************************

/* 
Steps:
  You pick a element
  Then computer randomly pick element
  Then we check if:
  r vs p  --> p win
  r vs s  --> r win
  s vs p --> s win
*/
// Random comp choice function:
function compChoice() {
  // 1: rock  2: paper  3: scissors
  let compChoice = 0; 
  let res = ''; 
  // generating a random number from 1-3
  compChoice = Math.floor(Math.random() * 3) + 1; 
  if (compChoice === 1){
    res = 'Rock'; 
  } else if (compChoice === 2){
    res = 'Paper';
  } else {
    res = 'Scissors'; 
  }
  return res
}

function winner(Pchoice, Cchoice) {
  playerChoice = Pchoice;
  computerChoice = Cchoice; 

  if ((playerChoice === 'Scissors' && computerChoice === 'Rock') || 
  (playerChoice === 'Rock' && computerChoice === 'Paper') || 
  (playerChoice === 'Paper' && computerChoice === 'Scissors')) 
  {
    return 'Computer Won!';

  } else if ((playerChoice === 'Scissors' && computerChoice === 'Paper') || (playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock')) {
    return 'You Won!'; 

  } else if ((playerChoice === 'Scissors' && computerChoice === 'Scissors') || (playerChoice === 'Rock' && computerChoice === 'Rock') || (playerChoice === 'Paper' && computerChoice === 'Paper')) {
    return 'No one won, tie game...'; 
  }

}

console.log('Choose your element.')
// Player choice:
let playerChoice = '';
let computerChoice = '';
document.getElementById("rockBtn").addEventListener("click", function(
){
  playerChoice = 'Rock'; 
  computerChoice = compChoice(); 
  console.log('You: ' + playerChoice); 
  console.log('Computer: ' + computerChoice);

  res = winner(playerChoice, computerChoice); 
  console.log(res);
}); 

document.getElementById("paperBtn").addEventListener("click", function() {
  playerChoice = 'Paper'; 
  computerChoice = compChoice(); 
  console.log('You: ' + playerChoice); 
  console.log('Computer: ' + computerChoice);

  res = winner(playerChoice, computerChoice); 
  console.log(res);
});

document.getElementById("scisBtn").addEventListener("click", function(){
  playerChoice = 'Scissors'; 
  computerChoice = compChoice(); 
  console.log('You: ' + playerChoice); 
  console.log('Computer: ' + computerChoice);

  res = winner(playerChoice, computerChoice); 
  console.log(res);
});

// Now the conditions:







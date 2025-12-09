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

const resultSheet = {
    wins: 0, 
    lose: 0, 
    ties: 0
  }
  // We want to load the saved score 
  // So we should get the item and change it to an JS object
  // And then update the result sheet based on that:
  const savedScore = JSON.parse(localStorage.getItem('score')); 
  
  // Now update the result sheet:
  if (savedScore) {
    resultSheet.lose = savedScore.lose;
    resultSheet.wins = savedScore.wins;
    resultSheet.ties = savedScore.ties;
  }
  
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
  
  // Checks who is the winner based on the 
  // player and computer choice. 
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
  
  // Update the res based on the message, and save the result in the local storage
  function updateResult(res){
    if (res == 'Computer Won!') {
      resultSheet.lose += 1
    } else if (res == 'You Won!') {
      resultSheet.wins += 1
    } else if (res == 'Clear') {
      resultSheet.ties = 0
      resultSheet.wins = 0
      resultSheet.lose = 0
    } else {
      resultSheet.ties += 1
    }
  
    // SAVE SCORE TO LOCAL STORAGE HERE
    localStorage.setItem('score', JSON.stringify(resultSheet));
    console.log("Updated score:", resultSheet);
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
  
    updateResult(res); 
  }); 
  
  document.getElementById("paperBtn").addEventListener("click", function() {
    playerChoice = 'Paper'; 
    computerChoice = compChoice(); 
    console.log('You: ' + playerChoice); 
    console.log('Computer: ' + computerChoice);
  
    res = winner(playerChoice, computerChoice); 
    console.log(res);
  
    updateResult(res); 
  });
  
  document.getElementById("scisBtn").addEventListener("click", function(){
    playerChoice = 'Scissors'; 
    computerChoice = compChoice(); 
    console.log('You: ' + playerChoice); 
    console.log('Computer: ' + computerChoice);
  
    res = winner(playerChoice, computerChoice); 
    console.log(res);
  
    updateResult(res); 
  });
  
  document.getElementById("clearBtn").addEventListener("click", function(){
    updateResult('Clear'); 
  }); 
  
  // Now the conditions:
  
  
  
  
  
  
  
//placeholder word for testing
var word = ["BINARY","BUFFER","SERVER","PACKET","SOCKET","CURSOR","CACHE","THREAD","INPUT","VECTOR"]
var mediumWord = ["ALGORITHM","DATABASE","FIREWALL","COMPILER","DEBUGGER","ENCRYPTION","BANDWIDITH","PROTOCOL","INTERFACE","FRAMEWORK"]
var hardWord = ["MULTITHREADING","CRYPTOGRAPHY","HYPERLINKING","ARTIFICIALLY","MICROPROCESSOR","INTEROPERABLE","CYBERSECURITY","VIRTUALIZATION","COMPUTATIONAL","IMPLEMENTATION"]

let answer = "";
let maxWrong = 5;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
let score = 0;

//takes a random word from the array stored in the variable "word"
function randomWord() {  
  answer = word[Math.floor(Math.random() * word.length)];
  //Using alert to ensure the function is working properly
  //alert(answer);
}

// Function to select a random word from the 'mediumWord' array
function randomWordMedium() {
  answer = mediumWord[Math.floor(Math.random() * mediumWord.length)];
  alert(answer);
}

// Function to select a random word from the 'hardWord' array

function randomWordHard() {
  answer = hardWord[Math.floor(Math.random() * hardWord.length)];
  alert(answer);
}

//Creates the buttons for the user to select a letter
function generateButtons() {
  let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

//navigates to a game page that corresponsds with the difficulty level selected
function pageHandler() {
  if(window.location.pathname.endsWith("easyMode.html")){
    randomWord();
  }
  else if(window.location.pathname.endsWith("mediumMode.html")){
    randomWordMedium();
  }
  else if(window.location.pathname.endsWith("hardmode.html")){
    randomWordHard();
  }
}

//Displays the word with the correct letters guessed
function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

//Handles the user's guess by checking if the letter is in the word
function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  //disables the button after it is clicked
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  //checks if the letter is in the word
  if (answer.indexOf(chosenLetter) >= 0) {
    //if the letter is in the word, the guessed word is updated
    score += 10;
    document.getElementById('score').innerHTML = score;
    
    guessedWord();
    //checks if the game is won
    checkIfGameWon();    
  } 
  //if the letter is not in the word, the mistakes are updated and the hangman picture is updated
  else if(answer.indexOf(chosenLetter) === -1){
    mistakes++;    
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

//Updates the hangman picture by changing the source of the image based on value of mistakes
function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = 'images/' + mistakes + '.png';
}

//Updates the number of mistakes
function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}


//checks if the game is won by comparing the wordStatus to the answer
function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = '<span class="message">You Won!!!</span>';
  }
}

////checks if the game is lost by comparing the number of mistakes to the max number of mistakes
function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = '<span class="message">You Lost!!!</span>';
    score = 0;
    document.getElementById('score').innerHTML = score;
  }
}

//resets the game back to its original state
function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = 'images/0.png';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}


//finds the max wrong section of the html and sets it to the value of maxWrong
document.getElementById('maxWrong').innerHTML = maxWrong;

pageHandler();
//randomWord();
generateButtons();
guessedWord();


console.log('Hello console!');
const max = 100;
const min = 1;
let randomNumber = Math.floor(Math.random() * (max - min) + min);
console.log(randomNumber);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const time = document.querySelector('.time');
const guessCounter = document.querySelector('.guessCounter');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
let startTime;

const checkGuess = () => {
  let userGuess = Number(guessField.value);
  if(guessCount === 1){
    guesses.textContent = 'Previous guesses: ';
    startTime = Date.now();
  }
  guesses.textContent +=userGuess + ' ';

  if(userGuess === randomNumber){
    let stopTime = Date.now();
    let calculus = (stopTime - startTime)/1000;
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    time.textContent = 'Took time to guess right: ' +  calculus + ' sec.';
    guessCounter.textContent = 'It took you '  + guessCount +  ' tries.';
    console.log(calculus);
    console.log(startTime,stopTime);
    setGameOver();
  }else if(guessCount === 10){
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  }else{
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber){
      lowOrHi.textContent = 'Last guess was too low!';
    }else if(userGuess > randomNumber){
      lowOrHi.textContent = 'Last guess wast too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();

};

guessSubmit.addEventListener('click',checkGuess);

const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game!';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click',resetGame);
};

const resetGame = () => {
 guessCount = 1;
 const resetParas = document.querySelectorAll('.resultParas p');
 for(let i = 0;i<resetParas.length; i++){
   resetParas[i].textContent = '';
 }

 resetButton.parentNode.removeChild(resetButton);

 guessField.disabled = false;
 guessSubmit.disabled = false;
 guessField.value = '';
 guessField.focus();

 lastResult.style.backgroundColor = 'white';

 randomNumber = Math.floor(Math.random() * (max - min) + min);

};





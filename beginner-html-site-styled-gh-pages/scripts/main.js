const myHeading = document.querySelector('h1');

let myImage = document.querySelector('img');

let txt = document.querySelector('.arrowText');


// changes the image on every click event
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
      txt.textContent = 'Click the Energy';
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
      txt.textContent = 'Click the Firefox';
    }
}

let alertButton = document.querySelector('.alert');
let promptButton = document.querySelector('.prompt');
let resetButton = document.querySelector('.reset');

alertButton.onclick = function() {
  alert('Hello!');
}


if(localStorage.getItem('name')) {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName;
}

//calls a prompt for username
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(myName == null || myName == "") {
    myName = 'anonymous';
    storedName = localStorage.setItem('name', myName);
  } else {
    storedName = localStorage.setItem('name', myName);
  }
  location.reload();

}

//if on click the name is stored - do nothing, if it is then call the function
promptButton.onclick = function(){
  let c = 1;
  if(!localStorage.getItem('name')) {
    setUserName();
    c++;
  }
  if(localStorage.getItem('name') && c == 1) {
    let myNameNew = prompt('You already have a username. Change it by typing a new one or click cancel.');
    
    if(myNameNew) {
      myName = myNameNew;
    }
  } 
  
  storedName = localStorage.setItem('name', myName);
  location.reload();
}

resetButton.onclick = function(){
  localStorage.clear('name');
  location.reload();
}

//Guess the number game

let rng = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.getElementById('guessField');

let guessCount = 1;
let reset;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if(guessCount === 1) {
    guesses.textContent = 'Guesses: ';
  }
  guesses.textContent += userGuess + '|';

  if(userGuess == rng){
    lastResult.textContent = 'You guessed it!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = ' ';
    setGameOver();
  }
  else if (guessCount == 10) {
    lastResult.textContent = 'Out of tries (10/10)';
    lastResult.style.backgroundColor = 'Red';
    lowOrHi.textContent = "The number was: " + rng;
    setGameOver();
  }
  else {
    lastResult.textContent = 'Wrong! (' + guessCount + '/10)';
    lastResult.style.backgroundColor = 'Red';
    if(userGuess > rng) {
      lowOrHi.textContent = "It's lower";
    }
    if(userGuess < rng) {
      lowOrHi.textContent = "It's higher";
    }
  }
  guessCount++;
  guessField.value = userGuess;
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  let place = document.querySelector('.resetBtn');
  place.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click', checkGuess);

let list = document.querySelectorAll('.listOfNumbers li');
let iniBtn = document.querySelector('.Initialize');
let randomNb;

let iniBtn2 = document.querySelector('.Initialize2');
let liElement;
let liLabel;
let list2 = document.querySelector('.listOfNumbers2');

iniBtn.onclick = function(){
  for(let y = 0; y < list.length; y++) {
    randomNb = Math.floor(Math.random() * 100) + 1;
    list[y].textContent = randomNb;
    list[y].setAttribute('class', 'rgNumbers');
  }
}

const c = 0;
iniBtn2.onclick = function(){
  for(let y = 0; y < 10; y++) {
    randomNb = Math.floor(Math.random() * 100) + 1;
    liElement = document.createElement('li');
    liElement.setAttribute('name','generatedLi');
    liElement.setAttribute('class', 'rgNumbers');
    liElement.textContent = randomNb;
    list2.append(liElement);
  }
}

let delBtn = document.querySelector('.del');

delBtn.onclick = function(){
  var allLiElements = document.getElementsByName('generatedLi');
  while(allLiElements.length > 0) {
    allLiElements[0].remove();
    allLiElements[0].parentNode.removeChild(allLiElements[0]);
  }
}

//================Cloning===================

var item = document.getElementById('fromClone');
var clone = item.cloneNode(true);
var clnButton = document.getElementById('clnButton');

clnButton.onclick = function(){
  document.getElementById('toClone').appendChild(clone);
}
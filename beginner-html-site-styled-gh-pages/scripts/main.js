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
  let c = 0;
  if(!localStorage.getItem('name')) {
    setUserName();
    c++;
  }
  if(c == 0) {
    let myNameNew = prompt('You already have a username. Change it by typing a new one or click cancel.'); 
    c++;
  }  if(nyNameNew == 'no' || nyNameNew == 'No' || nyNameNew == 'nO' || nyNameNew == 'NO' || myNameNew == null) {
    myNameNew = storedName;
  } 
  myName = myNameNew;
  storedName = localStorage.setItem('name', myName);
  location.reload();
}

resetButton.onclick = function(){
  localStorage.clear('name');
  location.reload();
}
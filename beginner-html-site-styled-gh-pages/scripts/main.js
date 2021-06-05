const myHeading = document.querySelector('h1');

let myImage = document.querySelector('img');

let txt = document.querySelector('.arrowText');

//if namee is already stored, sets it into the first heading
if(localStorage.getItem('name')) {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName;
}

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

alertButton.onclick = function() {
  alert('Hello!');
}

//calls a prompt for username
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    myName = 'anonymous';
  } else {
    localStorage.setItem('name', myName);
  }
  
  //myHeading.textContent = 'Hello, ' + myName;
}

//if on click the name is stored - do nothing, if it is then call the function
promptButton.onclick = function(){
  if(!localStorage.getItem('name')) {
    setUserName();
  } else{
    let myNameNew = prompt('You already have a username. Do you want to change it?');
    if(myNameNew !== 'no' || myNameNew != 'No' || myNameNew != 'NO'){
      myName = myNameNew;
      storedName = localStorage.setItem('name', myName);
      myHeading.textContent = 'Hello, ' + storedName;
    }

  }
}

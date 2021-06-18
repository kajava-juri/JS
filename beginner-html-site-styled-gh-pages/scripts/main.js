const myHeading = document.querySelector('h1');

let myImage = document.querySelector('img');

let txt = document.querySelector('.arrowText');


// changes the image on every click event
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
      //txt.textContent = 'Click the Energy';
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
      //txt.textContent = 'Click the Firefox';
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
  myHeading.innerHTML = 'Hello, ' + storedName;
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
  //location.reload();

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



//================Cloning===================

var item = document.getElementById('fromClone');
var clone = item.cloneNode(true);
var clnButton = document.getElementById('clnButton');

clnButton.onclick = function(){
  document.getElementById('toClone').appendChild(clone);
}

//==================Countries===========================

const countries = document.querySelector('.countries');
var countriesCount = countryList.length;
let countryElement;

for(let i = 0; i < countriesCount; i++){
    countryElement = document.createElement('option');
    countryElement.setAttribute('value', countryList[i]);
    countryElement.textContent = countryList[i];
    countries.append(countryElement);
}


const saveCountry = document.getElementById('setCountry');

if(document.getElementById('userCountry').getAttribute('value') == null && localStorage.getItem('country')){
  document.getElementById('userCountry').textContent = 'from ' + localStorage.getItem('country');
}

saveCountry.onclick = function(){
  if(document.getElementById('userCountry').getAttribute('value') == null){
    document.getElementById('userCountry').setAttribute('value', 'Afghanistan');
    let q = true;
  }
  let userCountry = document.getElementById('userCountry').getAttribute('value');
  localStorage.setItem('country', userCountry)
  if(q){
    location.reload();
    q = false;
  }
}

var countriesCount = countryList.length;
let countryElement;
const listOfCountries = document.querySelector('.lisOfCountries')
function cntrBtn(){
    for(let i = 0; i < countriesCount; i++){
        countryElement = document.createElement('li');
        countryElement.setAttribute('name', 'generatedcntr')
        countryElement.textContent = countryList[i];
        listOfCountries.append(countryElement);
    }

}

let cdelBtn = document.querySelector('.cdel');

cdelBtn.onclick = function(){
  var allcntrElements = document.getElementsByName('generatedcntr');
  while(allcntrElements.length > 0) {
    allcntrElements[0].remove();
    allcntrElements[0].parentNode.removeChild(allcntrElements[0]);
  }
}

//========================================================

const main = document.getElementById('main');

var myVar = setInterval(checkIsAdded, 5000);

function checkIsAdded(){
  let hh = localStorage.getItem('isAdded');
  console.log(localStorage.getItem('isAdded'));
  if(hh == 1){
    localStorage.setItem('isAdded', 0);
    location.reload();
  }
  
}

setResults();

function setResults(){
  let results = localStorage.getItem('results');
  let obj = JSON.parse(results);

  
  for(let i = 0; i < obj.result.length; i++){
    line = document.createElement('hr');
    resultDiv = document.createElement('div');
    resultDiv.setAttribute('id', i + 1);
    resultElementGU = document.createElement('p');
    resultElementLA = document.createElement('p');
    resultElementLO = document.createElement('p');
    sessionNumber = document.createElement('h1');

    sessionNumber.textContent = i + 1;
    resultElementGU.textContent = obj.result[i].guess;
    resultElementLA.textContent = obj.result[i].result;
    resultElementLO.textContent = obj.result[i].number;

    main.append(resultDiv);
    resultDiv.append(sessionNumber);
    resultDiv.append(resultElementGU);
    resultDiv.append(resultElementLA);
    resultDiv.append(resultElementLO);
    resultDiv.append(line);
  }

  
}

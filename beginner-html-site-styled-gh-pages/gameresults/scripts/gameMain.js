const txt = document.querySelector('.place');
//alert(mydata.name);
//jsonName = mydata.name;
//txt.textContent = jsonName;

var countriesCount = countryList.length;
let countryElement;
const listOfCountries = document.querySelector('.lisOfCountries')
let cntrBtn = document.querySelector('.countryButton');
cntrBtn.onclick = function(){
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


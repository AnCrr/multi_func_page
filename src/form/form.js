var btnStepOneNext = document.getElementById('StepOneNext');
var stepOneContainer = document.getElementById('StepOneContainer');
var stepTwoContainer = document.getElementById('StepTwoContainer');
var btnStepTwoPrevious = document.getElementById('StepTwoPrevious');
var btnStepTwoNext = document.getElementById('StepTwoNext');
var stepThreeContainer = document.getElementById('StepThreeContainer');
var btnStepThreePrevious = document.getElementById('StepThreePrevious');
var successContainer = document.getElementById('SuccessContainer');
var btnStepThreeSubmit = document.getElementById('StepThreeSubmit');
var contactError = document.getElementById('contact_error');
var cityError = document.getElementById('city_error');
var countryError = document.getElementById('country_error');
var inputContact = document.getElementById('contact');
var inputCity = document.getElementById('city');
var inputCountry = document.getElementById('country');

var currentInputContactValue = '';
inputContact.addEventListener('input', function(a){
    currentInputContactValue = a.target.value;
})

var currentInputCityValue = '';
inputContact.addEventListener('input', function(b){
    currentInputCityValue = b.target.value;
})

var currentInputCountryValue = '';
inputCountry.addEventListener('input', function(c){
    currentInputCountryValue = c.target.value;
})

btnStepOneNext.addEventListener('click', function(){
  stepOneContainer.style.display = 'none';
  stepTwoContainer.style.display = 'block';
})

// как объединить два следующих обработчика?
 btnStepTwoPrevious.addEventListener('click', function(){
  if(currentInputContactValue !== undefined && currentInputContactValue !== 0 && currentInputContactValue !== ''){
  stepOneContainer.style.display = 'block';
  stepTwoContainer.style.display = 'none';
  }
    else {
    contactError.style.display = 'block';  
    stepOneContainer.style.display = 'none';
    stepTwoContainer.style.display = 'block';     
   }
 })

 btnStepTwoPrevious.addEventListener('click', function(){
  if(currentInputCountryValue !== undefined && currentInputCountryValue !== 0 && currentInputCountryValue !== ''){
  stepOneContainer.style.display = 'block';
  stepTwoContainer.style.display = 'none';
  }
    else {
    countryError.style.display = 'block';    
    stepOneContainer.style.display = 'none';
    stepTwoContainer.style.display = 'block';   
   }
 })

btnStepTwoNext.addEventListener('click', function(){
  stepThreeContainer.style.display = 'block';
  stepTwoContainer.style.display = 'none';
})

btnStepThreePrevious.addEventListener('click', function(){
  stepThreeContainer.style.display = 'none';
  stepTwoContainer.style.display = 'block';
})

btnStepThreeSubmit.addEventListener('click', function(){
  stepThreeContainer.style.display = 'none';
  successContainer.style.display = 'flex';
})


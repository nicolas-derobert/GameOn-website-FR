function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // formulaire
const modalBtn = document.querySelectorAll(".modal-btn"); // Button to launch modal
const closeBtn = document.querySelector(".close"); // Button to close modal
const submitBtn = document.querySelector(".btn-submit"); // Button to close modal
const formData = document.querySelectorAll(".formData");
const firstElement = document.getElementById('first');
const lastElement = document.getElementById('last');
const emailElement = document.getElementById('email');
const birthdateElement = document.getElementById('birthdate');
const quantityElement = document.getElementById('quantity');
const locationRadioElement = document.querySelectorAll('input[type="radio"]');
const lastLocationElement = document.querySelector("#location6 + label");
const checkbox1Element = document.getElementById('checkbox1');
const lastCheckboxElement = document.querySelector(".checkbox2-label");
// const btnSubmitElement = document.querySelector('.btn-submit');
const contentElement = document.querySelector('.hero-content');
const imgElement = document.querySelector('.hero-img');
const modalbgConfirmation = document.querySelector(".bground-confirmation"); // formulaire
const closeBtnConfirmation = document.querySelector(".btn-close-confirmation"); // Button to close modal

var errorOnFirstElement = false;
var errorOnLastElement = false;
var errorOnEmailElement = false;
var errorOnQuantityElement = false;
var errorOnBirthdateElement = false;
var errorOnLocationElement = false;
var errorOnAcceptationElement = false;

var FirstElementValue = "";
var LastElementValue = "";
var EmailElementValue = "";
var QuantityElementValue = "";
var BirthdateElementValue = "";;
var radioButtonValue ="";
var LocationElementValue;
var AcceptationElementValue;

//FUNCTION 
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
function closeModal() {
  modalbg.style.display = "none";
}
// launch modal confirmation form
function launchModalconfirmation() {
  modalbgConfirmation.style.display = "block";
}
// close modal confirmation event
function closeModalconfirmation() {
  modalbgConfirmation.style.display = "none";
}

//TEST
//email validation
function TestEmailElementValidity(input) {
  var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
function TestFirstElementValidity(value) { 
  if( value.length > 2 )
  {
    return true;
  }
  else
  {
    return false;
  }
}
function TestLastElementValidity(value) { 
  if( value.length > 2 )
  {
    return true;
  }
  else
  {
    return false;
  }
}
function TestBirthdateElementValidity(value) { 
  if( value.length > 7 )
  {
    return true;
  }
  else
  {
    return false;
  }
}
function TestQuantityElementValidity(value) { 
  console.log(value);
    console.log("Test de passage");
  if(typeof value == 'number' || value =="" )
  {
    return false;
  }
  else
  {
    return true;
  }
}
function TestLocationElementValidity(checkboxvalue) { 
if (checkboxvalue!="")
{
   return true;
}
else{
   return false;
}
}
function TestAcceptationElementValidity() { 
  if( checkbox1Element.checked )
  {
    return true;
  }
  else
  {
    return false;
  }
}
//Exécution du bon afficage des messages d'erreur
function DisplayErrorMessage(testResult,ElementToModify,ErrorMessageToDisplay) { 
  ErrorMessageToDisplay.style.display="none";
  if( testResult)
  {
    ElementToModify.classList.remove("error-signal-input");
  }
  else
  {
    ErrorMessageToDisplay.style.display="block";
    ElementToModify.classList.add("error-signal-input");
  }
  }



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener('click', (e) => { closeModal()});

// close modal confirmation event
closeBtnConfirmation.addEventListener('click', (e) => { closeModalconfirmation()});


// CREATION DE TOUS LES MESSAGES D'ERREUR
//Création du champs erreur (1):
let errorMessageFirstElement = document.createElement('div') ;
errorMessageFirstElement.textContent = "Vous devez saisir plus de deux caractères !";
firstElement.after(errorMessageFirstElement);
errorMessageFirstElement.className = "error-message-style";
errorMessageFirstElement.style.display="none";

//Création du champs erreur (2):
let errorMessageLastElement = document.createElement('div') ;
errorMessageLastElement.textContent = "Vous devez saisir plus de deux caractères !";
lastElement.after(errorMessageLastElement);
errorMessageLastElement.className = "error-message-style";
errorMessageLastElement.style.display="none";

//Création du champs erreur  (3):
let errorMessageEmailElement = document.createElement('div') ;
errorMessageEmailElement.textContent = "L'adresse email n'est pas valide !";
emailElement.after(errorMessageEmailElement);
errorMessageEmailElement.className = "error-message-style";
errorMessageEmailElement.style.display="none";

//Création du champs erreur  (4):
let errorMessageQuantityElement = document.createElement('div') ;
errorMessageQuantityElement.textContent = "Ceci n'est pas un nombre ! Réessayez !";
quantityElement.after(errorMessageQuantityElement);
errorMessageQuantityElement.className = "error-message-style";
errorMessageQuantityElement.style.display="none";

//Création du champs erreur  (5):
let errorMessageLastLocationElement = document.createElement('div') ;
errorMessageLastLocationElement.textContent = "Veuillez sélectionner une ville !";
lastLocationElement.after(errorMessageLastLocationElement);
errorMessageLastLocationElement.className = "error-message-style";
errorMessageLastLocationElement.style.display="none";

//Création du champs erreur  (6):
let errorMessagecheckbox1Element = document.createElement('div') ;
errorMessagecheckbox1Element.textContent = "Veuillez accepter les conditions d'utilisation !";
lastCheckboxElement.after(errorMessagecheckbox1Element);
errorMessagecheckbox1Element.className = "error-message-style";
errorMessagecheckbox1Element.style.display="none";

//Création du champs erreur (7):
let errorMessageBirthdateElement = document.createElement('div') ;
errorMessageBirthdateElement.textContent = "Vous devez une date de naissance";
birthdateElement.after(errorMessageBirthdateElement);
errorMessageBirthdateElement.className = "error-message-style";
errorMessageBirthdateElement.style.display="none";

//EVENEMENTS
//(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
firstElement.addEventListener('change', (e) => { 
FirstElementValue = e.target.value;
DisplayErrorMessage(TestFirstElementValidity(FirstElementValue),firstElement,errorMessageFirstElement) 
});

// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
lastElement.addEventListener('change', (e) => { 
  LastElementValue= e.target.value;
  DisplayErrorMessage(TestLastElementValidity(LastElementValue),lastElement,errorMessageLastElement) 
});


// (3) L'adresse électronique est valide.
emailElement.addEventListener('change', (e) => { 
EmailElementValue = e.target.value;
DisplayErrorMessage(TestEmailElementValidity(EmailElementValue),emailElement,errorMessageEmailElement) 
});
    

// (4) Pour le nombre de concours, une valeur numérique est saisie.
  quantityElement.addEventListener('change', (e) => { 
  QuantityElementValue = e.target.value;
  console.log(QuantityElementValue)  ;
  DisplayErrorMessage(TestQuantityElementValidity(QuantityElementValue),quantityElement,errorMessageQuantityElement) 
  });
  // quantityElement.addEventListener('FocusEvent', (e) => { 
  //   QuantityElementValue = e.target.value;
  //   console.log(QuantityElementValue)  ;
  //   DisplayErrorMessage(TestQuantityElementValidity(QuantityElementValue),quantityElement,errorMessageQuantityElement) 
  //   });





// (5) Pour la ville, une valeur numérique est saisie.
locationRadioElement.forEach((elem) => { elem.addEventListener("change", function (event) { 
  radioButtonValue = event.target.value;
  DisplayErrorMessage(TestLocationElementValidity(radioButtonValue),lastLocationElement,errorMessageLastLocationElement)
}
)});



// locationRadioElement.addEventListener('change', (e) => { 
// DisplayErrorMessage(TestLocationElementValidity(),lastLocationElement,errorMessageLastLocationElement) 
// });

// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
checkbox1Element.addEventListener('change', (e) => { 
let value = e.target.value;
DisplayErrorMessage(TestAcceptationElementValidity(),lastCheckboxElement,errorMessagecheckbox1Element) 

});


// (7) Date de naissance
birthdateElement.addEventListener('change', (e) => { 
  BirthdateElementValue= e.target.value;
  DisplayErrorMessage(TestBirthdateElementValidity(BirthdateElementValue),birthdateElement,errorMessageBirthdateElement) 
});

// Création modal de validation

submitBtn.addEventListener('click', (e) => { 
  e.preventDefault();

  //Lancement de toutes les vérification et affichages des éventuels messages d'erreurs
  DisplayErrorMessage(TestFirstElementValidity(FirstElementValue),firstElement,errorMessageFirstElement) 
  DisplayErrorMessage(TestLastElementValidity(LastElementValue),lastElement,errorMessageLastElement) 
  DisplayErrorMessage(TestEmailElementValidity(EmailElementValue),emailElement,errorMessageEmailElement) 
  DisplayErrorMessage(TestQuantityElementValidity(QuantityElementValue),quantityElement,errorMessageQuantityElement) 
  DisplayErrorMessage(TestLocationElementValidity(radioButtonValue),lastLocationElement,errorMessageLastLocationElement) 
  DisplayErrorMessage(TestAcceptationElementValidity(),lastCheckboxElement,errorMessagecheckbox1Element) 
  DisplayErrorMessage(TestBirthdateElementValidity(BirthdateElementValue),birthdateElement,errorMessageBirthdateElement) 

  // console.log(FirstElementValue)  ;
  // console.log(TestFirstElementValidity(FirstElementValue))  ;
  // console.log(LastElementValue)  ;
  // console.log(TestLastElementValidity(LastElementValue))  ;
  // console.log(EmailElementValue)  ;
  // console.log(TestEmailElementValidity(EmailElementValue))  ;
  // console.log(BirthdateElementValue)  ;
  // console.log(TestBirthdateElementValidity(BirthdateElementValue))  ;
  // console.log(QuantityElementValue)  ;
  // console.log(TestQuantityElementValidity(QuantityElementValue))  ;
  // console.log(TestLocationElementValidity())  ;
  // console.log(TestAcceptationElementValidity())  ;



  if(TestFirstElementValidity(FirstElementValue) && TestLastElementValidity(LastElementValue) && TestEmailElementValidity(EmailElementValue) && TestQuantityElementValidity(QuantityElementValue) && TestBirthdateElementValidity(BirthdateElementValue) && TestLocationElementValidity() && TestAcceptationElementValidity())
  {
    closeModal();
    launchModalconfirmation();
    console.log("Il y a pas d'erreur")  ;
  }
  else
  {    //Vérifier les message d'erreur des champs
console.log("Il y a une erreur")  ;
  }
  });

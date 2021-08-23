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
const formData = document.querySelectorAll(".formData");
const firstElement = document.getElementById('first');
const lastElement = document.getElementById('last');
const emailElement = document.getElementById('email');
const quantityElement = document.getElementById('quantity');
const lastLocationElement = document.querySelector("#location6 + label");
const checkbox1Element = document.getElementById('checkbox1');
const lastCheckboxElement = document.querySelector(".checkbox2-label");
const btnsubmitElement = document.getElementById('btn-submit');

//FUNCTION 
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
function closeModal() {
  modalbg.style.display = "none";
}
//email validation
function ValidateEmail(input) {
  var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener('click', (e) => { closeModal()});

//Création du champs erreur (1):
let errorMessageFirstElement = document.createElement('div') ;
errorMessageFirstElement.textContent = "Vous devez saisir plus de deux caractères !";
firstElement.after(errorMessageFirstElement);
errorMessageFirstElement.className = "error-message-style";
errorMessageFirstElement.style.display="none";

//(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
firstElement.addEventListener('change', (e) => { 
let value = e.target.value;
errorMessageFirstElement.style.display="none";
if( value.length > 2 )
{
  firstElement.classList.remove("error-signal-input");
}
else
{
errorMessageFirstElement.style.display="block";
firstElement.classList.add("error-signal-input");
}
});

//Création du champs erreur (2):
let errorMessageLastElement = document.createElement('div') ;
errorMessageLastElement.textContent = "Vous devez saisir plus de deux caractères !";
lastElement.after(errorMessageLastElement);
errorMessageLastElement.className = "error-message-style";
errorMessageLastElement.style.display="none";
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
lastElement.addEventListener('change', (e) => { 
  let value = e.target.value;
  errorMessageLastElement.style.display="none";
  if( value.length > 2 )
  {
    lastElement.classList.remove("error-signal-input");
  }
    else
  {
    errorMessageLastElement.style.display="block";
    lastElement.classList.add("error-signal-input");
  }
});

//Création du champs erreur  (3):
    let errorMessageEmailElement = document.createElement('div') ;
    errorMessageEmailElement.textContent = "L'adresse email n'est pas valide !";
    emailElement.after(errorMessageEmailElement);
    errorMessageEmailElement.className = "error-message-style";
    errorMessageEmailElement.style.display="none";
    // (3) L'adresse électronique est valide.
      emailElement.addEventListener('change', (e) => { 
      let value = e.target.value;
      errorMessageEmailElement.style.display="none";
      if(ValidateEmail(value))
      {
        emailElement.classList.remove("error-signal-input");
      }
      else
      {
      errorMessageEmailElement.style.display="block";
      emailElement.classList.add("error-signal-input");
      }
      });
    
//Création du champs erreur  (4):
let errorMessageQuantityElement = document.createElement('div') ;
errorMessageQuantityElement.textContent = "Ceci n'est pas un nombre ! Réessayez !";
quantityElement.after(errorMessageQuantityElement);
errorMessageQuantityElement.className = "error-message-style";
errorMessageQuantityElement.style.display="none";
// (4) Pour le nombre de concours, une valeur numérique est saisie.
  quantityElement.addEventListener('change', (e) => { 
  let value = e.target.value;
  errorMessageQuantityElement.style.display="none";
  if(isNaN(value))
  {
    quantityElement.classList.remove("error-signal-input");
  }
  else
  {
  errorMessageQuantityElement.style.display="block";
  quantityElement.classList.add("error-signal-input");
  }
  });




//Création du champs erreur  (5):
let errorMessageLastLocationElement = document.createElement('div') ;
errorMessageLastLocationElement.textContent = "Veuillez sélectionner une ville !";
lastLocationElement.after(errorMessageLastLocationElement);
errorMessageLastLocationElement.className = "error-message-style";
errorMessageLastLocationElement.style.display="none";
// (5) Pour le nombre de concours, une valeur numérique est saisie.
lastLocationElement.addEventListener('change', (e) => { 
let value = e.target.value;
var radios = document.querySelectorAll('input[type="radio"]:checked');
errorMessageLastLocationElement.style.display="none";
if(radios.length>0)
{
lastLocationElement.classList.remove("error-signal-input");
}
else
{
errorMessageLastLocationElement.style.display="block";
lastLocationElement.classList.add("error-signal-input");
}
});


//Création du champs erreur  (6):

let errorMessagecheckbox1Element = document.createElement('div') ;
errorMessagecheckbox1Element.textContent = "Veuillez accepter les conditions d'utilisation !";
lastCheckboxElement.after(errorMessagecheckbox1Element);
errorMessagecheckbox1Element.className = "error-message-style";
errorMessagecheckbox1Element.style.display="none";
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
checkbox1Element.addEventListener('change', (e) => { 
let value = e.target.value;
errorMessagecheckbox1Element.style.display="none";
if(checkbox1Element.checked)
{
lastLocationElement.classList.remove("error-signal-input");
}
else
{
  errorMessagecheckbox1Element.style.display="block";
lastLocationElement.classList.add("error-signal-input");
}
});
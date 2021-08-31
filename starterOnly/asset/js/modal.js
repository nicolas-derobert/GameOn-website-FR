

// DOM Elements
const modalbg = document.querySelector(".bground"); // formulaire
const modalBtn = document.querySelectorAll(".modal-btn"); // Button to launch modal
const modalBody = document.querySelector("div.modal-body>form"); // Button to launch modal
const closeBtn = document.querySelector(".close"); // Button to close modal
const submitBtn = document.querySelector(".btn-submit"); // Button to close modal
const formData = document.querySelectorAll(".formData");
const firstElement = document.getElementById("first");
const lastElement = document.getElementById("last");
const emailElement = document.getElementById("email");
const birthdateElement = document.getElementById("birthdate");
const quantityElement = document.getElementById("quantity");
const locationRadioElement = document.querySelectorAll('input[type="radio"]');
const lastLocationElement = document.querySelector("#location6 + label");
const checkbox1Element = document.getElementById("checkbox1");
const lastCheckboxElement = document.querySelector(".checkbox2-label");
const contentElement = document.querySelector(".hero-content");
const imgElement = document.querySelector(".hero-img");
const modalbgConfirmation = document.querySelector(".bground-confirmation"); // formulaire
const closeBtnConfirmation = document.querySelector(".btn-close-confirmation"); // Button to close modal

// Input values
var FirstElementValue = "";
var LastElementValue = "";
var EmailElementValue = "";
var QuantityElementValue = "";
var BirthdateElementValue = "";
var radioButtonValue = "";
var LocationElementValue;
var AcceptationElementValue;

//FUNCTIONS
//Responsive function
function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
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

//ALL FUNCTION THAT ARE NEEDED TO TEST INPUT VALIDITY
//FirstElement
function TestFirstElementValidity(value) {
	if (value.length > 2) {
		return true;
	} else {
		return false;
	}
}
// LastElement
function TestLastElementValidity(value) {
	if (value.length > 2) {
		return true;
	} else {
		return false;
	}
}
//email validation
function TestEmailElementValidity(input) {
	var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if (input.match(validRegex)) {
		return true;
	} else {
		return false;
	}
}
// BirthdateElement
function TestBirthdateElementValidity(value) {
  if (value.length > 7) {
    return true;
	} else {
		return false;
	}
}
// QuantityElement
function TestQuantityElementValidity(value) {
	if (typeof value == "number" || value == "") {
		return false;
	} else {
		return true;
	}
}
// LocationElement
function TestLocationElementValidity(checkboxvalue) {
	if (checkboxvalue != "") {
		return true;
	} else {
		return false;
	}
}
// AcceptationElement
function TestAcceptationElementValidity() {
	if (checkbox1Element.checked) {
		return true;
	} else {
		return false;
	}
}
//Function to display appropriate message
function DisplayErrorMessage(
	testResult,
	ElementToModify,
	ErrorMessageToDisplay
) {
	ErrorMessageToDisplay.style.display = "none";
	if (testResult) {
		ElementToModify.classList.remove("error-signal-input");
	} else {
		ErrorMessageToDisplay.style.display = "block";
		ElementToModify.classList.add("error-signal-input");
	}
}

// EVENTLISTENER
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", (e) => {
	closeModal();
});

// close modal confirmation event
closeBtnConfirmation.addEventListener("click", (e) => {
	closeModalconfirmation();
});

// PART  CREATION OF ALL ERROR MESSAGE + DISPLAY NONE
//Global error merssage
let errorMessageGlobal = document.createElement("div");
errorMessageGlobal.textContent =
	"Veuillez corriger les erreurs indiquées ci-dessous.";
modalBody.before(errorMessageGlobal);
errorMessageGlobal.className = "error-message-global-style";
errorMessageGlobal.style.display = "none";

//Error message for First (1)
let errorMessageFirstElement = document.createElement("div");
errorMessageFirstElement.textContent =
	"Vous devez saisir plus de deux caractères !";
firstElement.after(errorMessageFirstElement);
errorMessageFirstElement.className = "error-message-style";
errorMessageFirstElement.style.display = "none";

//Error message for Last (2)
let errorMessageLastElement = document.createElement("div");
errorMessageLastElement.textContent =
	"Vous devez saisir plus de deux caractères !";
lastElement.after(errorMessageLastElement);
errorMessageLastElement.className = "error-message-style";
errorMessageLastElement.style.display = "none";

//Error message for Email (3)
let errorMessageEmailElement = document.createElement("div");
errorMessageEmailElement.textContent = "L'adresse email n'est pas valide !";
emailElement.after(errorMessageEmailElement);
errorMessageEmailElement.className = "error-message-style";
errorMessageEmailElement.style.display = "none";

//Error message for Quantity (4)
let errorMessageQuantityElement = document.createElement("div");
errorMessageQuantityElement.textContent =
	"Ceci n'est pas un nombre ! Réessayez !";
quantityElement.after(errorMessageQuantityElement);
errorMessageQuantityElement.className = "error-message-style";
errorMessageQuantityElement.style.display = "none";

//Error message for Birthdate (5)
let errorMessageBirthdateElement = document.createElement("div");
errorMessageBirthdateElement.textContent = "Vous devez une date de naissance";
birthdateElement.after(errorMessageBirthdateElement);
errorMessageBirthdateElement.className = "error-message-style";
errorMessageBirthdateElement.style.display = "none";

//Error message for Location (6)
let errorMessageLastLocationElement = document.createElement("div");
errorMessageLastLocationElement.textContent =
	"Veuillez sélectionner une ville !";
lastLocationElement.after(errorMessageLastLocationElement);
errorMessageLastLocationElement.className = "error-message-style";
errorMessageLastLocationElement.style.display = "none";

//Error message for Acceptation (7)
let errorMessagecheckbox1Element = document.createElement("div");
errorMessagecheckbox1Element.textContent =
	"Veuillez accepter les conditions d'utilisation !";
lastCheckboxElement.after(errorMessagecheckbox1Element);
errorMessagecheckbox1Element.className = "error-message-style";
errorMessagecheckbox1Element.style.display = "none";



//EVENEMENTS
//(1) First
firstElement.addEventListener("change", (e) => {
	FirstElementValue = e.target.value;
	DisplayErrorMessage(
		TestFirstElementValidity(FirstElementValue),
		firstElement,
		errorMessageFirstElement
	);
});

// (2) Last
lastElement.addEventListener("change", (e) => {
	LastElementValue = e.target.value;
	DisplayErrorMessage(
		TestLastElementValidity(LastElementValue),
		lastElement,
		errorMessageLastElement
	);
});

// (3) Email
emailElement.addEventListener("change", (e) => {
	EmailElementValue = e.target.value;
	DisplayErrorMessage(
		TestEmailElementValidity(EmailElementValue),
		emailElement,
		errorMessageEmailElement
	);
});
// (4) Birthdate
birthdateElement.addEventListener("change", (e) => {
	BirthdateElementValue = e.target.value;
	DisplayErrorMessage(
		TestBirthdateElementValidity(BirthdateElementValue),
		birthdateElement,
		errorMessageBirthdateElement
	);
});
// (5) Quantity
quantityElement.addEventListener("change", (e) => {
	QuantityElementValue = e.target.value;
	DisplayErrorMessage(
		TestQuantityElementValidity(QuantityElementValue),
		quantityElement,
		errorMessageQuantityElement
	);
});

// (6) Location
locationRadioElement.forEach((elem) => {
	elem.addEventListener("change", function (event) {
		radioButtonValue = event.target.value;
		DisplayErrorMessage(
			TestLocationElementValidity(radioButtonValue),
			lastLocationElement,
			errorMessageLastLocationElement
		);
	});
});

// (7) Acceptation of condition
checkbox1Element.addEventListener("change", (e) => {
	let value = e.target.value;
	DisplayErrorMessage(
		TestAcceptationElementValidity(),
		lastCheckboxElement,
		errorMessagecheckbox1Element
	);
});



// Submission 
submitBtn.addEventListener("click", (e) => {
// The following code check all input value and dispolay appropriate message
	DisplayErrorMessage(
		TestFirstElementValidity(FirstElementValue),
		firstElement,
		errorMessageFirstElement
	);
	DisplayErrorMessage(
		TestLastElementValidity(LastElementValue),
		lastElement,
		errorMessageLastElement
	);
	DisplayErrorMessage(
		TestEmailElementValidity(EmailElementValue),
		emailElement,
		errorMessageEmailElement
	);
	DisplayErrorMessage(
		TestQuantityElementValidity(QuantityElementValue),
		quantityElement,
		errorMessageQuantityElement
	);
	DisplayErrorMessage(
		TestLocationElementValidity(radioButtonValue),
		lastLocationElement,
		errorMessageLastLocationElement
	);
	DisplayErrorMessage(
		TestAcceptationElementValidity(),
		lastCheckboxElement,
		errorMessagecheckbox1Element
	);
	DisplayErrorMessage(
		TestBirthdateElementValidity(BirthdateElementValue),
		birthdateElement,
		errorMessageBirthdateElement
	);

  //CONSOLE LOG A DISPOITION POUR FAIRE DES TESTS
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

  // Code pour tester les input et déclencher les messages d'erreur si besoin 
	errorMessageGlobal.style.display = "none";
	if (
		TestFirstElementValidity(FirstElementValue) &&
		TestLastElementValidity(LastElementValue) &&
		TestEmailElementValidity(EmailElementValue) &&
		TestQuantityElementValidity(QuantityElementValue) &&
		TestBirthdateElementValidity(BirthdateElementValue) &&
		TestLocationElementValidity() &&
		TestAcceptationElementValidity()
	) {
		closeModal();
		launchModalconfirmation();
	} else {
		e.preventDefault();
		errorMessageGlobal.style.display = "block";
	}
});

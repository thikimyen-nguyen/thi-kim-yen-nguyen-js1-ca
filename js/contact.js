const form = document.querySelector("form");
const inputName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const nameError =  document.querySelector("#nameError");
const subjectError =  document.querySelector("#subjectError");
const emailError =  document.querySelector("#emailError");
const addressError =  document.querySelector("#addressError");
const submitFormSuccess = document.querySelector(".submit_success");

function validateForm(event) {
    event.preventDefault();
   
    validateName(inputName);
    validateSubject(subject);
    validateEmail(email);
    validateAddress(address);

    if (validateName(inputName) && validateSubject(subject) && validateEmail(email) && validateAddress(address)) {
        // form.reset();
        submitFormSuccess.innerHTML += `<div>Your form was passed validation.</div>`;
    }
}

function validateName(inputName) {
    if (inputName.value.trim().length > 0) {
        nameError.style.display = "none";
        return true;
    } else {
        nameError.style.display = "block";
        return false;
    }
    
}
function validateSubject(subject) {
    if (subject.value.trim().length > 9) {
        subjectError.style.display = "none";
        return true;
    } else {
        subjectError.style.display = "block";
        return false;
    }
    
}
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email.value);
    if (patternMatches === true) {
        emailError.style.display = "none";
        return true;
    } else {
        emailError.style.display = "block";
        return false;
    }
    
}
function validateAddress(address) {
    if (address.value.trim().length > 24) {
        addressError.style.display = "none";
        return true;
    } else {
        addressError.style.display = "block";
        return false;
    }
   
}

form.addEventListener("submit", validateForm);

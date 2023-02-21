const form = document.querySelector("form");
const inputName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const nameError =  document.querySelector("#nameError");
const subjectError =  document.querySelector("#subjectError");
const emailError =  document.querySelector("#emailError");
const addressError =  document.querySelector("#addressError");

function validateForm(event) {
    event.preventDefault();

    if (inputName.value.trim().length > 0) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (subject.value.trim().length > 9) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (address.value.trim().length > 24) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

}
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
  }

form.addEventListener("submit", validateForm);


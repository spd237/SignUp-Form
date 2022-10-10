"use strict";

const form = document.querySelector(".form");
const claimTrialBtn = document.querySelector(".claim-trial-btn");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

claimTrialBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameVal = firstName.value.trim();
  const lastNameVal = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  if (firstNameVal === "") {
    errorFunc(firstName, "First Name cannot be empty");
  } else {
    removeError(firstName);
  }
  if (lastNameVal === "") {
    errorFunc(lastName, "Last Name cannot be empty");
  } else {
    removeError(lastName);
  }
  if (emailVal === "" || !isValid(emailVal)) {
    errorFunc(email, "Looks like this isn't an email");
  } else {
    removeError(email);
  }
  if (passwordVal === "") {
    errorFunc(password, "Password canot be empty");
  } else {
    removeError(password);
  }
}

function errorFunc(inpField, message) {
  const span = inpField.parentNode.querySelector("span");
  span.innerText = message;
  span.style.opacity = "1";
  const icon = inpField.parentNode.querySelector("img");
  icon.style.opacity = "1";
  inpField.classList.add("error");
}

function removeError(inpField) {
  const span = inpField.parentNode.querySelector("span");
  span.style.opacity = "0";
}

function isValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

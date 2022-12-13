"use strict";
// show error
const printError = (input, message) => {
  console.log("called (error)");
  const inputName = input.name;
  const inputDiv = input.closest(`#${inputName}_div`);
  const small = inputDiv.querySelector("small");
  inputDiv.className = `${inputName}_div error`;
  small.innerText = message;
  // small.style.color = "red";
};
// no error
const printSuccess = (input) => {
  console.log("called (success)");
  const inputName = input.name;
  const inputDiv = input.closest(`#${inputName}_div`);
  inputDiv.className = `${inputName}_div success`;
};

// clear all inputs
const clearInputs = () => {
  nameInput.value = "";
  marqueInput.value = "";
  priceInput.value = "";
  typeInput.value = "";
};

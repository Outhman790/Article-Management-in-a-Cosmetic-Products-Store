"use strict";
// show error
const printError = (input, message) => {
  const inputName = input.name;
  const inputDiv = input.closest(`#${inputName}_div`);
  const small = inputDiv.querySelector("small");
  inputDiv.className = `grid_8 ${inputName}_div error`;
  small.innerText = message;
  small.style.color = "red";
};
// no error
const printSuccess = (input) => {
  const inputName = input.name;
  const inputDiv = input.closest(`#${inputName}_div`);
  inputDiv.className = `grid_8 ${inputName}_div success`;
};

// clear all inputs
const clearInputs = () => {
  nameInput.value = "";
  marqueInput.value = "";
  priceInput.value = "";
  typeInput.value = "";
};

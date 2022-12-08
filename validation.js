"use strict";
// validating name
const checkName = (name) => {
  if (name.value.trim() === "") {
    printError(name, "Please enter a name");
    return false;
  } else if (validate(name, nameRegex)) {
    printSuccess(name);
    return true;
  } else if (!validate(name, nameRegex)) {
    printError(name, "Please enter a valid name");
    return false;
  }
};
// validating marque
const checkMark = (mark) => {
  if (mark.value.trim() === "") {
    printError(mark, "Please enter a mark");
    return false;
  } else if (validate(mark, markRegex)) {
    printSuccess(mark);
    return true;
  } else if (!validate(mark, markRegex)) {
    printError(mark, "Please enter a valid mark");
    return false;
  }
};
// validating price
const checkPrice = (price) => {
  if (price.value.trim() === "") {
    printError(price, "Please enter a price");
    return false;
  } else if (validate(price, priceRegex)) {
    printSuccess(price);
    return true;
  } else if (!validate(price, priceRegex)) {
    printError(price, "Please enter a valid price");
    return false;
  }
};
// validating type
// const checkType = () => {
//   if (typeInput.length === 0) {
//     document.getElementById("select").innerHTML = "Please enter a type";
//     return false;
//   } else {
//     document.getElementById("select").innerHTML = "";
//     dataArr.push(true);
//     return true;
//   }
// };
// validating promotion
const promotionNoValue = () => {
  if (!promotionInputYes.checked && !promotionInputNo.checked) return true;
  else return false;
};
// checking all inputs at once
const checkInputs = () => {
  checkName(nameInput);
  checkMark(marqueInput);
  checkPrice(priceInput);
  checkType(typeInput);
  if (promotionNoValue()) printSuccess(promotionInputYes);
  else printError(promotionInputYes, "please select one");
};

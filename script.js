"use strict";
var selectedRow = null;
const nameInput = document.querySelector("#nom_input");
const marqueInput = document.querySelector("#marque_input");
const priceInput = document.querySelector("#prix_input");
const datePrdInput = document.querySelector("#dateprd_input");
const typeInput = document.querySelector("#select");
const promotionInputYes = document.querySelector("#promotion_input_oui");
const promotionInputNo = document.querySelector("#promotion_input_non");
const tableBody = document.querySelector(".table_Body");
// const tableData = document.querySelector(".magazin_list");
const submitBtn = document.querySelector("#submit_btn");
const deleteBtn = document.querySelector(".delete_btn");
const feedbackMsg = document.querySelector("#feedback_msg");
const nameRegex = /^(^[a-z{2-}]+[\'\-\s]?[a-z]+)$/gi;
const markRegex = /^(^[a-z{2-}]+[\'\-\s]?[a-z]+)$/gi;
const priceRegex = new RegExp("[0-9]", "g");
const typeRegex = /^(^[a-z{2-}]+[\'\-\s]?[a-z]+)$/gi;
const validate = (input, regex) => regex.test(input.value.toLowerCase());
let current = "create";
let temp;
//
let dataArr = [];
if (localStorage.product != null) {
  dataArr = JSON.parse(localStorage.product);
}

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
  const small = inputDiv.querySelector("small");
  inputDiv.className = `grid_8 ${inputName}_div success`;
};
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
// clear all inputs
const clearInputs = () => {
  nameInput.value = "";
  marqueInput.value = "";
  priceInput.value = "";
  typeInput.value = "";
};
// events ( will be improved after finishing )
nameInput.addEventListener("blur", (e) => {
  checkName(e.target);
});
marqueInput.addEventListener("blur", (e) => {
  checkMark(e.target);
});
priceInput.addEventListener("blur", (e) => {
  checkPrice(e.target);
});
// typeInput.addEventListener("blur", (e) => {
//   console.log(checkType(e.target));
//   checkType(e.target);
// });
// refreshing data when clicking delete
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete_btn")) {
    showData();
  }
});
// checking all inputs at once
const checkInputs = () => {
  checkName(nameInput);
  checkMark(marqueInput);
  checkPrice(priceInput);
  checkType(typeInput);
  if (promotionNoValue()) printSuccess(promotionInputYes);
  else printError(promotionInputYes, "please select one");
};
// adding data function
const showData = () => {
  let table = "";
  if (dataArr.length == 0) table = "";
  else {
    tableBody.innerHTML = "";
    for (let i = 0; i < dataArr.length; i++) {
      table += `<tr class="magazin_list">
      <td>${dataArr[i].name}</td>
      <td>${dataArr[i].marque}</td>
      <td>${dataArr[i].price}</td>
      <td>${dataArr[i].date}</td>
      <td>${dataArr[i].type}</td>
      <td>${dataArr[i].promotion}</td>
      <td><a onclick="update(${i})" href="#" class="modify_btn">modify</a></td>
      <td><a onclick="deletedData(${i})" href="#" class="delete_btn">Delete</a></td>
      </tr>`;
    }
  }
  tableBody.innerHTML = table;
};
// delete data function
function deletedData(i) {
  document.getElementById("Product_form").style.display = "none";
  document.getElementById("modal").style.display = "block";
  delete_Pro.setAttribute("onclick", `deleteData(${i})`);
}
const deleteData = (i) => {
  document.getElementById("Product_form").style.display = "block";
  document.getElementById("modal").style.display = "none";
  dataArr.splice(i, 1);
  localStorage.product = JSON.stringify(dataArr);
  showData();
};
// edit button
const update = (i) => {
  nameInput.value = dataArr[i].name;
  marqueInput.value = dataArr[i].marque;
  priceInput.value = dataArr[i].price;
  datePrdInput.value = dataArr[i].date;
  typeInput.value = dataArr[i].type;
  submitBtn.value = "Update";
  current = "update";
  temp = i;
};

// submit event

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // storing data in object
  const data = {
    name: nameInput.value,
    marque: marqueInput.value,
    price: priceInput.value,
    date: datePrdInput.value,
    type: typeInput.value,
    promotion: document.querySelector('input[name="promotion"]:checked')?.value,
  };
  if (current == "create") {
    if (
      checkName(nameInput) == false ||
      checkMark(marqueInput) == false ||
      checkPrice(priceInput) == false ||
      promotionNoValue() == true
      // checkType() == false
    ) {
      feedbackMsg.style.display = "block";
      feedbackMsg.innerHTML = "an error ocurred";
    } else {
      dataArr.push(data);
      localStorage.setItem("product", JSON.stringify(dataArr));
      feedbackMsg.innerHTML = "";
      feedbackMsg.style.display = "none";
      showData();
      clearInputs();
    }
  } else {
    if (
      checkName(nameInput) == false ||
      checkMark(marqueInput) == false ||
      checkPrice(priceInput) == false ||
      promotionNoValue() == true
      // checkType() == false
    ) {
      feedbackMsg.style.display = "block";
      feedbackMsg.innerHTML = "an error ocurred";
    } else {
      dataArr[temp].name = nameInput.value;
      dataArr[temp].marque = marqueInput.value;
      dataArr[temp].price = priceInput.value;
      dataArr[temp].date = datePrdInput.value;
      dataArr[temp].type = typeInput.value;
      localStorage.setItem("product", JSON.stringify(dataArr));
      showData();
      feedbackMsg.innerHTML = "";
      feedbackMsg.style.display = "none";
    }
  }
});
showData();

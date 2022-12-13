"use strict";
const nameInput = document.querySelector("#nom_input");
const marqueInput = document.querySelector("#marque_input");
const priceInput = document.querySelector("#prix_input");
const datePrdInput = document.querySelector("#dateprd_input");
const datePrdDiv = document.querySelector("#dateprd_div");
const typeInput = document.querySelector("#select");
const promotionInputYes = document.querySelector("#promotion_input_oui");
const promotionInputNo = document.querySelector("#promotion_input_non");
const tableBody = document.querySelector(".table_Body");
const modal = document.getElementById("modal");
const formSection = document.getElementById("form_section");
// const tableData = document.querySelector(".magazin_list");
const submitBtn = document.querySelector("#submit_btn");
const deleteBtn = document.querySelector(".delete_btn");
const feedbackMsg = document.querySelector("#feedback_msg");
const divs = document.querySelectorAll("form div");
const nameRegex = /^([a-z{2-}]+[\'\-\s]?[a-z]+)$/gi;
const markRegex = /^([a-z{2-}]+[\'\-\s]?[a-z]+)$/gi;
const priceRegex = new RegExp("[0-9]", "g");
const validate = (input, regex) => regex.test(input.value.toLowerCase());
let current = "create";
let temp;
// hidding the modal
modal.style.display = "none";
//
let dataArr = [];
if (localStorage.product != null) {
  dataArr = JSON.parse(localStorage.product);
}
// EVENTS
checkingEvents();
// refreshing data when clicking delete
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete_btn")) {
    showData();
  }
});
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
//
const deletedData = (i) => {
  formSection.style.display = "none";
  modal.style.display = "flex";
  delete_Pro.setAttribute("onclick", `deleteData(${i})`);
};
const deleteData = (i) => {
  formSection.style.display = "grid";
  modal.style.display = "none";
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
      promotionNoValue() == true ||
      checkType(typeInput) == false ||
      checkDate(datePrdInput) == false
    ) {
      feedbackMsg.style.display = "block";
      feedbackMsg.innerHTML = "an error ocurred";
      checkInputs();
    } else {
      dataArr.push(data);
      localStorage.setItem("product", JSON.stringify(dataArr));
      feedbackMsg.innerHTML = "";
      feedbackMsg.style.display = "none";
      showData();
      clearInputs();
      clearChecking(divs);
      // checkingEvents();
    }
  } else {
    if (
      checkName(nameInput) == false ||
      checkMark(marqueInput) == false ||
      checkPrice(priceInput) == false ||
      promotionNoValue() == true ||
      checkType(typeInput) == false ||
      checkDate(datePrdInput) == false
    ) {
      feedbackMsg.style.display = "block";
      feedbackMsg.innerHTML = "an error ocurred";
      checkInputs();
    } else {
      dataArr[temp].name = nameInput.value;
      dataArr[temp].marque = marqueInput.value;
      dataArr[temp].price = priceInput.value;
      dataArr[temp].date = datePrdInput.value;
      dataArr[temp].type = typeInput.value;
      localStorage.setItem("product", JSON.stringify(dataArr));
      showData();
      clearInputs();
      clearChecking(divs);
      // checkingEvents();
      feedbackMsg.innerHTML = "";
      feedbackMsg.style.display = "none";
    }
  }
});
showData();

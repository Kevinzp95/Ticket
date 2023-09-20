const debt = document.querySelector("#debt");
let minWage = 6700;
const collectTypeInp = document.querySelectorAll(".collectType");
const property = document.querySelector("#property");
const currency = document.querySelector("#currency");
const charge = document.querySelector("#charge");
const formDebt = document.querySelector(".form__debt");
const company = document.querySelector("#company");
const person = document.querySelector("#person");
const formDebtorType = document.querySelector(".form__debtorType");
const bill = document.querySelector("#bill");
const fio = document.querySelector("#fio");
const inn = document.querySelector("#inn");

debt.addEventListener("input", calcDebt);
currency.addEventListener("change", toggleForm);
property.addEventListener("change", toggleForm);
bill.addEventListener("click", createBill);

function calcDebt() {
  collectTypeInp.forEach(function (el) {
    if (el.checked == true && el.id == "property") {
      if (
        debt.value * 0.02 <= 10 * minWage &&
        !isNaN(debt.value) &&
        Math.sign(debt.value) != -1
      ) {
        charge.innerText = (debt.value * 0.02).toFixed(2) + " грн";
      } else if (debt.value * 0.02 > 10 * minWage) {
        charge.innerText = 10 * minWage + " грн";
      } else if (debt.value == "" || fio.value == "" || inn == "") {
        bill.href = null;
      }
    }
  });
}

function toggleForm() {
  formDebtorType.classList.toggle("hide");
  formDebt.classList.toggle("hide");
  charge.innerText = "";
}

company.addEventListener("change", function () {
  charge.innerText = 2 * minWage + " грн";
});
person.addEventListener("change", function () {
  charge.innerText = minWage + " грн";
});

function createBill() {
  localStorage.debt = debt.value;
  localStorage.charge = charge.innerHTML;
  localStorage.FIO = fio.value;
  localStorage.INN = inn.value;
  // localStorage.setItem('debt', debt.value)
}

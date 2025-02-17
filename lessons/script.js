

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const debitBtn = document.getElementById("debitBtn");
const subResult = document.getElementById("subResult");
const cardResult = document.getElementById("cardResult");

mySubmit.onclick = function () {
    if (myCheckBox.checked) {
        subResult.textContent = `Jus ESATE uzsiprenumerave!`;
    }
    else {
        subResult.textContent = `Jus NEESATE uzsiprenumerave!`;
    }

    if (visaBtn.checked) {
        cardResult.textContent = `Jus mokesite naudodami VISA!`
    }
    else if (masterBtn.checked) {
        cardResult.textContent = `Jus mokesite naudodami MASTERCARD!`
    }
    else if (debitBtn.checked) {
        cardResult.textContent = `Jus mokesite naudodami DEBIT`
    }
    else {
        cardResult.textContent = `Jums reikia pasirinkti mokejimo buda!`
    }
}
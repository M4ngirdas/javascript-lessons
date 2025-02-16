

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {

    age = myText.value;
    age = Number(age);
    if (age > 125) {
        resultElement.textContent = `Your age cannot be more than 125!`
    }
    else if (age == 0) {
        resultElement.textContent = `Your age is ${age}, you were just born!`
    }

    else if (age >= 18) {
        resultElement.textContent = `Your age is ${age}, You are an adult!`
    }

    else if (age < 0) {
        resultElement.textContent = `Your age cannot be below 0!`
    }

    else {
        resultElement.textContent = `Your age is ${age}, You are a minor!`
    }
}
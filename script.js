


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");



let age;


mySubmit.onclick = function () {



    age = myText.value;
    age = Number(age);



    if (age >= 100) {
        resultElement.textContent = `You are TOO OLD to enter this website!`;
    }
    else if (age == 0) {
        resultElement.textContent = `You cant enter this website, you were just born!`;
    }
    else if (age >= 18) {
        resultElement.textContent = `You are old enough to enter this website!`;
    }

    else if (age < 0) {
        resultElement.textContent = `Your age CANNOT be below 0!`;

    }

    else {
        resultElement.textContent = `You are NOT old enough to enter this website`;
    }
}

const minNum = 1;
const maxNum = 50;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Atspėkite skaičių nuo ${minNum} iki ${maxNum}!`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Prašau įveskite tinkamą numerį!");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Skaičius nėra tinkamame intervale! Bandykite dar kartą.");
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert("PER MAŽAS! Pabandykite iš naujo!");
        }
        else if (guess > answer) {
            window.alert("PER DIDELIS! Pabandykite iš naujo!");
        }
        else {
            window.alert(`TEISINGAI! Skaičius buvo ${answer}. Jūs atspėjote per ${attempts} kartą(-us)!`);
            running = false;
        }
    }
}

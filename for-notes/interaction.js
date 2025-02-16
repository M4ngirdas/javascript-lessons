


function sum(...numbers) {

    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}



function getAverage(...numbers) {

    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}



const total = getAverage(75, 100, 85, 90, 50);

console.log(`The average is ${total}!`);






function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);
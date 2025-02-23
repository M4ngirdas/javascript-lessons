// rest parameter collects all arguments passed to a function and makes it into single array


function combineStrings(...strings){
    return strings.join("-")
}

const fullName = combineStrings("Mr", "Spongebob", "III");

console.log(fullName)
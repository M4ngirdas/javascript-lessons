

let userName = "Man girdas";

console.log(`The first character of your username is ${userName.charAt(0)}`);

console.log(`The index of letter d is ${userName.indexOf("d")}`);

console.log(`The last index of letter a is ${userName.lastIndexOf("a")}`);

console.log(`Your username has ${userName.length} letters`);

userName = userName.trim();

console.log(userName, "to trim extra space from your username use .trim")

userName = userName.toUpperCase();

console.log(userName, "to make your username upper/lower case use .toUpperCase or .toLowerCase")

userName = userName.repeat(3);

console.log(userName, "i repeated my username 3 times using .repeat")

let result = userName.startsWith(" ");

console.log(`Does my username start with an empty space? ${result}`);

let info = userName.includes(" ");

console.log(`Does my username include an empty space? ${info}`)




let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", " ");

console.log(phoneNumber);

let lastName = "Addams";

lastName = lastName.padStart(10, "A");

console.log(lastName)
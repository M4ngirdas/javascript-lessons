

const email = "example@gmail.com"

let username = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@"))

console.log(username);
console.log(extension);
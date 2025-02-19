

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Please enter your username!");
    password = window.prompt("Please enter your password!");

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials, please try again!");
    }
}

// WHILE LOOPS


do {
    username = window.prompt(`Iveskite slapyvardi`);
    password = window.prompt(`Iveskite slaptazodi`);

    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("Jus prisijungete!");

    }
    else {
        console.log("neteisingi duomenys! pabandykite is naujo!");
    }

} while (!loggedIn)


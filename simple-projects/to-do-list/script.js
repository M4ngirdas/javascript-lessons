
// Getting Important Elements
const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

// Function to Add Tasks
function addTask() {

    if (inputBox.value === "") {

        alert("You should write something!");

    }

    else {

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);

    }

    inputBox.value = ""
    saveData();

}

// Marking Tasks as Done / Deleting Tasks
listContainer.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);

// Saving and Loading Data
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
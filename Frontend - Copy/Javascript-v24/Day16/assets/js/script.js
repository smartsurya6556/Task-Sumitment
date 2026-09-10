// Day 16 – Query Selector & Form Handling
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#submissionForm");
    const nameInput = document.querySelector("#userName");
    const emailInput = document.querySelector("#userEmail");
    const trackSelect = document.querySelector("#userTrack");
    const resultBox = document.querySelector("#resultDisplay");
    const outputContent = document.querySelector("#outputContent");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const submittedData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                track: trackSelect.value,
                timestamp: new Date().toLocaleString()
            };

            console.log("Form Submitted Successfully:", submittedData);

            outputContent.textContent = JSON.stringify(submittedData, null, 2);
            resultBox.style.display = "block";
            resultBox.scrollIntoView({ behavior: "smooth" });
        });
    }
});


let box1 = document.getElementById("box1");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
    box1.classList.add("active");
});


let box2 = document.getElementById("box2");
let removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", function () {
    box2.classList.remove("active");
});


let card = document.getElementById("card");
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    card.classList.toggle("dark");
});


let userInput = document.getElementById("userInput");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
    console.log(userInput.value);
});




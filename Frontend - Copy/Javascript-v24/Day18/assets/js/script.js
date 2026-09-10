// Day 18 – User Authentication, Registration, Login & Dashboard Management

let registerForm = document.getElementById("registerForm");
let loginForm = document.getElementById("loginForm");

// Register Handler
if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("registerName").value;
        let email = document.getElementById("registerEmail").value;
        let password = document.getElementById("registerPassword").value;

        let userData = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(userData));

        document.getElementById("registerMessage").innerText = "Registration successful! Redirecting to login...";
        registerForm.reset();

        setTimeout(function() {
            showLogin();
        }, 1000);
    });
}

// Login Handler
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        let storedUser = localStorage.getItem("user");

        if (storedUser == null) {
            document.getElementById("loginMessage").innerText = "Please register first.";
            return;
        }

        let userData = JSON.parse(storedUser);

        if (email === userData.email && password === userData.password) {
            localStorage.setItem("isLoggedIn", "true");
            showDashboard();
        } else {
            document.getElementById("loginMessage").innerText = "Invalid email or password.";
        }
    });
}

// Show Register Page
function showRegister() {
    document.getElementById("registerPage").style.display = "block";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "none";
}

// Show Login Page
function showLogin() {
    document.getElementById("registerPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("dashboardPage").style.display = "none";
}

// Show Dashboard
function showDashboard() {
    let storedUser = localStorage.getItem("user");

    if (storedUser == null) {
        showRegister();
        return;
    }

    let userData = JSON.parse(storedUser);

    document.getElementById("registerPage").style.display = "none";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "block";

    document.getElementById("userName").innerText = userData.name;
    document.getElementById("dashboardName").innerText = userData.name;
    document.getElementById("dashboardEmail").innerText = userData.email;
}

// Logout
function logout() {
    localStorage.removeItem("isLoggedIn");
    showLogin();
}

// Check Login When Page Loads
window.onload = function() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let user = localStorage.getItem("user");

    if (isLoggedIn === "true" && user != null) {
        showDashboard();
    } else {
        showLogin();
    }
};
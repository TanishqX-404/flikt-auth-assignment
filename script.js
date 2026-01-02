const loginBox = document.querySelector(".login");
const registerBox = document.querySelector(".register");

const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

// Switch Forms
registerLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginBox.classList.remove("active");
    registerBox.classList.add("active");
});

loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    registerBox.classList.remove("active");
    loginBox.classList.add("active");
});

//Validation
document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = regName.value.trim();
    const email = regEmail.value.trim();
    const password = regPass.value.trim();

    if (!name || !email || !password) {
        alert("All fieds are required!");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    alert("Registration successful (Demo)");
    registerBox.classList.remove("active");
    loginBox.classList.add("active");
});

// Login Validation
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginEmail.value.trim();
    const password = loginPass.value.trim();

    if (!email || !password) {
        alert("Please fill all fields");
        return;
    }

    alert("Login successful (Demo)");
});

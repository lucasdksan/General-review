function printMsn(data){
    alert(data.msn);
}

function validationEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
        return {
            isValidation: false
        };
    }

    return {
        isValidation: true
    };
}

function sendData(email, password) {
    const formData = { email: email, password: password };
    const stringData = JSON.stringify(formData);
    
    localStorage.setItem("saveData", stringData);
    sessionStorage.setItem("saveSessionData", stringData);
}

function formData(event) {
    event.preventDefault();

    const emailInput = document.querySelector("#emailField");
    const passwordInput = document.querySelector("#passwordField");
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const validateEmail = validationEmail(emailValue);

    if (!validateEmail) {
        alert('Por favor, insira um email válido.');
        return;
    }

    sendData(emailValue, passwordValue);
}

function startForm() {
    const formElement = document.querySelector("main form");

    formElement.addEventListener("submit", formData);
}

startForm();
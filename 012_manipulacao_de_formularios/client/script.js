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
    const url = "http://localhost:3009/";
    const formData = { email: email, password: password };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }

    console.log(options)

    fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro na requisição. Status: ' + response.status);
            }

            return response.json();
        })
        .then(data => {
            printMsn(data);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
}

function formData(event) {
    event.preventDefault();

    const emailInput = document.querySelector("#emailInput");
    const passwordInput = document.querySelector("#passwordInput");
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

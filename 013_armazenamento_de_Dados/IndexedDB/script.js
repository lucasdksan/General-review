function printMsn(data) {
    alert(data.msn);
}

function viewData(request) {
    request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction("firstTable", "readonly");
        const objectStore = transaction.objectStore("firstTable");
        const request = objectStore.openCursor();

        request.onsuccess = function (event) {
            const cursor = event.target.result;
            if (cursor) {
                console.log(cursor.value);
                cursor.continue();
            }
        };
    };
}

function createDB() {
    const request = indexedDB.open("execDB", 1);

    request.onupgradeneeded = function (event) {
        const db = event.target.result;
        const objectStore = db.createObjectStore("firstTable", { keyPath: "id", autoIncrement: true });
    };

    return request;
}

function addValueInDB(request, value) {
    request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction("firstTable", "readwrite");
        const objectStore = transaction.objectStore("firstTable");

        const data = { email: value.email, password: value.password };
        const addRequest = objectStore.add(data);

        addRequest.onsuccess = function () {
            alert("Dados adicionados com sucesso!");
        };
    };
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
    const formatData = { email, password };
    const request = createDB();

    addValueInDB(request, formatData);
    viewData(request);
}

function formData(event) {
    event.preventDefault();

    const emailInput = document.querySelector("#emailField");
    const passwordInput = document.querySelector("#passwordField");
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const validateEmail = validationEmail(emailValue);

    if (!validateEmail) {
        alert("Por favor, insira um email válido.");
        return;
    }

    sendData(emailValue, passwordValue);
}

function startForm() {
    const formElement = document.querySelector("main form");

    formElement.addEventListener("submit", formData);
}

startForm();
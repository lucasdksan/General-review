function saveCookie(text) {
    document.cookie = text;
}

function formData(event) {
    event.preventDefault();

    const textInput = document.querySelector("#textField");
    const textValue = textInput.value;
    const dateObj = new Date();
    const dataCookie = `text=${textValue}; expires=Fri, ${dateObj}; path=/`;

    saveCookie(dataCookie);
}

function startForm() {
    const formElement = document.querySelector("main form");

    formElement.addEventListener("submit", formData);
}

startForm();
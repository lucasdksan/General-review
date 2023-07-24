function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

function saveCookie(text) {
    document.cookie = String(text);
}

function formData(event) {
    event.preventDefault();

    const textInput = document.querySelector("#textField");
    const textValue = textInput.value;
    const dateObj = new Date();
    dateObj.setFullYear(dateObj.getFullYear() + 1);
    const dataCookie = `text=${textValue}; expires=${dateObj.toUTCString()}; path=/`;

    console.log(dataCookie)

    saveCookie(dataCookie);
}

function startForm() {
    const formElement = document.querySelector("main form");

    formElement.addEventListener("submit", formData);

    const printBtn = document.querySelector(".openData");

    printBtn.addEventListener("click", function(){
        const nameValueCookie = getCookie("text");

        alert(nameValueCookie);
    });
}

startForm();
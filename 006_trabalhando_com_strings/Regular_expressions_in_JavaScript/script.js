const form = document.querySelector(".form--exemplo");

function setValue(value){
    const prompt = document.querySelector(".printArea > p");

    prompt.innerHTML = value;
}

function startPrompt(){
    const inputText = document.querySelector(".textArea > input");

    inputText.addEventListener("change", function(event){
        event.preventDefault();
        setValue(this.value);
    });
}

function validationEmail(email){
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailRegex.test(email)) return true;

    return false;
}

function validationName(name){
    const nameRegex = /\d+/g;

    if(!nameRegex.test(name)) return true;

    return false;
}

function handleSubmitForm(event){
    event.preventDefault();

    const name = event.target.querySelector("#name");
    const email = event.target.querySelector("#email");
    const nameValue = name.value;
    const emailValue = email.value;

    if(emailValue == "" || nameValue == "") alert("Digite o nome ou email!!");
    if(!validationEmail(emailValue)) alert("Digite um email valido: ");
    if(!validationName(nameValue)) alert("Digite um nome valido: ");

    alert("Email " + emailValue + " e o nome " + nameValue + " foram registrado!");

    this.style.display = "none";
    document.querySelector(".container").style.display = "flex";
}

form.addEventListener("submit", handleSubmitForm);

startPrompt();

const currentDate= new Date();
const currentDateArea = document.querySelector("header h1 > span");
const areaCustomDate = document.createElement("span");
const areaPrompt = document.querySelector(".container");
const dateValue = prompt("Digite uma data no formato: aaaa-mm-dd");
const customDate = new Date(dateValue);

currentDateArea.innerText = currentDate;
areaCustomDate.innerText = customDate;
areaPrompt.appendChild(areaCustomDate);

console.log(currentDate.toLocaleString("pt-br", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
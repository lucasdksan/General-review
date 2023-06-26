const currentDate= new Date();
const currentDateArea = document.querySelector("header > span");
const areaCustomDate = document.createElement("span");
const areaPrompt = document.querySelector(".container");
const dateValue = prompt("Digite uma data no formato: aaaa-mm-dd");
const customDate = new Date(dateValue);

currentDateArea.innerText = currentDate;
areaCustomDate.innerText = customDate;
areaPrompt.appendChild(areaCustomDate);
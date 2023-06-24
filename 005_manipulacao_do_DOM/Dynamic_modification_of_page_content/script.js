const father = document.querySelector(".father");
const side = document.querySelector(".side");

const input = document.createElement("input");
const pElement = document.createElement("p");
const children = father.firstElementChild;

input.setAttribute("type", "color");
side.append(input);
pElement.textContent = "Fui criado via JavaScript!";
pElement.style.color = "red";
pElement.style.fontSize = "25px";
children.innerText = "Olá via JavaScript";
father.appendChild(pElement);
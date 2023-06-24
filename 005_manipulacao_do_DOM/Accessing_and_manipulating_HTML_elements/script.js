const newElement = document.createElement("div");
const newImage = document.createElement("img");
const block = document.getElementById("exemplo");
const span = document.getElementsByClassName("spanExemplo");
const i = document.getElementsByTagName("i");
const childreI = document.querySelector(".spanExemplo");

const parentElement = childreI.parentNode;
const childElements = parentElement.childNodes;
const textSpanLen = span.length;
const textSpanItem= span.item(0);
const spanName = span.namedItem("");

newElement.className = "children";
newImage.className = "childrenImage";

newElement.appendChild(newImage);
block.appendChild(newElement);
console.log(parentElement);
console.log(childElements);


newImage.setAttribute("src", "https://prosettings.net/acd-cgi/img/v1/wp-content/uploads/aspas.png?dpr=1|f=auto|fit=contain|height=200|q=99|sharpen=1|width=200");

i[0].innerText = "Lucas Teste";

console.log(textSpanLen)
console.log(textSpanItem)
console.log(spanName)
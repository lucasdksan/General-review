const text = prompt("Digite um texto: ");
const phrase1 = prompt("Digite uma palavra: ");
const phrase2 = prompt("Digite outra palavra: ");
const upperCaseText = prompt("Digite um texto para coloca-ló em caixa alta: ");
const index = prompt("Digite uma letra para ser identicada no texto digitado anteriormente: ");

const len = text.length;
const conc = phrase1.concat(phrase2);
const textUppedCase = upperCaseText.toUpperCase();
const indexText = upperCaseText.indexOf(index);


console.log("Dados: ", {
    len,
    conc,
    textUppedCase,
    indexText
});
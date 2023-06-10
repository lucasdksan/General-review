const number1 = parseInt(prompt("Digite o primeiro número: "));
const number2 = parseInt(prompt("Digite o segundo número: "));

const resultAdd = number1 + number2;
const resultSub = number1 - number2;
const resultMult = number1 * number2;
const resultDiv = number1 / number2;
const resultRest = number1 % number2;
let numberA = number1;
let numberB = number2;

alert(`${number1} + ${number2} = ${resultAdd}`);
alert(`${number1} - ${number2} = ${resultSub}`);
alert(`${number1} * ${number2} = ${resultMult}`);
alert(`${number1} / ${number2} = ${resultDiv}`);
alert(`${number1} % ${number2} = ${resultRest}`);
alert(`++${number1} = ${++numberA}`);
alert(`--${number1} = ${--numberA}`);
alert(`++${number2} = ${++numberB}`);
alert(`--${number2} = ${--numberB}`);
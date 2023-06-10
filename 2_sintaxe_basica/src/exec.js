const number1 = parseInt(prompt("Digite o primeiro número: "));
const number2 = parseInt(prompt("Digite o segundo número: "));

if(number1 > number2){
    alert("O primeiro número é maior que o segundo!");
} else {
    alert("O segundo número é maior que o primeiro!");
}

if(number1 === number2) {
    alert("Eles são iguais!")
} else {
    alert("Eles são diferentes!");
};

const resultSoma = parseInt(number1) + parseInt(number2);
const resultSub = parseInt(number1) - parseInt(number2);
const resultMult = parseInt(number1) * parseInt(number2);
const resultDiv = parseInt(number1) / parseInt(number2);
const resultRest = parseInt(number1) % parseInt(number2);
let numberA = number1/1;
let numberB = number2/1;
const resultPlusPlus1 = ++numberA;
const resultMinusMinus1 = --numberA;
const resultPlusPlus2 = ++numberB;
const resultMinusMinus2 = --numberB;

alert(`Resultado da soma ${number1} + ${number2} = ${resultSoma}`);
alert(`Resultado da subtração ${number1} - ${number2} = ${resultSub}`);
alert(`Resultado da multiplicação ${number1} * ${number2} = ${resultMult}`);
alert(`Resultado da divisão ${number1} / ${number2} = ${resultDiv}`);
alert(`Resultado do resto ${number1} % ${number2} = ${resultRest}`);
alert(`Resultado da soma soma de ${number1} = ${resultPlusPlus1}`);
alert(`Resultado do menos menos de ${number1} = ${resultMinusMinus1}`);
alert(`Resultado da soma soma de ${number2} = ${resultPlusPlus2}`);
alert(`Resultado do menos menos de ${number2} = ${resultMinusMinus2}`);

const number1Loop = parseInt(prompt("Digite um número para fazer uma contagem simples: "));

let i = 0

for(i; i <= number1Loop; i++){
    alert("Usando for: "+ i);
}

i = 0;

while(i <= number1Loop){
    alert("Usando while: "+ i);
    i++;
}

var nameLoop, aux = 0;

do {
    str = aux == 0 ? `Digite seu nome completo: ` : `Por favor, digite seu nome completo:`;
    nameLoop = prompt("Digite seu nome completo: ");
    aux++;
} while(nameLoop == undefined || nameLoop == null || nameLoop == "");

alert("O nome digita foi: "+nameLoop);


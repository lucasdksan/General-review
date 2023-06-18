let arrLength = parseInt(prompt("Digite o tamanho do array"));

while (!arrLength || isNaN(arrLength)) {
    arrLength = parseInt(prompt("Por favor digite o tamanho do array como um número!"));
}

const arr = [];

for (let i = 0; i < arrLength; i++) {
    let promptValue = prompt("Digite algo para ser salvo no array na posição " + i + ": ");
    arr.push(promptValue);
}

arr.forEach((e, index) => {
    confirm("O valor na posição " + index + " é " + e + "?");
});

alert("Agora vamos fazer uma matriz: ");

const w = parseInt(prompt("Digite o número de linhas: "));
const h = parseInt(prompt("Digite o número de colunas: "));

let m = [];

for (let i = 0; i < w; i++) {
    m[i] = [];
    for (let j = 0; j < h; j++) {
        m[i][j] = j + i;
    }
}

console.log(m)
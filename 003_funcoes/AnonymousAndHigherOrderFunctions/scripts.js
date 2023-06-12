const n1 = parseInt(prompt("Digite o primeiro número"));
const n2 = parseInt(prompt("Digite o segundo número"));

const calc = function(n1, n2, callback){
    return callback(n1, n2);
}

const soma = function(n1, n2){
    return n1 + n2;
}

alert(`Result: ${calc(n1, n2, soma)}`);
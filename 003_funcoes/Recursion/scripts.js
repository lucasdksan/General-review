function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1; // condição de parada
    } else {
        return n * fatorial(n - 1); // chamada recursiva
    }
}

console.log(fatorial(5)); // exibe 120
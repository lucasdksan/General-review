const fullName = prompt("Digite seu nome completo: ");
const age = parseInt(prompt("Digite usa idade: "));

function createPerson(){
    const city = prompt("Digite o nome da usa cidade: ");
    const street = prompt("Digite o nome da sua rua: ");
    const ur = prompt("Digite o nome do seu estado: ");


    return {
        name: fullName,
        age: age,
        address: {
            city,
            street,
            ur
        }
    };
}

alert(JSON.stringify(createPerson()));
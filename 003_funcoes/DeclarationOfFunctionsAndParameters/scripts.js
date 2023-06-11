const firstName = prompt("Digite seu primeiro nome: ");
const lastName = prompt("Digite seu sobrenome: ");
const city = prompt("Digite o nome da sua cidade: ");
const confirmedBtn = confirm("Colocou seu nome? ");
const n1 = parseInt(prompt("Digite o primeiro número: "));
const n2 = parseInt(prompt("Digite o segundo número: "));

function createFullName(fName, lName){
    return `${fName} ${lName}`;
}

const createRG = function(){
    return `O ${firstName} ${lastName} tem ${idade} anos`;
}

const soma = function(n1, n2){
    return n1 + n2;
}

const createPersona = function(){
    return {
        nome: `${firstName} ${lastName}`,
        idade: 0,
        setIdade: function(numberIdade){
            this.idade = numberIdade;
        },
        apresent: function(){
            return `Nome: ${this.nome}, idade: ${this.idade}`;
        }
    }
}

function printCity(callback, city){
    return `${callback()}, além disso mora em ${city}`;
}

if(confirmedBtn){
    alert(createFullName(firstName, lastName));
}

let idade;

if(firstName && lastName){
    idade =parseInt(prompt("Digite sua idade"));
}

if(idade){
    alert(createRG());
}

if(n1 && n2){
    alert(soma(n1, n2));
}

if(city){
    alert(printCity(
        function(){
            return `O ${firstName} ${lastName} tem ${idade} anos`;
        }, city));
}

const Lucas = createPersona();
Lucas.setIdade(idade)

if(Lucas){
    alert(Lucas.apresent());
}
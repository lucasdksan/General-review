const nameUser = prompt("Digite seu nome completo: ");
const nameBank = prompt("Digite o nome do sue banco: ");
const deposit = parseFloat(prompt("Digite o valor do seu deposito: "));
const balance = parseFloat(prompt("Digite o valor da sua conta: "));
const numberAccount = prompt("Digite o número da sua conta: ");

class BankAccount {
    constructor(name, banckName, numberAccount, balance){
        this._balance = balance;
        this.name = name;
        this.banckName = banckName;
        this._numberAccount = numberAccount;
    }

    deposit(value){
        this._balance += value;
    }

    get balance(){
        return this._balance;
    }

    set balance(inBalance){
        this._balance = inBalance;
    }
}

class Car {
    constructor(name, brand){
        this.name = name;
        this.brand = brand;
    }
    
    acelerar() {
        console.log("O carro está acelerando!");
    }
}

class ToyotaCar extends Car {
    constructor(name, age){
        super(name, "Toyota");
        this.age = age;
    }

    printDataCar(){
        console.log({
            ano: this.age,
            nome: this.name,
            marca: this.brand
        });
    }
}

const newUserAccount = new BankAccount(nameUser, nameBank, numberAccount, balance);
const myCar = new ToyotaCar("Corolla", 2020);

myCar.printDataCar();

console.log("User: ", newUserAccount);

let nameUser = prompt("Digite o seu nome completo: ");
let age = parseInt(prompt("Digite a sua idade: "));
let city = prompt("Digite a sua cidade: ");
let country = prompt("Digite o seu páis: ");

const createPersona = {};

while(!nameUser || isNaN(age) || !city || !country){
    if(!nameUser){
        nameUser = prompt("Digite o seu nome completo Novamente: ");
    } else if(isNaN(age)){
        age = parseInt(prompt("Digite a sua idade no formato numerico"));
    } else if(!city){
        city = prompt("Digite o nome da sua cidade");
    } else if(!country){
        country = prompt("Digite o nome do seu país");
    }
}

createPersona.name = nameUser;
createPersona.age = age;
createPersona.address = { city, country };

alert("Os dados a seguir estão corretos?");

const objConfirm = {
    nameTest: false,
    age: false,
    city: false,
    country: false,
    startVerify: function(){
        this.age = confirm("Sua idade: "+createPersona.age);
        this.city = confirm("Sua cidade: "+createPersona.address.city);
        this.country = confirm("Seu páis: "+createPersona.address.city);
        this.nameTest = confirm("Seu nome: "+createPersona.name);
    }
}

objConfirm.startVerify();

if(objConfirm.age && objConfirm.city && objConfirm.country && objConfirm.nameTest){
    alert("Arquivos armazenados com sucesso!");
}
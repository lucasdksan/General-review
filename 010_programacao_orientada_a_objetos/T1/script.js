const dataPersona = {
    name: "Lucas da Silva Leoncio",
    age: 25,
    localization: {
        city: "Parnamirim",
        uf: "RN",
        street: "Rua Capitão",
        number: 1564
    },
    academicEducation: "Ciência e Tecnologia",
    salutation: function(){
        return "Olá, meu nome é "+ this.name;
    }
}

function Persona(name, age, localization, academicEducation){
    this.age = age;
    this.name = name;
    this.localization = localization;
    this.academicEducation = academicEducation;
    this.salutation = function(){
        return "Olá, meu nome é "+ this.name;
    }
}

const lucas = new Persona(dataPersona.name, dataPersona.age, dataPersona.localization, dataPersona.academicEducation);

console.log("Forma 1: ", dataPersona.salutation());
console.log("Forma 2: ", lucas.salutation());
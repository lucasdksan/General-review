class GenericForm {
    calculateArea(){

    }
}

class Rect extends GenericForm{
    constructor(h, l){
        super();
        let _width = l;
        let _height = h;

        this.getWidth = function(){
            return _width;
        }

        this.getHeight = function(){
            return _height;
        }
    }

    calculateArea(){
        return this.getHeight() * this.getWidth();
    }
}

class User {
    constructor(name, age){
        let _name = name;
        let _age = age;

        this.getName = function(){
            return _name;
        }

        this.getAge = function(){
            return _age;
        }
    }
}

const nameUser = prompt("Digite seu nome: ");
const age = parseInt(prompt("Digite sua idade: "));
const width = parseFloat(prompt("Digite a largura: "));
const height = parseFloat(prompt("Digite a altura: "));

const newUser = new User(nameUser, age);
const newRect = new Rect(height, width);

console.log(newRect.calculateArea());
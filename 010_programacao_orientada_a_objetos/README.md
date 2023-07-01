# Programação Orientada a Objetos

- Conceitos básicos de OOP.
- Criação de classes e objetos em JavaScript.
- Herança e polimorfismo.
- Encapsulamento e abstração.

## Conceitos básicos de OOP

A programação orientada a objetos (OOP) é um paradigma de programação que organiza o código em torno de objetos, que representam entidades do mundo real. JavaScript suporta programação orientada a objetos e possui recursos para criar e manipular objetos. Vou explicar alguns conceitos básicos de OOP em JavaScript.

1. Objetos: Em JavaScript, um objeto é uma coleção de propriedades, onde cada propriedade é um par chave-valor. As propriedades podem ser atributos ou métodos. Você pode criar objetos usando a sintaxe de objeto literal ou com a função construtora.

```javascript
// Objeto literal
const pessoa = {
  nome: "João",
  idade: 30,
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};

// Função construtora
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.saudacao = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  };
}

const pessoa2 = new Pessoa("Maria", 25);
```

2. Propriedades: São características dos objetos que armazenam valores. As propriedades podem ser acessadas e modificadas usando a sintaxe de ponto ou colchetes.

```javascript
console.log(pessoa.nome); // "João"
pessoa.idade = 35;
console.log(pessoa["idade"]); // 35
```

3. Métodos: São funções associadas a um objeto. Eles podem acessar e modificar as propriedades do objeto e executar ações relacionadas a ele.

```javascript
pessoa.saudacao(); // "Olá, meu nome é João"
```

4. Herança: Em JavaScript, a herança é baseada em protótipos. Os objetos têm um protótipo (referência a outro objeto) do qual herdam propriedades e métodos. É possível criar uma hierarquia de objetos, onde um objeto herda do outro.

```javascript
// Objeto pai
const animal = {
  tipo: "desconhecido",
  som: function() {
    console.log("Faz um som");
  }
};

// Objeto filho
const cachorro = Object.create(animal);
cachorro.tipo = "cachorro";
cachorro.latir = function() {
  console.log("Au au!");
};

cachorro.som(); // "Faz um som"
cachorro.latir(); // "Au au!"
```

5. Encapsulamento: JavaScript não oferece suporte nativo a modificadores de acesso, mas é possível simular o encapsulamento usando closures (funções internas que têm acesso a variáveis externas).

```javascript
function Contador() {
  let contador = 0;

  this.incrementar = function() {
    contador++;
    console.log(contador);
  };

  this.zerar = function() {
    contador = 0;
    console.log(contador);
  };
}

const meuContador = new Contador();
meuContador.incrementar(); // 1
meuContador.zerar(); // 0
```

Embora JavaScript não tenha modificadores de acesso como public, private ou protected, é possível usar convenções de nomenclatura e técnicas de encapsulamento para controlar o acesso às propriedades e métodos.

```javascript
class ContaBancaria {
  constructor(numeroConta, saldo) {
    this._numeroConta = numeroConta; // Convenção para indicar propriedade "privada"
    this._saldo = saldo;
  }

  depositar(valor) {
    this._saldo += valor;
  }

  sacar(valor) {
    if (valor <= this._saldo) {
      this._saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  get saldo() {
    return this._saldo;
  }
}

const minhaConta = new ContaBancaria("123456", 1000);
minhaConta.depositar(500);
minhaConta.sacar(200);
console.log(minhaConta.saldo); // 1300
```

6. Polimorfismo: O polimorfismo permite que objetos de diferentes classes respondam ao mesmo método de maneira diferente. Isso permite escrever código genérico que pode lidar com diferentes tipos de objetos.

```javascript
class Animal {
  fazerSom() {
    console.log("Faz um som");
  }
}

class Cachorro extends Animal {
  fazerSom() {
    console.log("Au au!");
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log("Miau!");
  }
}

const cachorro = new Cachorro();
const gato = new Gato();

cachorro.fazerSom(); // "Au au!"
gato.fazerSom(); // "Miau!"
```

## Criação de classes e objetos em JavaScript

Em JavaScript, você pode criar classes usando a sintaxe da palavra-chave class. Uma classe é um modelo para criar objetos, e ela define as propriedades e métodos que os objetos terão. Vamos dar uma olhada em um exemplo:

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}
```

No exemplo acima, definimos a classe Pessoa com um construtor que recebe dois parâmetros: nome e idade. Dentro do construtor, definimos as propriedades nome e idade usando a palavra-chave this, que se refere ao objeto sendo criado.

A classe Pessoa também possui um método chamado saudacao(), que imprime uma saudação com o nome da pessoa.

Agora podemos criar objetos com base nessa classe usando a palavra-chave new:

```javascript
const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);
```

Nesse exemplo, criamos dois objetos pessoa1 e pessoa2 usando a classe Pessoa. Passamos os argumentos necessários para o construtor ao criar os objetos.

Agora podemos chamar os métodos e acessar as propriedades desses objetos:

```javascript
console.log(pessoa1.nome); // "João"
console.log(pessoa2.idade); // 25

pessoa1.saudacao(); // "Olá, meu nome é João"
pessoa2.saudacao(); // "Olá, meu nome é Maria"
```

Observe que cada objeto criado a partir da classe Pessoa tem suas próprias propriedades, independentes uns dos outros.

Além disso, você também pode adicionar métodos e propriedades às instâncias individuais de objetos. Isso é útil quando você precisa de propriedades ou métodos exclusivos para um objeto específico. Aqui está um exemplo:

```javascript
class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  acelerar() {
    console.log("O carro está acelerando!");
  }
}

const meuCarro = new Carro("Toyota", "Corolla");
meuCarro.ano = 2021;

console.log(meuCarro.marca); // "Toyota"
console.log(meuCarro.ano); // 2021

meuCarro.acelerar(); // "O carro está acelerando!"
```

Nesse exemplo, além das propriedades marca e modelo definidas no construtor, adicionamos uma propriedade ano diretamente no objeto meuCarro após sua criação.

Isso mostra como as classes em JavaScript podem ser flexíveis e permitir a adição de propriedades e métodos específicos para cada objeto individual.

*Factory Functions: Além da sintaxe de classe, você também pode criar objetos e classes usando funções fábrica (factory functions). As factory functions são funções que retornam objetos. Aqui está um exemplo:

```javascript
function criarPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade,
    saudacao: function() {
      console.log(`Olá, meu nome é ${this.nome}`);
    }
  };
}

const pessoa1 = criarPessoa("João", 30);
const pessoa2 = criarPessoa("Maria", 25);

console.log(pessoa1.nome); // "João"
console.log(pessoa2.idade); // 25

pessoa1.saudacao(); // "Olá, meu nome é João"
pessoa2.saudacao(); // "Olá, meu nome é Maria"
```

Nesse exemplo, a função criarPessoa é uma factory function que retorna um objeto contendo as propriedades nome, idade e o método saudacao.

*Constructor Functions: As constructor functions são funções que são usadas para criar objetos. Elas são semelhantes às classes, mas não usam a sintaxe de classe. Em vez disso, você define uma função e usa a palavra-chave new para criar objetos com essa função. Aqui está um exemplo:

```javascript
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.saudacao = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  };
}

const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);

console.log(pessoa1.nome); // "João"
console.log(pessoa2.idade); // 25

pessoa1.saudacao(); // "Olá, meu nome é João"
pessoa2.saudacao(); // "Olá, meu nome é Maria"
```

Nesse exemplo, definimos a função Pessoa como uma constructor function. Dentro da função, usamos a palavra-chave this para definir as propriedades e métodos do objeto que está sendo criado.

*Object.create(): A função Object.create() é outra forma de criar objetos em JavaScript. Ela permite que você crie um objeto com um protótipo específico. Aqui está um exemplo:

```javascript
const pessoaPrototype = {
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};

const pessoa1 = Object.create(pessoaPrototype);
pessoa1.nome = "João";
pessoa1.idade = 30;

const pessoa2 = Object.create(pessoaPrototype);
pessoa2.nome = "Maria";
pessoa2.idade = 25;

console.log(pessoa1.nome); // "João"
console.log(pessoa2.idade); // 25

pessoa1.saudacao(); // "Olá, meu nome é João"
pessoa2.saudacao(); // "Olá, meu nome é Maria"
```

Nesse exemplo, criamos um objeto pessoaPrototype que contém o método saudacao. Em seguida, usamos a função Object.create() para criar os objetos pessoa1 e pessoa2 com o protótipo definido como pessoaPrototype. Em seguida, definimos as propriedades nome e idade para cada objeto individualmente.

## Herança e polimorfismo

1. Herança em JavaScript:

A herança é um dos conceitos fundamentais da programação orientada a objetos (POO) e permite que uma classe herde características de outra classe. Em JavaScript, a herança é baseada em protótipos, o que significa que os objetos são vinculados a um protótipo que contém as propriedades e métodos que podem ser compartilhados.

Ao herdar de uma classe, a classe filha adquire todas as propriedades e métodos da classe pai. Isso permite reutilizar código e estabelecer uma relação de "é um" entre as classes. A classe filha é capaz de acessar e modificar as propriedades da classe pai, bem como adicionar novas propriedades e métodos específicos

Aqui está um exemplo de como usar herança em JavaScript:

```javascript
// Classe pai
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerBarulho() {
    console.log("Fazendo barulho!");
  }
}

// Classe filha que herda de Animal
class Cachorro extends Animal {
  latir() {
    console.log("Au Au!");
  }
}

// Criando uma instância da classe filha
const meuCachorro = new Cachorro("Rex");

console.log(meuCachorro.nome); // "Rex"
meuCachorro.fazerBarulho(); // "Fazendo barulho!"
meuCachorro.latir(); // "Au Au!"
```

Nesse exemplo, temos a classe Animal como a classe pai e a classe Cachorro como a classe filha. A classe Cachorro herda todas as propriedades e métodos da classe Animal usando a palavra-chave extends.

Isso significa que o objeto meuCachorro possui acesso tanto às propriedades e métodos definidos na classe Cachorro quanto aos herdados da classe Animal.

É importante mencionar que JavaScript permite apenas uma herança direta, ou seja, uma classe filha só pode herdar de uma única classe pai. No entanto, é possível criar cadeias de herança conectando várias classes pai.

```javascript
// Classe base
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log("Fazendo som!");
  }
}

// Classe filha que herda de Animal
class Mamifero extends Animal {
  amamentar() {
    console.log("Amamentando filhotes!");
  }
}

// Classe filha que herda de Mamifero
class Cachorro extends Mamifero {
  latir() {
    console.log("Au Au!");
  }
}

// Criando uma instância da classe filha
const meuCachorro = new Cachorro("Rex");

console.log(meuCachorro.nome); // "Rex"
meuCachorro.fazerSom(); // "Fazendo som!"
meuCachorro.amamentar(); // "Amamentando filhotes!"
meuCachorro.latir(); // "Au Au!"
```

Nesse exemplo, temos a classe Animal como a classe base, a classe Mamifero que herda de Animal e a classe Cachorro que herda de Mamifero. Isso cria uma cadeia de herança em que cada classe adiciona funcionalidades específicas.

O objeto meuCachorro possui acesso às propriedades e métodos definidos em todas as classes ao longo da cadeia de herança. Isso significa que ele herda o método fazerSom da classe Animal, o método amamentar da classe Mamifero e o método latir da classe Cachorro.

As cadeias de herança podem ser úteis para modelar relacionamentos mais complexos entre classes e para reutilizar código de forma eficiente. No entanto, é importante ter cuidado ao usar cadeias de herança, pois elas podem aumentar a complexidade do código e tornar o sistema mais difícil de entender e manter. É sempre recomendado avaliar a necessidade e a clareza antes de criar cadeias de herança mais profundas.

2. Polimorfismo em JavaScript:

Polimorfismo é um dos princípios fundamentais da programação orientada a objetos (POO) e refere-se à capacidade de um objeto se comportar de maneiras diferentes dependendo do contexto em que é usado. Em JavaScript, o polimorfismo é alcançado por meio da herança e da capacidade de substituir métodos em classes filhas.

O polimorfismo permite tratar objetos de diferentes classes de forma uniforme, desde que eles compartilhem uma interface comum ou uma classe pai em comum. Isso significa que um objeto pode ser tratado como uma instância de sua própria classe ou como uma instância de qualquer uma de suas classes pai.

Vamos continuar o exemplo anterior e adicionar polimorfismo:

```javascript
// Classe base
class Animal {
  fazerSom() {
    console.log("Fazendo som!");
  }
}

// Classe filha que herda de Animal
class Cachorro extends Animal {
  fazerSom() {
    console.log("Au Au!");
  }
}

// Classe filha que herda de Animal
class Gato extends Animal {
  fazerSom() {
    console.log("Miau!");
  }
}

// Função que recebe um objeto Animal e chama o método fazerSom
function emitirSom(animal) {
  animal.fazerSom();
}

// Criando instâncias de Cachorro e Gato
const meuCachorro = new Cachorro();
const meuGato = new Gato();

emitirSom(meuCachorro); // "Au Au!"
emitirSom(meuGato); // "Miau!"
```

Nesse exemplo, temos a classe Animal como a classe base e as classes Cachorro e Gato como classes filhas que herdam de Animal. Cada classe filha substitui o método fazerSom da classe base com sua própria implementação específica.

Em seguida, temos a função emitirSom que recebe um objeto Animal como parâmetro e chama o método fazerSom desse objeto. A função emitirSom não precisa se preocupar com o tipo específico do objeto, pois o polimorfismo permite que o método apropriado seja chamado automaticamente, dependendo do tipo do objeto.

Isso demonstra o polimorfismo em ação, em que objetos de diferentes classes podem ser tratados de maneira uniforme, chamando o mesmo método com comportamentos diferentes, dependendo de sua implementação específica.

O polimorfismo é uma poderosa ferramenta de programação orientada a objetos, pois permite a criação de código flexível, modular e reutilizável. Ele promove a abstração e o encapsulamento, pois os detalhes específicos de cada classe são tratados internamente, enquanto o código externo pode interagir com os objetos de maneira genérica e consistente.

## Encapsulamento e abstração

O encapsulamento e a abstração são dois princípios importantes da programação orientada a objetos (POO) que ajudam a organizar e estruturar o código de forma eficiente. Embora JavaScript seja uma linguagem de programação multiparadigma, é possível aplicar conceitos de encapsulamento e abstração para escrever código mais limpo e modular.

O encapsulamento é um conceito que envolve a combinação de dados e funcionalidades relacionadas em uma única entidade, geralmente uma classe. O objetivo do encapsulamento é ocultar os detalhes internos do objeto e fornecer uma interface externa para interagir com ele. Isso é feito usando modificadores de acesso, como privado, público e protegido, para controlar o acesso aos membros do objeto.

Embora JavaScript não tenha modificadores de acesso nativos como outras linguagens, como Java ou C++, ainda é possível obter encapsulamento através do uso de convenções de nomenclatura e do escopo de funções. Por exemplo, ao definir uma classe em JavaScript, você pode usar variáveis privadas dentro do escopo da função construtora e expor apenas os métodos públicos usando o this.

Aqui está um exemplo que demonstra o encapsulamento em JavaScript:

```javascript
class Pessoa {
  constructor(nome, idade) {
    let _nome = nome; // variável privada
    let _idade = idade; // variável privada

    this.getNome = function() { // método público
      return _nome;
    };

    this.getIdade = function() { // método público
      return _idade;
    };
  }

  saudacao() { // método público
    console.log(`Olá, meu nome é ${this.getNome()} e tenho ${this.getIdade()} anos.`);
  }
}

const pessoa = new Pessoa("João", 30);
console.log(pessoa.getNome()); // "João"
console.log(pessoa.getIdade()); // 30
pessoa.saudacao(); // "Olá, meu nome é João e tenho 30 anos."
```

Nesse exemplo, as variáveis _nome e _idade são encapsuladas dentro do escopo da função construtora Pessoa e não são diretamente acessíveis fora dela. Em vez disso, são fornecidos métodos públicos getNome() e getIdade() para acessar essas informações.

A abstração, por sua vez, é um conceito que envolve a criação de classes e objetos que representam conceitos e entidades do mundo real de maneira simplificada. A ideia é focar apenas nos aspectos essenciais e relevantes, ocultando detalhes complexos e desnecessários. A abstração permite que você modele objetos e classes com base em suas características e comportamentos principais.

Em JavaScript, a abstração pode ser alcançada por meio da definição de classes e métodos que encapsulam um conjunto de funcionalidades relacionadas. Ao usar a abstração, você pode criar classes e objetos com interfaces claras e intuitivas, facilitando o uso e a compreensão do código.

Aqui está um exemplo simples de abstração em JavaScript:

```javascript
class Forma {
  calcularArea() {
    // implementação genérica para calcular a área de uma forma
  }
}

class Retangulo extends Forma {
  constructor(largura, altura) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * this.raio * this.raio;
  }
}

const retangulo = new Retangulo(5, 3);
console.log(retangulo.calcularArea()); // 15

const circulo = new Circulo(2);
console.log(circulo.calcularArea()); // 12.566370614359172
```

Nesse exemplo, a classe Forma representa uma forma genérica e possui um método calcularArea() que é implementado de forma genérica. As classes Retangulo e Circulo herdam de Forma e implementam seus próprios métodos calcularArea(), que são específicos para cada forma.

A abstração permite tratar objetos de diferentes classes (no caso, Retangulo e Circulo) de forma uniforme, chamando o mesmo método calcularArea(). Apesar de cada classe ter sua própria implementação desse método, o código externo pode interagir com os objetos de maneira consistente.

*Encapsulamento:

1. Escopo de Função: Uma maneira comum de alcançar o encapsulamento em JavaScript é usar funções para criar escopos. As variáveis e funções declaradas dentro de uma função não são acessíveis fora do seu escopo, a menos que sejam explicitamente expostas por meio de uma interface pública.

```javascript
function Contador() {
  let valor = 0;

  this.incrementar = function() {
    valor++;
  };

  this.getValor = function() {
    return valor;
  };
}

const contador = new Contador();
contador.incrementar();
console.log(contador.getValor()); // 1
console.log(contador.valor); // undefined (variável privada)
```

Nesse exemplo, a variável valor é uma variável privada dentro do escopo da função Contador. As funções incrementar e getValor são expostas como uma interface pública para interagir com o objeto Contador.

2. Convenções de Nomenclatura: Embora as variáveis em JavaScript não possam ser definidas como privadas ou públicas, é comum usar convenções de nomenclatura para indicar a visibilidade pretendida. Por exemplo, prefixar uma variável com _ (underline) é uma convenção comum para indicar que ela deve ser tratada como privada.

```javascript
function Pessoa() {
  let _nome = '';

  this.setNome = function(nome) {
    _nome = nome;
  };

  this.getNome = function() {
    return _nome;
  };
}

const pessoa = new Pessoa();
pessoa.setNome('João');
console.log(pessoa.getNome()); // "João"
console.log(pessoa._nome); // undefined (variável privada)
```

Nesse exemplo, a variável _nome é considerada privada, indicando que não deve ser acessada diretamente fora da função Pessoa. As funções setNome e getNome são usadas para interagir com o valor da variável _nome.

Embora essas técnicas ajudem a alcançar um nível básico de encapsulamento em JavaScript, é importante lembrar que elas são convenções e não mecanismos de proteção real. Os desenvolvedores ainda podem acessar as variáveis e funções privadas se tiverem acesso direto ao objeto.

*Abstração:

A ideia por trás da abstração é fornecer uma representação simplificada de um objeto, ocultando detalhes complexos e desnecessários. Isso permite que os desenvolvedores se concentrem nos aspectos relevantes e ignorem os detalhes de implementação subjacentes.

Em JavaScript, a abstração pode ser alcançada por meio da definição de classes e objetos que encapsulam um conjunto de funcionalidades relacionadas. Uma classe é uma representação abstrata de um conceito ou entidade, enquanto um objeto é uma instância específica dessa classe.

A abstração permite criar classes e objetos com interfaces claras e intuitivas, ocultando a complexidade interna. Isso facilita o uso e a compreensão do código, além de promover a reutilização e modularidade.
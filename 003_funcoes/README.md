#  Funções

- Declaração de funções e parâmetros.
- Escopo de variáveis e closures.
- Funções anônimas e de ordem superior.
- Recursão.

## Declaração de funções e parâmetros.

Em JavaScript, você pode declarar funções usando a palavra-chave function. As funções são blocos de código que podem ser chamados e executados em diferentes partes do programa.

Declaração de função básica:

```javascript
    function nomeDaFuncao() {
    // código a ser executado
    }
```

Exemplo: 

```javascript
    function saudacao() {
        console.log("Olá! Bem-vindo(a)!");
    }
    saudacao(); // chamando a função
```

Função com parâmetros:

Parâmetros são valores que você pode passar para uma função para que ela possa realizar operações com base nesses valores.

```javascript
    function nomeDaFuncao(parametro1, parametro2) {
        // código a ser executado usando os parâmetros
    }
```

Exemplo: 

```javascript
    function saudacao(nome) {
        console.log("Olá, " + nome + "! Bem-vindo(a)!");
    }
    saudacao("João"); // chamando a função com um argumento
```

Retorno de valores:

Uma função também pode retornar um valor usando a palavra-chave return. Isso permite que você obtenha o resultado da função para uso posterior.

> Lembre-se de que, ao usar return, a execução da função é interrompida e o valor é retornado imediatamente. Se você não fornecer um valor para return ou omitir completamente essa palavra-chave, a função retornará undefined implicitamente.

Além disso ao declarar uma função, você pode definir parâmetros que atuam como variáveis locais dentro da função. Os parâmetros permitem que você passe valores para a função quando ela é chamada. Esses valores são chamados de argumentos. Você pode ter zero ou mais parâmetros em uma função.

```javascript
    function nomeDaFuncao() {
        // código a ser executado
        return valor;
    }
```

Exemplo: 

```javascript
    function soma(a, b) {
        return a + b;
    }
    let resultado = soma(2, 3);
    console.log(resultado); // exibe 5
```

> Você pode usar parâmetros com valores padrão, que são atribuídos automaticamente se nenhum valor for fornecido ao chamar a função.

```javascript
    function saudacao(nome = "visitante") {
        console.log("Olá, " + nome + "! Bem-vindo(a)!");
    }
    saudacao(); // exibe "Olá, visitante! Bem-vindo(a)!"
    saudacao("João"); // exibe "Olá, João! Bem-vindo(a)!"
```

Expressões de função:

Além da declaração de função tradicional, você também pode usar expressões de função para criar funções. Essas expressões são atribuídas a uma variável ou a uma propriedade de um objeto.

```javascript
    let nomeDaFuncao = function() {
    // código a ser executado
    };
```

Exemplo: 

```javascript
    let saudacao = function(nome) {
        console.log("Olá, " + nome + "! Bem-vindo(a)!");
    };
    saudacao("Maria");
```


As funções são fundamentais em JavaScript e permitem a organização e reutilização de código. Elas desempenham um papel importante na programação e oferecem uma maneira de encapsular a lógica do seu programa para facilitar a manutenção e a legibilidade.

## Escopo de variáveis e closures.

O escopo de variáveis em JavaScript se refere à visibilidade e acessibilidade de variáveis em diferentes partes do código. O conhecimento sobre o escopo é essencial para entender como as variáveis são armazenadas e acessadas em diferentes contextos.

Escopo Global:

As variáveis declaradas fora de qualquer função têm escopo global. Isso significa que elas podem ser acessadas em qualquer lugar do código, tanto dentro quanto fora das funções.

Exemplo: 

```javascript
    let nome = "João"; // variável global

    function saudacao() {
        console.log("Olá, " + nome + "!");
    }

    saudacao(); // exibe "Olá, João!"
```

Escopo Local:

As variáveis declaradas dentro de uma função têm escopo local. Isso significa que elas só podem ser acessadas dentro dessa função específica. Essas variáveis são chamadas de variáveis locais ou variáveis de função.

Exemplo:

```javascript
    function saudacao() {
    let nome = "Maria"; // variável local
        console.log("Olá, " + nome + "!");
    }

    saudacao(); // exibe "Olá, Maria!"
    console.log(nome); // gera um erro, pois a variável nome não está definida neste escopo
```

As variáveis declaradas com var também têm escopo de função. No entanto, a partir do ECMAScript 6 (ES6), as palavras-chave let e const introduziram o escopo de bloco, que permite que as variáveis sejam limitadas a um bloco de código, como um if ou um loop for.

Closures:
Uma closure em JavaScript é uma função que tem acesso a variáveis de seu escopo externo, mesmo após a função externa ter sido concluída e retornada. Ela "lembra" do ambiente em que foi criada.

Isso é possível porque as funções em JavaScript têm uma propriedade chamada [[Environment]], que armazena referências às variáveis do escopo externo. Essas referências permitem que a função interna acesse e manipule as variáveis mesmo após a função externa ter sido concluída.

Exemplo de closure:

```javascript
    function contador() {
        let count = 0;

        function incrementar() {
            count++;
            console.log(count);
        }

        return incrementar;
    }

    let meuContador = contador();
    meuContador(); // exibe 1
    meuContador(); // exibe 2
```

No exemplo acima, a função contador retorna a função incrementar. Essa função interna tem acesso à variável count, mesmo depois que a função externa foi concluída. Cada vez que a função incrementar é chamada, a variável count é atualizada e seu valor é retido na closure.

As closures são úteis quando você precisa manter o estado de uma variável entre várias chamadas de função, ou quando deseja criar funções com dados privados, mantendo-os encapsulados no escopo da closure.

Compreender o escopo de variáveis e as closures em JavaScript é importante para escrever código limpo, modular e eficiente. Elas permitem o compartilhamento controlado de informações entre funções e fornecem flexibilidade

## Funções anônimas e de ordem superior.

## Recursão.
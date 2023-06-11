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

Funções Anônimas:

Uma função anônima em JavaScript é uma função sem um nome definido. Em vez de declarar uma função com um identificador, você pode atribuir a função a uma variável ou passá-la como um argumento para outra função.

As funções anônimas são úteis em várias situações. Aqui estão alguns casos de uso comuns:

1. Passar uma função como argumento para outra função (callback):

Isso permite que você defina um comportamento personalizado que será executado dentro de outra função. O exemplo abaixo mostra como usar uma função anônima como um callback em uma função de temporizador:

```javascript
    setTimeout(function() {
        console.log("A função anônima foi executada após 2 segundos");
    }, 2000);
```

Nesse exemplo, uma função anônima é passada como o primeiro argumento para a função setTimeout. Essa função será executada após um atraso de 2 segundos.

2.Definir uma função dentro de um objeto:

Você pode criar funções anônimas para atribuir a propriedades de objetos. Essa técnica é comumente usada para definir métodos em objetos:

```javascript
    let pessoa = {
        nome: "João",
        dizerOla: function() {
            console.log("Olá, " + this.nome + "!");
        }
    };

    pessoa.dizerOla(); // exibe "Olá, João!"
```

Nesse exemplo, a função anônima é atribuída à propriedade dizerOla do objeto pessoa. A função pode acessar a propriedade nome usando this.

> As funções anônimas são úteis em várias situações, como quando você precisa passar uma função como argumento para outra função, definir uma função como propriedade de um objeto ou criar uma função imediatamente invocada.

Funções de Ordem Superior:

As funções de ordem superior em JavaScript são funções que podem receber outras funções como argumentos e/ou retornar funções como resultados. Em outras palavras, essas funções tratam outras funções como valores e as manipulam de várias maneiras.

```javascript
    function executarOperacao(operacao, a, b) {
        return operacao(a, b);
    }

    function soma(a, b) {
        return a + b;
    }

    let resultado = executarOperacao(soma, 2, 3);
    console.log(resultado); // exibe 5
```

Nesse exemplo, a função executarOperacao é uma função de ordem superior que recebe uma função operacao como argumento. Essa função operacao é então invocada dentro da função executarOperacao, passando os argumentos a e b.

As funções de ordem superior são amplamente utilizadas em JavaScript para implementar conceitos como callbacks, mapeamento (map), filtragem (filter), redução (reduce) e muito mais. Elas permitem uma programação mais flexível e funcional.

As funções de ordem superior são poderosas e permitem um estilo de programação mais funcional. Aqui estão algumas maneiras comuns de usá-las:

1.Passar funções como argumentos:

As funções de ordem superior podem receber outras funções como argumentos. Isso permite que você personalize o comportamento da função de ordem superior. Um exemplo clássico é a função map, que itera sobre um array e aplica uma transformação em cada elemento:

```javascript
    let numeros = [1, 2, 3, 4, 5];

    let quadrados = numeros.map(function(numero) {
        return numero * numero;
    });

    console.log(quadrados); // exibe [1, 4, 9, 16, 25]
```

Nesse exemplo, a função anônima passada para map define a transformação a ser aplicada a cada elemento do array.

2.Retornar funções como resultados:

As funções de ordem superior também podem retornar funções. Isso é útil quando você deseja criar funções personalizadas com base em determinados parâmetros ou configurações. Um exemplo é uma função de fábrica:

```javascript
    function criarSaudacao(prefixo) {
        return function(nome) {
            console.log(prefixo + " " + nome);
        };
    }

    let saudacaoFormal = criarSaudacao("Bom dia,");
    saudacaoFormal("João"); // exibe "Bom dia, João"

    let saudacaoInformal = criarSaudacao("Oi,");
    saudacaoInformal("Maria"); // exibe "Oi, Maria"
```

> Nesse exemplo, a função criarSaudacao retorna uma função anônima. A função retornada captura o valor do parâmetro prefixo e o combina com o nome fornecido quando é invocada.

Callbacks:

Em JavaScript, um callback é uma função que é passada como argumento para outra função e é executada após a conclusão de uma determinada operação ou evento assíncrono. Os callbacks são amplamente utilizados para controlar o fluxo de execução em situações em que uma operação leva tempo para ser concluída, como operações de E/S (entrada/saída), chamadas de API assíncronas ou manipulação de eventos.

A principal característica dos callbacks é que eles permitem que você especifique um comportamento personalizado a ser executado após uma determinada ação ou evento. Quando a operação assíncrona é concluída, a função de callback é chamada, permitindo que você lide com os resultados ou execute ações adicionais.

```javascript
    function fetchUserData(callback) {
    // Simulação de chamada de API assíncrona
        setTimeout(function() {
            const userData = { name: "João", age: 30 };
            callback(userData);
        }, 2000);
    }

    function processUserData(userData) {
        console.log("Nome: " + userData.name);
        console.log("Idade: " + userData.age);
    }

    fetchUserData(processUserData);
```

Nesse exemplo, a função fetchUserData simula uma chamada de API assíncrona usando setTimeout. Quando os dados do usuário estão disponíveis, a função de callback processUserData é invocada para processar os dados recebidos.

## Recursão.

Recursão é um conceito em programação onde uma função chama a si mesma repetidamente até atingir uma condição de parada. A função que chama a si mesma é chamada de função recursiva. A recursão é uma poderosa técnica de resolução de problemas que permite que um problema complexo seja dividido em subproblemas menores e mais simples.

Aqui está um exemplo simples de uma função recursiva em JavaScript que calcula o fatorial de um número:

```javascript
    function fatorial(n) {
        if (n === 0 || n === 1) {
            return 1; // condição de parada
        } else {
            return n * fatorial(n - 1); // chamada recursiva
        }
    }

    console.log(fatorial(5)); // exibe 120
```

Nesse exemplo, a função fatorial calcula o fatorial de um número n. A condição de parada é definida quando n é igual a 0 ou 1, pois o fatorial de 0 e 1 é 1. Caso contrário, a função chama a si mesma com um valor menor de n e multiplica o n atual pelo fatorial do número anterior. Esse processo continua até que a condição de parada seja alcançada.

É importante garantir que uma função recursiva tenha uma condição de parada bem definida para evitar que ela entre em um loop infinito. Sem uma condição de parada, a função continuará chamando a si mesma indefinidamente.

A recursão pode ser usada para resolver uma variedade de problemas, como percorrer estruturas de dados complexas (como árvores ou listas encadeadas), resolver problemas matemáticos, implementar algoritmos de busca e muito mais. No entanto, é importante usar a recursão com cuidado, pois ela pode consumir muitos recursos, especialmente em problemas com muitas chamadas recursivas ou profundidade recursiva muito grande. Em alguns casos, é possível otimizar a recursão usando técnicas como a recursão de cauda ou a iteração.
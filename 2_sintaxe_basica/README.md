#  Sintaxe Básica

- Variáveis e tipos de dados em JavaScript.
- Operadores e expressões.
- Estruturas condicionais (if, else, switch).
- Estruturas de repetição (for, while, do-while).

## Variáveis e tipos de dados em JavaScript.

Em JavaScript, você pode usar variáveis para armazenar valores e manipulá-los durante a execução do seu código. Aqui estão alguns tipos de dados comuns em JavaScript:

1. Números: São usados para representar valores numéricos, como inteiros e números de ponto flutuante. Exemplos de números em JavaScript são: 42, 3.14, -10.

2. Strings: Representam sequências de caracteres. Strings são definidas entre aspas simples (') ou aspas duplas ("). Exemplos de strings: 'Olá', "Mundo".

3. Booleanos: Podem ter apenas dois valores: true ou false. Eles são usados para representar condições lógicas. Por exemplo, true pode representar uma condição verdadeira, enquanto false pode representar uma condição falsa.

4. Arrays: São usados para armazenar múltiplos valores em uma única variável. Um array é uma coleção ordenada de elementos que podem ser de qualquer tipo de dados. Exemplo: [1, 2, 3, 4].

5. Objetos: São estruturas de dados complexas que podem conter propriedades e métodos. Propriedades são pares de chave-valor, onde a chave é uma string e o valor pode ser qualquer tipo de dado. Exemplo: { nome: 'João', idade: 25 }.

6. Null: Representa a ausência intencional de qualquer objeto ou valor. É um valor especial que indica a falta de um valor válido.

7. Undefined: Representa uma variável que foi declarada, mas não possui um valor atribuído.

**Além desses tipos de dados básicos, JavaScript também suporta outros tipos de dados, como datas, funções e expressões regulares.**

Para declarar uma variável em JavaScript, você pode usar a palavra-chave var, let ou const, seguida pelo nome da variável

**Observação: as palavras-chaves podem começar com letras, $ ou _. Não podem começar com números. É possível usar letras ou números. É possível usar acentos e símbolos. Não podem conter espaços. Não podem ser palavras reservadas.**

Formas de declarar variáveis:

var: Antes do ES6 (ECMAScript 2015), a palavra-chave var era a única forma de declarar variáveis em JavaScript. No entanto, ela possui algumas características que podem ser consideradas problemáticas:

- Escopo de função: A variável declarada com var tem escopo de função, o que significa que ela é visível dentro da função em que foi declarada, independentemente do bloco em que está contida.
- Hoisting: Variáveis declaradas com var são "içadas" para o topo do escopo em que foram definidas. Isso permite que você acesse a variável antes mesmo de ela ser declarada, embora seu valor seja undefined até a atribuição real.
- Reatribuição e redeclaração: Variáveis declaradas com var podem ser reatribuídas (ter seu valor alterado) e redeclaradas (declaradas novamente no mesmo escopo) sem gerar erros.

let: A palavra-chave let foi introduzida no ES6 e é preferível ao uso de var na maioria dos casos. Ela resolve algumas das limitações do var:

- Escopo de bloco: A variável declarada com let tem escopo de bloco, o que significa que ela é visível apenas dentro do bloco em que foi declarada, como um par de chaves {}.
- Hoisting limitado: Ao contrário do var, let não sofre hoisting para o topo do escopo, então você precisa declarar a variável antes de usá-la.
- Reatribuição: Você pode alterar o valor de uma variável declarada com let, mas não pode redeclará-la no mesmo escopo.

const: A palavra-chave const também foi introduzida no ES6 e é usada para declarar constantes, ou seja, variáveis que têm um valor fixo que não pode ser alterado posteriormente:

- Escopo de bloco: Assim como o let, a variável declarada com const tem escopo de bloco.
- Atribuição única: Uma vez atribuído um valor a uma variável const, esse valor não pode ser alterado posteriormente. Isso não significa que o valor em si é imutável, apenas que a variável não pode ser atribuída a outro valor.
- Declaração obrigatória: Você deve atribuir um valor à variável const durante sua declaração, caso contrário, ocorrerá um erro.

Em resumo, let é usado quando você precisa de uma variável que pode ter seu valor alterado, enquanto const é usado para declarar uma variável cujo valor não deve ser modificado. A utilização de var é desencorajada devido às suas peculiaridades de escopo e hoisting.

É importante escolher a palavra-chave correta com base nas necessidades específicas do seu código para garantir um comportamento correto e previsível das variáveis.

## Operadores e expressões.

Operadores Aritméticos: São usados para realizar operações matemáticas em números.

Alguns exemplos são:

- +: Soma dois valores.
- -: Subtrai um valor do outro.
- *: Multiplica dois valores.
- /: Divide um valor pelo outro.
- %: Retorna o resto da divisão entre dois valores.
- ++: Incrementa o valor de uma variável em 1.
- --: Decrementa o valor de uma variável em 1.

> Em JavaScript, é possível alterar o valor de uma variável de forma simples usando operadores de atribuição combinados com operadores aritméticos. Isso permite realizar a operação desejada diretamente na variável.

> Por exemplo se let x = 10 e quero alterar esse valor para x = x - 5 é possível fazer essa alteração dessa forma x -= 5

> É possível fazer essa alteração com qualquer operador aritmético (+=, -=, *=, /= e %=).

> Esses operadores combinados realizam a operação aritmética entre o valor atual da variável e o valor especificado, e atribuem o resultado de volta à própria variável. Eles são úteis para simplificar a atualização de valores de variáveis de forma mais concisa.

> É importante ressaltar que esses operadores combinados podem ser utilizados com outros tipos de dados além de números, como strings ou arrays, desde que a operação aritmética seja aplicável ou apropriada ao contexto em que estão sendo utilizados.

Ordem de precedência:

1. "()"
2. "**"
3. "*" "/" "%" (Se tiver mais de desses a ordem de execução será da esquerda para direita)
4. "+" "-"

Operadores de Comparação: São usados para comparar valores e retornar um valor booleano (true ou false).

Alguns exemplos são:

- "==": Verifica se dois valores são iguais.
- "!=": Verifica se dois valores são diferentes.
- "===": Verifica se dois valores são iguais e do mesmo tipo.
- "!==": Verifica se dois valores são diferentes ou de tipos diferentes.
- ">": Verifica se o valor à esquerda é maior que o valor à direita.
- "<": Verifica se o valor à esquerda é menor que o valor à direita.
- ">=": Verifica se o valor à esquerda é maior ou igual ao valor à direita.
- "<=": Verifica se o valor à esquerda é menor ou igual ao valor à direita.

Operadores Lógicos: São usados para combinar ou negar condições e retornar um valor booleano. 

Os principais operadores lógicos são:

- &&: Retorna true se ambas as condições forem verdadeiras.
- ||: Retorna true se pelo menos uma das condições for verdadeira.
- !: Nega uma condição, retornando o valor oposto.
- ?=: Operador ternário. (Exemplo: teste ? true : false)

Ordem de precedência:

1. !
2. &&
3. ||

## Estruturas condicionais (if, else, switch).

No JavaScript, existem três estruturas condicionais principais: if, else e switch. Essas estruturas permitem que você tome decisões e execute diferentes blocos de código com base em determinadas condições.

Estrutura if: A estrutura if permite executar um bloco de código se uma condição especificada for avaliada como verdadeira.

```markdown
    if (condição) {
    // código a ser executado se a condição for verdadeira
    }
```

Exemplo:

```markdown
    let idade = 18;
    if (idade >= 18) {
        console.log("Você é maior de idade.");
    }
```

Estrutura if-else: A estrutura if-else permite executar um bloco de código se a condição for avaliada como verdadeira e outro bloco de código se a condição for avaliada como falsa.

```markdown
    if (condição) {
        // código a ser executado se a condição for verdadeira
    } else {
        // código a ser executado se a condição for falsa
    }
```

Exemplo:

```markdown
    let idade = 16;
    if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }
```

Estrutura switch: A estrutura switch é usada quando você tem múltiplas condições para verificar. Ela permite que você especifique diferentes casos com base em um valor e execute o bloco de código correspondente ao caso correspondente.

```markdown
    switch (expressão) {
        case valor1:
            // código a ser executado se a expressão for igual a valor1
            break;
        case valor2:
            // código a ser executado se a expressão for igual a valor2
            break;
        default:
            // código a ser executado se nenhum caso corresponder à expressão
    }
```

Exemplo:

```markdown
    let diaSemana = 1;
    switch (diaSemana) {
        case 1:
            console.log("Segunda-feira");
            break;
        case 2:
            console.log("Terça-feira");
            break;
        case 3:
            console.log("Quarta-feira");
            break;
        default:
            console.log("Outro dia da semana");
    }
```

É importante lembrar que as estruturas condicionais podem ser aninhadas, permitindo a avaliação de múltiplas condições em diferentes níveis. Além disso, você pode usar operadores lógicos, como && e ||, para criar condições mais complexas.

As estruturas condicionais são fundamentais para controlar o fluxo de execução do seu código com base em diferentes situações e são amplamente utilizadas na programação JavaScript.

## Estruturas de repetição (for, while, do-while).

No JavaScript, existem três estruturas de repetição principais: for, while e do-while. Essas estruturas permitem que você execute um bloco de código repetidamente com base em uma determinada condição. 

Estrutura for: A estrutura for é usada quando você conhece o número de iterações antecipadamente. Ela possui três partes separadas por ponto e vírgula: inicialização, condição e expressão final.

```markdown
    for (inicialização; condição; expressão final) {
        // código a ser repetido
    }
```

Exemplo:

```markdown
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
```

Estrutura while: A estrutura while é usada quando você não sabe o número exato de iterações e deseja repetir um bloco de código enquanto uma condição especificada for avaliada como verdadeira.

```markdown
    while (condição) {
    // código a ser repetido
    }
```

Exemplo:

```markdown
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
```

Estrutura do-while: A estrutura do-while é semelhante à estrutura while, mas a diferença é que o bloco de código é executado primeiro e a condição é verificada posteriormente. Isso garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição inicialmente for falsa.

```markdown
    do {
        // código a ser repetido
    } while (condição);
```

Exemplo:

```markdown
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);
```

Além dessas estruturas, você pode usar as palavras-chave break e continue para controlar o fluxo dentro de uma estrutura de repetição. O break permite interromper a execução da estrutura de repetição, enquanto o continue pula para a próxima iteração, ignorando o restante do bloco de código atual.

As estruturas de repetição são úteis quando você precisa executar um bloco de código várias vezes com base em uma condição. Elas ajudam a automatizar tarefas repetitivas e permitem que você itere sobre uma coleção de dados, execute cálculos repetidos ou implemente lógica personalizada.
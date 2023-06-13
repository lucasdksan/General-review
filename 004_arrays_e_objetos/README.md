# Arrays e Objetos

- Trabalhando com arrays e métodos de array.
- Manipulação de objetos e propriedades.
- Iteração em objetos e arrays.

## Trabalhando com arrays e métodos de array.

Em JavaScript, os arrays são estruturas de dados que permitem armazenar e organizar múltiplos valores em uma única variável. Eles são objetos indexados, o que significa que cada valor armazenado no array é associado a um índice. O índice é uma posição numérica que começa em 0 para o primeiro elemento, 1 para o segundo elemento e assim por diante. É possível criar um array de várias maneiras em JavaScript. A forma mais comum é usando a sintaxe de colchetes [] e separando os elementos por vírgulas. Por exemplo:

```javascript
    const fruits = ['maçã', 'banana', 'laranja'];
```

Os elementos do array podem ser de qualquer tipo de dado, incluindo números, strings, objetos, outras arrays e até mesmo funções. Por exemplo:

```javascript
    const mixedArray = [1, 'hello', { name: 'John' }, [2, 4, 6], function() { return 'I am a function'; }];
```

Para acessar os elementos de um array, você pode usar o operador de colchetes [] e fornecer o índice desejado. Por exemplo:

```javascript
    const fruits = ['maçã', 'banana', 'laranja'];
    console.log(fruits[0]); // 'maçã'
    console.log(fruits[1]); // 'banana'
    console.log(fruits[2]); // 'laranja'
```

Outra forma de criar arrays é usando `new Array()`:

```javascript
    const array = new Array(5); // Cria um array com tamanho 5
    console.log(array); // [empty × 5]
```

No contexto de arrays simples em JavaScript, a diferença entre [ ] e new Array() está na forma de criar um novo array.

1. Notação de Colchetes [ ]:

A notação de colchetes é a forma mais comum e recomendada de criar arrays em JavaScript. Ela oferece uma sintaxe mais concisa e legível para declarar e inicializar um array.

Vantagens:

* Sintaxe mais simples e direta.
* Pode incluir diretamente os elementos no momento da criação do array.

Desvantagens:

* Não é possível especificar o tamanho do array explicitamente.
* Se o array for criado usando [] e for fornecido apenas um número inteiro, ele será interpretado como o tamanho do array, não como um elemento.

2. Construtor new Array():

O construtor new Array() é outra forma de criar um array em JavaScript. Ele permite criar um novo objeto de array com ou sem elementos iniciais.

Vantagens:

* Permite especificar o tamanho do array explicitamente passando um número inteiro como argumento.
* Pode ser útil quando você precisa criar um array com um tamanho pré-definido.

Desvantagens:

* Sintaxe mais verbosa em comparação com a notação de colchetes.
* Se você passar apenas um argumento para o construtor new Array(), ele será interpretado como o número de elementos, não como o tamanho do array.

Os arrays em JavaScript têm um conjunto de propriedades e métodos embutidos que facilitam a manipulação e a transformação dos dados. Já discutimos alguns dos métodos comuns, como push, pop, slice, forEach, map, filter, reduce e outros.

1. push: Adiciona um ou mais elementos ao final do array.


```javascript
    const fruits = ['maçã', 'banana'];
    fruits.push('laranja');
    console.log(fruits); // ['maçã', 'banana', 'laranja']
```

2. pop: Remove o último elemento do array e retorna esse elemento.

```javascript
    const fruits = ['maçã', 'banana', 'laranja'];
    const lastFruit = fruits.pop();
    console.log(lastFruit); // 'laranja'
    console.log(fruits); // ['maçã', 'banana']
```

3. shift: Remove o primeiro elemento do array e retorna esse elemento.

```javascript
    const fruits = ['maçã', 'banana', 'laranja'];
    const firstFruit = fruits.shift();
    console.log(firstFruit); // 'maçã'
    console.log(fruits); // ['banana', 'laranja']
```

4. unshift: Adiciona um ou mais elementos no início do array.

```javascript
    const fruits = ['banana', 'laranja'];
    fruits.unshift('maçã');
    console.log(fruits); // ['maçã', 'banana', 'laranja']
```

5. concat: Concatena dois ou mais arrays, retornando um novo array resultante.

```javascript
    const fruits = ['maçã', 'banana'];
    const vegetables = ['cenoura', 'abóbora'];
    const combined = fruits.concat(vegetables);
    console.log(combined); // ['maçã', 'banana', 'cenoura', 'abóbora']
```

6. slice: Retorna uma cópia de parte do array, definida pelos índices de início e fim.

```javascript
    const fruits = ['maçã', 'banana', 'laranja', 'morango'];
    const slicedFruits = fruits.slice(1, 3);
    console.log(slicedFruits); // ['banana', 'laranja']

```

7. forEach: Executa uma função para cada elemento do array.

```javascript
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach(function(number) {
        console.log(number);
    });
    // exibe:
    // 1
    // 2
    // 3
    // 4
    // 5
```

8. map: Cria um novo array com os resultados de chamar uma função fornecida em cada elemento do array.

```javascript
    const numbers = [1, 2, 3, 4, 5];
    const doubledNumbers = numbers.map(function(number) {
        return number * 2;
    });
    console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

9. filter: Cria um novo array com todos os elementos que passam por um teste (função fornecida).

```javascript
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(function(number) {
        return number % 2 === 0;
    });
    console.log(evenNumbers); // [2, 4]
```

10. reduce: Executa uma função em cada elemento do array, resultando em um único valor.

```javascript
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce(function(acc, number) {
        return acc + number;
    }, 0);
    console.log(sum); // 15
```

11. find: Retorna o primeiro elemento do array que satisfaz uma condição fornecida.

```javascript
    const fruits = ['maçã', 'banana', 'laranja'];
    const foundFruit = fruits.find(function(fruit) {
        return fruit === 'banana';
    });
    console.log(foundFruit); // 'banana'
```

12. sort: Ordena os elementos do array de acordo com uma função de classificação fornecida.

```javascript
    const numbers = [3, 1, 4, 2, 5];
    numbers.sort(function(a, b) {
        return a - b;
    });
    console.log(numbers); // [1, 2, 3, 4, 5]
```

13. some: Verifica se pelo menos um elemento do array satisfaz uma condição fornecida.

```javascript
    const numbers = [1, 2, 3, 4, 5];
    const hasEvenNumber = numbers.some(function(number) {
        return number % 2 === 0;
    });
    console.log(hasEvenNumber); // true
```

14. every: Verifica se todos os elementos do array satisfazem uma condição fornecida.

```javascript
    const numbers = [1, 2, 3, 4, 5];
    const allPositive = numbers.every(function(number) {
        return number > 0;
    });
    console.log(allPositive); // true
```

Além disso, os arrays têm a propriedade length, que indica o número de elementos no array. Você pode acessar o valor da propriedade length e também alterá-lo, o que pode ser útil para adicionar ou remover elementos do array dinamicamente.

Existem várias técnicas úteis para trabalhar com arrays em JavaScript, como percorrer arrays com loops, buscar elementos específicos, adicionar, remover e atualizar elementos, combinar e dividir arrays, ordenar, filtrar e transformar dados. Essas operações são fundamentais para o processamento e a manipulação de conjuntos de dados.

É importante lembrar que arrays em JavaScript são objetos mutáveis, o que significa que você pode modificar seus elementos mesmo depois de criados. No entanto, essa mutabilidade também pode levar a erros se não for usada com cuidado.

A teoria dos arrays em JavaScript é extensa, e existem muitas outras nuances e recursos avançados para explorar. É recomendado consultar a documentação oficial do JavaScript e explorar tutoriais e exemplos para aprofundar seu conhecimento sobre o assunto.

* Matriz:

Uma matriz é uma estrutura de dados que contém uma coleção de elementos organizados em linhas e colunas. Em JavaScript, você pode criar matrizes usando arrays aninhados, onde cada elemento do array principal é outro array, representando as linhas da matriz.

Por exemplo, vamos criar uma matriz que representa uma grade 3x3:

```javascript
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
```

Nessa matriz, temos três linhas e três colunas. Para acessar um elemento específico da matriz, você usa a notação de colchetes duplos, fornecendo o índice da linha e o índice da coluna desejada. Por exemplo:

```javascript
    console.log(matrix[0][0]); // 1
    console.log(matrix[1][2]); // 6
    console.log(matrix[2][1]); // 8
```

Você pode percorrer uma matriz usando loops aninhados, por exemplo, usando loops for:

```javascript
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j]);
        }
    }
```

As matrizes em JavaScript não precisam ser quadradas, o que significa que o número de elementos em cada linha pode ser diferente. Por exemplo:

```javascript
    const irregularMatrix = [
        [1, 2, 3],
        [4, 5],
        [6, 7, 8, 9]
    ];
```

Nesse caso, a matriz irregularMatrix tem três linhas com diferentes números de elementos em cada linha.

Assim como os arrays unidimensionais, as matrizes em JavaScript podem ser modificadas, adicionando, removendo ou atualizando elementos. Por exemplo:

```javascript
    matrix[1][2] = 10; // Atualizando um elemento existente
    matrix[0].push(4); // Adicionando um elemento ao final da primeira linha
    matrix.push([11, 12, 13]); // Adicionando uma nova linha à matriz
```

As matrizes podem ser usadas em várias situações, como representar tabuleiros de jogos, armazenar dados tabulares, lidar com imagens ou até mesmo realizar operações matemáticas complexas. O JavaScript fornece várias ferramentas para trabalhar com matrizes, como métodos de iteração, filtragem, mapeamento e redução que também podem ser aplicados a matrizes.

É importante ter cuidado ao trabalhar com matrizes e garantir que os índices estejam dentro dos limites adequados para evitar erros de acesso aos elementos. Além disso, o desempenho de operações em matrizes pode ser afetado pelo tamanho da matriz, então é importante considerar a eficiência do código ao realizar operações em matrizes grandes.

Em JavaScript, não existem métodos específicos para matrizes, pois elas são implementadas usando arrays bidimensionais. No entanto, os arrays em JavaScript têm uma série de métodos embutidos que podem ser usados para manipular matrizes.

Aqui estão alguns métodos de arrays comumente usados que também podem ser aplicados a matrizes:

1. push(): Adiciona um ou mais elementos ao final da matriz.
2. pop(): Remove o último elemento da matriz e retorna o valor removido.
3. concat(): Combina duas ou mais matrizes e retorna uma nova matriz.
4. join(): Combina todos os elementos da matriz em uma única string, separados por um delimitador.
5. slice(): Retorna uma cópia superficial de uma parte da matriz em um novo array.
6. splice(): Altera o conteúdo da matriz, adicionando, removendo ou substituindo elementos.
7. forEach(): Executa uma função de callback para cada elemento da matriz.
8. map(): Cria um novo array com os resultados de chamar uma função de callback em cada elemento da matriz.
9. filter(): Cria um novo array com todos os elementos da matriz que passam em um teste fornecido por uma função de callback.
10. find(): Retorna o primeiro elemento da matriz que satisfaz uma função de teste fornecida.
11. reduce(): Executa uma função de callback em cada elemento da matriz para reduzi-la a um único valor.
12. sort(): Classifica os elementos da matriz em ordem crescente ou de acordo com uma função de comparação.
13. reverse(): Inverte a ordem dos elementos da matriz.
14. indexOf(): Retorna o índice do primeiro elemento correspondente na matriz ou -1 se não for encontrado.
15. includes(): Verifica se a matriz contém um determinado elemento e retorna true ou false.
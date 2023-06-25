# Trabalhando com Strings

- Métodos e operações com strings.
- Expressões regulares em JavaScript.

## Métodos e operações com strings.

As strings em JavaScript são sequências de caracteres e possuem vários métodos e operações disponíveis para manipulação. Aqui estão alguns dos métodos e operações mais comuns para trabalhar com strings:

1. Comprimento da string:

O método length retorna o número de caracteres em uma string. Por exemplo: let str = "Hello"; console.log(str.length); // Saída: 5

2. Concatenação de strings:

O operador + é usado para concatenar duas ou mais strings. Por exemplo: let str1 = "Hello"; let str2 = "World"; let result = str1 + " " + str2; console.log(result); // Saída: "Hello World"
O método concat() também pode ser usado para concatenar strings. Por exemplo: let str1 = "Hello"; let str2 = "World"; let result = str1.concat(" ", str2); console.log(result); // Saída: "Hello World"

3. Acesso a caracteres:

Você pode acessar caracteres individuais de uma string usando a notação de colchetes [] e passando o índice do caractere desejado. Lembre-se de que os índices das strings começam em 0. Por exemplo: let str = "Hello"; console.log(str[0]); // Saída: "H"

4. Transformação de caixa:

Os métodos toUpperCase() e toLowerCase() permitem converter a string para maiúsculas ou minúsculas, respectivamente. Por exemplo: let str = "Hello"; console.log(str.toUpperCase()); // Saída: "HELLO"
O método charAt() retorna o caractere na posição especificada. Por exemplo: let str = "Hello"; console.log(str.charAt(1)); // Saída: "e"

5. Busca em strings:

O método indexOf() retorna o índice da primeira ocorrência de um determinado valor em uma string. Por exemplo: let str = "Hello World"; console.log(str.indexOf("o")); // Saída: 4
O método lastIndexOf() retorna o índice da última ocorrência de um determinado valor em uma string.
O método includes() verifica se uma determinada substring está presente na string. Retorna true se estiver e false caso contrário.

6. Divisão e junção de strings:

O método split() divide uma string em um array de substrings com base em um separador fornecido. Por exemplo: let str = "Hello,World"; let arr = str.split(","); console.log(arr); // Saída: ["Hello", "World"]
O método join() combina os elementos de um array em uma única string, usando um separador especificado. Por exemplo: let arr = ["Hello", "World"]; let str = arr.join(","); console.log(str); // Saída: "Hello,World"

7. Extração de substrings:

O método substring() permite extrair uma parte específica de uma string com base em índices inicial e final. Por exemplo: let str = "Hello World"; console.log(str.substring(0, 5)); // Saída: "Hello"
O método slice() também extrai uma parte de uma string, mas aceita índices negativos, o que permite contar a partir do final da string. Por exemplo: let str = "Hello World"; console.log(str.slice(-5)); // Saída: "World"

8. Substituição de substrings:

O método replace() substitui uma parte de uma string por outra substring especificada. Ele substitui apenas a primeira ocorrência por padrão. Por exemplo: let str = "Hello World"; console.log(str.replace("Hello", "Hi")); // Saída: "Hi World"
Você pode usar uma expressão regular com o modificador "g" para substituir todas as ocorrências. Por exemplo: let str = "Hello Hello"; console.log(str.replace(/Hello/g, "Hi")); // Saída: "Hi Hi"

9. Verificação de início e fim:

Os métodos startsWith() e endsWith() verificam se uma string começa ou termina com uma determinada substring, respectivamente. Eles retornam true se a condição for atendida e false caso contrário. Por exemplo: let str = "Hello World"; console.log(str.startsWith("Hello")); // Saída: true

10. Formatação de strings:

O método toFixed() formata um número em uma string com uma quantidade específica de casas decimais. Por exemplo: let num = 3.14159; console.log(num.toFixed(2)); // Saída: "3.14"
O método toLocaleUpperCase() e toLocaleLowerCase() são semelhantes aos métodos toUpperCase() e toLowerCase(), mas aplicam formatação de caixa de acordo com as regras locais do idioma definido no navegador.

11. Verificação de vazios e remoção de espaços:

O método trim() remove os espaços em branco no início e no final de uma string. Por exemplo: let str = " Hello World "; console.log(str.trim()); // Saída: "Hello World"
O método isEmpty() pode ser usado para verificar se uma string está vazia. Isso pode ser feito verificando se o comprimento da string é igual a zero.

12. Conversão de strings para outros tipos de dados:

Para converter uma string em um número, você pode usar o parseInt() para números inteiros ou parseFloat() para números decimais. Por exemplo: let str = "123"; let num = parseInt(str); console.log(num); // Saída: 123

11. Comparação de strings:

Você pode comparar strings usando os operadores de comparação === Quantificadores:

Os quantificadores especificam a quantidade de ocorrências de um padrão que devem ser encontradas. Alguns quantificadores comuns incluem * (zero ou mais ocorrências), + (uma ou mais ocorrências), ? (zero ou uma ocorrência) e {n} (exatamente n ocorrências).
Exemplo: /lo*/ corresponde a "l", "lo", !==, <, >, <= e >=. A comparação de strings é feita com base em sua ordem lexicográfica (ordem alfabética). Por exemplo: "apple" < "banana" retorna true.

## Expressões regulares em JavaScript.

Expressões regulares em JavaScript são padrões usados para fazer correspondências e manipulações em strings. Elas fornecem uma maneira poderosa de pesquisar, extrair e substituir padrões de texto em uma string. Em JavaScript, as expressões regulares são representadas por objetos da classe RegExp e podem ser usadas com os métodos match(), test(), replace(), search(), entre outros. Aqui estão alguns conceitos importantes sobre expressões regulares em JavaScript:

1. Sintaxe básica:

Em JavaScript, uma expressão regular é delimitada por barras /, por exemplo: /pattern/.
Além das barras, você pode usar flags para modificar o comportamento da expressão regular, como i (insensitive, para ignorar diferenças entre maiúsculas e minúsculas), g (global, para encontrar todas as correspondências) e m (multiline, para corresponder a múltiplas linhas). As flags são adicionadas após a segunda barra, por exemplo: /pattern/gi.

2. Correspondência:

O método match() é usado para encontrar todas as correspondências entre a expressão regular e uma string. Ele retorna um array contendo as correspondências encontradas.
O método test() verifica se a expressão regular tem correspondência em uma string e retorna true ou false.

Exemplo:

```javascript
    let str = "Hello, World!";
    let pattern = /o/gi;
    let matches = str.match(pattern); // retorna ["o", "o", "o"]
    let hasMatch = pattern.test(str); // retorna true
```

3. Substituição:

O método replace() é usado para substituir partes de uma string com base em uma expressão regular. Você pode fornecer um padrão de correspondência e uma string de substituição.

Exemplo:

```javascript
    let str = "Hello, World!";
    let pattern = /o/gi;
    let result = str.replace(pattern, "e"); // retorna "Helle, Werld!"
```

4. Metacaracteres:

Metacaracteres são caracteres especiais que possuem um significado especial nas expressões regulares. Alguns metacaracteres comuns incluem . (qualquer caractere), ^ (início da linha), $ (fim da linha), \d (dígito), \w (caractere alfanumérico) e \s (espaço em branco).

Exemplo: /h.llo/ corresponde a "hello", "hallo" e outros.

5. Classes de caracteres:

Classes de caracteres são usadas para especificar um conjunto de caracteres que podem corresponder em uma determinada posição. Por exemplo, [aeiou] corresponde a qualquer vogal.

* [...] : Representa um conjunto de caracteres. Você pode especificar uma lista de caracteres que deseja corresponder.
Exemplo: /[aeiou]/ corresponde a qualquer vogal em uma string.

* [^...] : Representa qualquer caractere que não esteja na lista especificada.
Exemplo: /[^0-9]/ corresponde a qualquer caractere que não seja um dígito.

* [\d] : Representa qualquer dígito de 0 a 9.
Exemplo: /\d+/ corresponde a qualquer sequência de dígitos em uma string.

* [\w] : Representa qualquer caractere alfanumérico (letras maiúsculas e minúsculas, dígitos e sublinhados).
Exemplo: /\w+/ corresponde a qualquer palavra em uma string.

* [\s] : Representa qualquer espaço em branco.
Exemplo: /\s+/ corresponde a qualquer sequência de espaços em branco em uma string.

6. Quantificadores:

Os quantificadores especificam a quantidade de ocorrências de um padrão que devem ser encontradas. Alguns quantificadores comuns incluem * (zero ou mais ocorrências), + (uma ou mais ocorrências), ? (zero ou uma ocorrência) e {n} (exatamente n ocorrências).
Exemplo: /lo*/ corresponde a "l", "lo"

7. Grupos de captura:

(): Permitem agrupar padrões e capturar a correspondência para uso posterior.
Exemplo: /(ab)+/ corresponde a "ab", "abab", "ababab" e assim por diante.

| (pipe): Representa uma escolha entre padrões alternativos.
Exemplo: /cat|dog/ corresponde a "cat" ou "dog".

Exemplos: 

* Verificar se um endereço de e-mail é válido:
```javascript
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const email = 'example@example.com';
    if (emailRegex.test(email)) {
        console.log('O endereço de e-mail é válido.');
    } else {
        console.log('O endereço de e-mail é inválido.');
    }
```

* Extrair números de uma string:
```javascript
    const string = 'Eu tenho 5 maçãs e 3 laranjas.';
    const numbers = string.match(/\d+/g);
    console.log(numbers); // Output: [ '5', '3' ]
```

* Remover caracteres especiais de uma string:
```javascript
    const string = 'Olá! Como você está? :)';
    const cleanString = string.replace(/[^\w\s]/g, '');
    console.log(cleanString); // Output: 'Olá Como você está '
```

* Verificar se uma string contém apenas letras:
```javascript
    const string = 'abc123';
    const containsOnlyLetters = /^[a-zA-Z]+$/g.test(string);
    console.log(containsOnlyLetters); // Output: false
```

* Validar um número de telefone com formato específico:
```javascript
    const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    const phoneNumber = '(123) 456-7890';
    if (phoneRegex.test(phoneNumber)) {
        console.log('Número de telefone válido.');
    } else {
        console.log('Número de telefone inválido.');
    }
```
# Programação Assíncrona

- Callbacks e funções assíncronas.
- Promises e async/await.
- Trabalhando com requisições HTTP.

## Callbacks e funções assíncronas

Callbacks e funções assíncronas são duas abordagens comuns em JavaScript para lidar com operações assíncronas. Vou explicar cada uma delas separadamente:

*Callbacks:

Callbacks são funções passadas como argumentos para outras funções e executadas em um momento posterior, geralmente quando uma operação assíncrona é concluída. Eles permitem que você especifique o que deve ser feito depois que uma operação assíncrona for finalizada. Aqui está um exemplo básico de uso de callbacks:

```javascript
function operacaoAssincrona(callback) {
  // Simulando uma operação assíncrona
  setTimeout(function() {
    const resultado = 42;
    callback(resultado);
  }, 2000);
}

function callbackFuncao(resultado) {
  console.log('O resultado é:', resultado);
}

operacaoAssincrona(callbackFuncao);
```

Neste exemplo, a função operacaoAssincrona recebe uma função de callback como argumento e, após 2 segundos (simulado por setTimeout), ela chama o callback passando o resultado como argumento.

Callbacks também podem ser usados para lidar com erros em operações assíncronas. Normalmente, o primeiro parâmetro do callback é reservado para o erro (se houver) e o segundo parâmetro (ou subsequentes) é usado para os resultados. Por convenção, o primeiro parâmetro é geralmente chamado de erro ou err.

```javascript
function operacaoAssincrona(callback) {
  // Lógica da operação assíncrona
  // ...
  
  if (ocorreuErro) {
    callback(new Error('Ocorreu um erro'));
  } else {
    callback(null, resultado);
  }
}

function callbackFuncao(erro, resultado) {
  if (erro) {
    console.log('Ocorreu um erro:', erro);
  } else {
    console.log('O resultado é:', resultado);
  }
}

operacaoAssincrona(callbackFuncao);
```

Neste exemplo, o callback recebe dois parâmetros: o primeiro é usado para o erro (se ocorrer) e o segundo para o resultado. Se houver um erro, ele será passado como o primeiro argumento no callback. Caso contrário, o primeiro argumento será null e o segundo será o resultado da operação.

Um problema comum com o uso excessivo de callbacks é o chamado "Callback Hell" ou "Pyramid of Doom". Isso acontece quando você tem vários callbacks aninhados, o que torna o código difícil de ler, entender e manter.

```javascript
funcao1(function(resultado1) {
  funcao2(resultado1, function(resultado2) {
    funcao3(resultado2, function(resultado3) {
      // E assim por diante...
    });
  });
});
```

Para evitar o Callback Hell, existem algumas técnicas que podem ser usadas, como o uso de Promises ou funções assíncronas (async/await), que fornecem uma sintaxe mais limpa e facilitam a leitura e a compreensão do código.


Uma abordagem eficaz é modularizar o código e separar as responsabilidades em funções menores e mais específicas. Cada função deve se concentrar em uma tarefa específica e retornar uma Promise ou aceitar um callback para lidar com o resultado. Isso ajuda a reduzir o aninhamento e tornar o código mais legível.

```javascript
function buscarDados(callback) {
  fazerChamadaAPI(function(resultado) {
    callback(resultado);
  });
}

function processarDados(resultado) {
  // Lógica para processar os dados
}

buscarDados(function(resultado) {
  processarDados(resultado);
});
```

Neste exemplo, as funções buscarDados e processarDados são definidas separadamente e possuem responsabilidades bem definidas. O código principal fica mais limpo e legível.

As Promises oferecem uma maneira mais estruturada de lidar com operações assíncronas e podem ajudar a reduzir o aninhamento de callbacks. Em vez de aninhar callbacks, você pode encadear chamadas then para processar o resultado de uma Promise e continuar com o próximo passo. Isso é conhecido como "chaining".

```javascript
fazerChamadaAPI()
  .then(function(resultado1) {
    return processarDados(resultado1);
  })
  .then(function(resultado2) {
    return fazerOutraChamadaAPI(resultado2);
  })
  .then(function(resultadoFinal) {
    console.log(resultadoFinal);
  })
  .catch(function(erro) {
    console.log('Ocorreu um erro:', erro);
  });
```

Neste exemplo, cada chamada then recebe o resultado da Promise anterior e retorna uma nova Promise, permitindo que você encadeie as chamadas e evite o aninhamento excessivo de callbacks.

As funções assíncronas e a palavra-chave await fornecem uma sintaxe ainda mais limpa e legível para lidar com código assíncrono. Você pode usar o await dentro de uma função assíncrona para pausar a execução e aguardar a conclusão de uma Promise. Isso permite que você escreva código assíncrono como se fosse síncrono, evitando a Callback Hell.

```javascript
async function minhaFuncao() {
  try {
    const resultado1 = await fazerChamadaAPI();
    const resultado2 = await processarDados(resultado1);
    const resultadoFinal = await fazerOutraChamadaAPI(resultado2);
    console.log(resultadoFinal);
  } catch (erro) {
    console.log('Ocorreu um erro:', erro);
  }
}

minhaFuncao();
```

Neste exemplo, a função minhaFuncao é definida como assíncrona e usa a palavra-chave await para aguardar a conclusão de cada operação assíncrona. O código fica mais linear e fácil de entender.

Utilizar essas técnicas pode ajudar a evitar a Callback Hell e tornar o código assíncrono mais legível e organizado. É importante escolher a abordagem que melhor se adapte ao seu projeto e ao estilo de codificação preferido.

*Funções assíncronas:

As funções assíncronas são introduzidas no ECMAScript 2017 (ES8) e fornecem uma sintaxe mais limpa e concisa para lidar com código assíncrono. Elas são marcadas com a palavra-chave async e podem usar a palavra-chave await para esperar a conclusão de uma operação assíncrona. Aqui está um exemplo de função assíncrona:

```javascript
function operacaoAssincrona() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const resultado = 42;
      resolve(resultado);
    }, 2000);
  });
}

async function exemploAssincrono() {
  try {
    const resultado = await operacaoAssincrona();
    console.log('O resultado é:', resultado);
  } catch (erro) {
    console.log('Ocorreu um erro:', erro);
  }
}

exemploAssincrono();
```

Neste exemplo, a função operacaoAssincrona retorna uma Promise que é resolvida após 2 segundos. A função exemploAssincrono é marcada como async e usa a palavra-chave await para aguardar a conclusão da operação assíncrona. O código dentro do bloco try será executado quando a Promise for resolvida e qualquer erro será capturado pelo bloco catch.

A vantagem das funções assíncronas é que elas tornam o código mais legível e fácil de entender, evitando o aninhamento excessivo de callbacks. Além disso, as funções assíncronas retornam uma Promise, o que permite um tratamento mais consistente de erros e facilita a composição de várias operações assíncronas.

Uma função assíncrona sempre retorna uma Promise. Seu valor de retorno será resolvido como o valor da Promise quando a função assíncrona for concluída. Se a função assíncrona retornar um valor diretamente, esse valor será resolvido como o resultado da Promise. Se a função assíncrona lançar uma exceção, a Promise será rejeitada com o valor lançado.

```javascript
async function minhaFuncaoAssincrona() {
  return 42; // Retorna uma Promise resolvida com o valor 42
}

minhaFuncaoAssincrona().then(resultado => {
  console.log(resultado); // Imprime 42
});
```

Dentro de funções assíncronas, você pode usar blocos try-catch para capturar e tratar erros. Se uma exceção for lançada dentro de uma função assíncrona, a Promise será rejeitada com o valor da exceção, permitindo que você a capture e a trate adequadamente.

```javascript
async function minhaFuncaoAssincrona() {
  try {
    const resultado = await minhaOperacaoAssincrona();
    // Restante do código
  } catch (erro) {
    console.log('Ocorreu um erro:', erro);
  }
}
```

No exemplo acima, qualquer exceção lançada dentro da função minhaOperacaoAssincrona será capturada pelo bloco catch e tratada dentro da função minhaFuncaoAssincrona.

As funções assíncronas também permitem que você execute várias operações assíncronas em paralelo. Você pode usar a função Promise.all para aguardar a conclusão de várias Promises e obter os resultados combinados.

```javascript
async function minhaFuncaoAssincrona() {
  const resultado1 = minhaOperacaoAssincrona1();
  const resultado2 = minhaOperacaoAssincrona2();
  
  const [res1, res2] = await Promise.all([resultado1, resultado2]);
  console.log(res1, res2);
}
```

Neste exemplo, minhaFuncaoAssincrona aguarda a conclusão de minhaOperacaoAssincrona1 e minhaOperacaoAssincrona2 em paralelo usando Promise.all. Os resultados são desestruturados para as variáveis res1 e res2 para uso posterior.

Funções assíncronas facilitam a escrita de código assíncrono em JavaScript, fornecendo uma sintaxe mais clara e estruturada. Elas combinam os benefícios das Promises com a facilidade de leitura e escrita do código síncrono. É uma prática recomendada adotar funções assíncronas sempre que você precisar lidar com operações assíncronas complexas ou encadeadas.

## Promises e async/await

As Promises e as palavras-chave async e await são recursos poderosos do JavaScript para lidar com código assíncrono. Ambos fornecem uma abordagem mais estruturada e legível para lidar com operações assíncronas em comparação com o uso de callbacks. Aqui está uma explicação mais detalhada sobre Promises e async/await:

*Promises:

Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. Ela pode estar em um dos três estados: pendente (pending), resolvida (fulfilled) ou rejeitada (rejected).

Uma Promise é construída utilizando o construtor Promise, que recebe uma função executora como argumento. Essa função executora tem dois parâmetros: resolve e reject.

```javascript
const minhaPromise = new Promise((resolve, reject) => {
  // Lógica assíncrona
  if (sucesso) {
    resolve(resultado); // Resolvendo a Promise com um valor
  } else {
    reject(erro); // Rejeitando a Promise com um erro
  }
});

minhaPromise
  .then(resultado => {
    // Manipular o resultado quando a Promise for resolvida
  })
  .catch(erro => {
    // Manipular o erro quando a Promise for rejeitada
  });
```

Dentro da função executora, você realiza a lógica assíncrona desejada. Se a operação assíncrona for concluída com sucesso, você chama a função resolve e passa o valor que deseja retornar. Se ocorrer um erro ou falha, você chama a função reject e passa o motivo do erro, geralmente um objeto Error.

O método then() é usado para definir uma função de callback que será executada quando a Promise for resolvida com sucesso. Essa função recebe o valor resolvido como argumento.

O método catch() é usado para definir uma função de callback que será executada quando a Promise for rejeitada. Essa função recebe o motivo de rejeição (normalmente um objeto Error) como argumento.

As Promises também suportam outros métodos, como finally(), que permite definir uma função de callback a ser executada independentemente da Promise ter sido resolvida ou rejeitada, e Promise.all(), que recebe um array de Promises e retorna uma nova Promise que é resolvida quando todas as Promises no array forem resolvidas, ou rejeitada se pelo menos uma delas for rejeitada.

O método Promise.all() é um recurso poderoso que permite trabalhar com um conjunto de Promises e aguardar a conclusão de todas elas. Ele retorna uma nova Promise que é resolvida quando todas as Promises fornecidas forem resolvidas, ou rejeitada se pelo menos uma delas for rejeitada.

A sintaxe básica do Promise.all() é a seguinte:

```javascript
Promise.all([promise1, promise2, ...])
  .then((results) => {
    // Manipular os resultados quando todas as Promises forem resolvidas
  })
  .catch((error) => {
    // Manipular o erro se alguma das Promises for rejeitada
  });
```

O método Promise.all() recebe um array de Promises como argumento. Essas Promises podem ser criadas anteriormente ou geradas dinamicamente. Ele retorna uma nova Promise que aguarda a resolução de todas as Promises do array.

Quando todas as Promises forem resolvidas com sucesso, o método then() é chamado, recebendo um array com os resultados das Promises resolvidas na mesma ordem em que foram fornecidas. Você pode manipular esses resultados como desejar.

Se qualquer uma das Promises no array for rejeitada, o método catch() é chamado com o motivo da primeira Promise rejeitada. Nesse caso, você pode tratar o erro de acordo com suas necessidades.

O método Promise.all() é útil quando você precisa aguardar a conclusão de várias operações assíncronas independentes e só deseja continuar quando todas forem concluídas. Ele pode ser usado em casos como fazer várias chamadas de API em paralelo, processar vários arquivos simultaneamente ou qualquer situação em que você precise aguardar várias Promises antes de prosseguir.

Vale ressaltar que, se uma das Promises for rejeitada, o Promise.all() interromperá a execução e retornará imediatamente com a Promise rejeitada. As outras Promises continuarão sendo executadas em segundo plano, mas os resultados não serão mais capturados pelo Promise.all(). Se você precisa lidar com erros individuais para cada Promise, é recomendável usar o catch() individualmente em cada Promise, em vez de usar o Promise.all().

A vantagem das Promises é que elas fornecem uma sintaxe mais limpa e estruturada para lidar com código assíncrono, evitando o aninhamento excessivo de callbacks e facilitando o tratamento de erros. Além disso, as Promises são nativas do JavaScript e amplamente suportadas em navegadores modernos e ambientes Node.js.

*Async/await:

As palavras-chave async e await foram introduzidas no ECMAScript 2017 (ES8) como uma sintaxe mais amigável para lidar com Promises. A palavra-chave async é usada para declarar uma função assíncrona, que retorna uma Promise. A palavra-chave await é usada dentro de uma função assíncrona para pausar a execução e aguardar a conclusão de uma Promise. Isso permite que você escreva código assíncrono de forma síncrona, tornando-o mais legível e estruturado.

```javascript
async function minhaFuncao() {
  try {
    const resultado = await minhaPromise;
    // Manipular o resultado quando a Promise for resolvida
  } catch (erro) {
    // Manipular o erro quando a Promise for rejeitada
  }
}

minhaFuncao();
```

Dentro da função minhaFuncao, o await é usado para pausar a execução até que a Promise minhaPromise seja resolvida ou rejeitada. Isso permite que você trabalhe com o resultado diretamente, como se estivesse escrevendo código síncrono.

Uma das principais vantagens do async/await é que ele ajuda a evitar a Callback Hell, tornando o código mais linear e legível. Além disso, o uso de try/catch dentro das funções assíncronas facilita o tratamento de erros de forma mais clara.

É importante notar que a utilização de await só é permitida dentro de funções assíncronas. Caso você tente usar await fora de uma função assíncrona, ocorrerá um erro de sintaxe.

Async/await oferece várias vantagens, como:

1. Código mais legível: A sintaxe async/await torna o código mais fácil de ler e entender, pois se parece com código síncrono tradicional.

2. Lida com erros de forma mais intuitiva: Você pode usar o bloco try/catch para tratar erros de forma mais clara e estruturada.

3. Encadeamento mais simples: Você pode encadear chamadas assíncronas usando o await, o que facilita a leitura e o controle do fluxo de execução.

No entanto, é importante lembrar que o uso de async/await não substitui completamente o uso de Promises. Async/await é apenas uma sintaxe mais amigável para trabalhar com Promises, e as Promises ainda são a base subjacente do comportamento assíncrono em JavaScript.

## Trabalhando com requisições HTTP


Para fazer requisições HTTP em JavaScript, você pode usar a API nativa fetch() ou bibliotecas de terceiros como Axios ou jQuery.ajax. Vou explicar como fazer uma requisição usando a API fetch(), que é suportada na maioria dos navegadores modernos.

A função fetch() retorna uma Promise que representa a resposta da requisição. Você pode encadear métodos then() para manipular a resposta da requisição.

Aqui está um exemplo básico de como fazer uma requisição GET usando fetch():

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Erro na requisição');
    }
  })
  .then(data => {
    // Manipular os dados da resposta
    console.log(data);
  })
  .catch(error => {
    // Tratar erros
    console.error(error);
  });
```

Nesse exemplo, passamos a URL desejada para a função fetch(). Em seguida, encadeamos o método then() para tratar a resposta da requisição. Dentro do primeiro then(), verificamos se a resposta foi bem-sucedida (código de status 2xx) usando a propriedade ok do objeto response. Se for, chamamos o método json() para obter os dados da resposta como um objeto JSON. Caso contrário, lançamos um erro.

Em seguida, encadeamos outro then() para manipular os dados da resposta. Nesse exemplo, apenas imprimimos os dados no console, mas você pode realizar qualquer manipulação desejada.

Por fim, encadeamos o método catch() para tratar erros que possam ocorrer durante a requisição ou no processamento da resposta. Nele, você pode realizar qualquer ação desejada para lidar com os erros, como exibir uma mensagem de erro para o usuário ou registrar o erro em algum serviço de log.

É importante mencionar que a função fetch() é assíncrona e retorna uma Promise, portanto, você pode usar async/await para escrever um código mais síncrono ao lidar com requisições assíncronas. Aqui está um exemplo usando async/await:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    const data = await response.json();
    // Manipular os dados da resposta
    console.log(data);
  } catch (error) {
    // Tratar erros
    console.error(error);
  }
}

fetchData();
```

Nesse exemplo, definimos uma função assíncrona fetchData() e usamos await para esperar a resolução da Promise retornada pela função fetch(). Em seguida, tratamos a resposta e os erros da mesma maneira que no exemplo anterior.

Essas são as maneiras básicas de fazer requisições HTTP em JavaScript usando a API fetch(). Você pode personalizar as requisições, incluindo cabeçalhos, método HTTP, enviar dados no corpo da requisição e muito mais. Consulte a documentação da API fetch() para obter mais detalhes e recursos avançados.

*Opções da função fetch()*

Você pode passar um segundo parâmetro opcional para a função fetch(), que é um objeto de opções para personalizar a requisição. Alguns exemplos de opções comuns incluem:

1. method: Especifica o método HTTP a ser usado na requisição, como "GET", "POST", "PUT", "DELETE", entre outros.
2. headers: Permite definir cabeçalhos HTTP adicionais para a requisição, como cabeçalhos de autenticação ou de conteúdo.
3. body: Permite enviar dados no corpo da requisição, como parâmetros de formulário ou um payload JSON.

Aqui está um exemplo de como utilizar opções em uma requisição fetch():

```javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  },
  body: JSON.stringify({ name: 'John', age: 30 })
})
.then(response => {
  // Manipular a resposta da requisição
})
.catch(error => {
  // Tratar erros
});
```

*Trabalhando com cabeçalhos de resposta*

A resposta retornada pela função fetch() contém informações sobre a requisição e a resposta, incluindo cabeçalhos. Você pode acessar os cabeçalhos da resposta usando os métodos response.headers.get() ou response.headers.getAll().

```javascript
fetch('https://api.example.com/data')
.then(response => {
  const contentType = response.headers.get('Content-Type');
  console.log(contentType);
})
.catch(error => {
  // Tratar erros
});
```

*Upload e download de arquivos*

A API fetch() também permite fazer upload e download de arquivos. Para fazer upload de um arquivo, você pode usar a opção body com um objeto FormData. Para fazer download de um arquivo, você pode usar o método response.blob() para obter o arquivo como um objeto Blob e, em seguida, manipulá-lo de acordo com suas necessidades.

*Tratamento de erros e timeouts*

Além do uso do catch() para capturar erros nas Promises retornadas por fetch(), você também pode lidar com erros de rede ou timeouts usando o evento error do objeto Response. Para timeouts, você pode usar a função setTimeout() em conjunto com o método abort() do objeto AbortController.

# Manipulação de Formulários

- Validação de entrada de dados em formulários.
- Envio de dados para um servidor.
- Trabalhando com formulários dinâmicos.

## Validação de entrada de dados em formulários

A validação de entrada de dados em formulários é uma parte importante do desenvolvimento de aplicações web para garantir que os dados fornecidos pelos usuários atendam aos requisitos esperados. O JavaScript oferece diversas técnicas para realizar essa validação de forma eficiente e amigável. Vamos explorar algumas dessas técnicas:

1. Validação no lado do cliente:

A validação no lado do cliente é realizada pelo navegador do usuário antes que os dados sejam enviados para o servidor. Ela oferece uma experiência de usuário mais rápida, evitando a necessidade de enviar os dados para o servidor e esperar por uma resposta para validar os campos do formulário.
Aqui estão algumas formas de realizar a validação no lado do cliente:

Utilizando os atributos required, pattern, min, max, entre outros, do HTML5: O HTML5 introduziu novos atributos para campos de formulário que podem ser utilizados para especificar validações básicas, como campos obrigatórios, padrões de entrada, valores mínimos e máximos, entre outros. Esses atributos são verificados automaticamente pelo navegador.

```html
<form id="myForm">
  <input type="text" id="name" required>
  <input type="email" id="email" required>
  <button type="submit">Enviar</button>
</form>
```

Utilizando expressões regulares (regex): As expressões regulares são padrões de busca utilizados para validar strings. Você pode utilizar expressões regulares para realizar validações mais complexas nos campos do formulário, como formato de e-mail, número de telefone, entre outros. O JavaScript possui a classe RegExp para trabalhar com expressões regulares.

```javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
    // Email inválido
    alert('Por favor, insira um email válido.');
    return;
  }

  // Email válido, enviar o formulário
  form.submit();
});
```

Neste exemplo, utilizamos a expressão regular /^[^\s@]+@[^\s@]+\.[^\s@]+$/ para validar o formato do e-mail. A expressão regular verifica se o campo do e-mail possui pelo menos um caractere antes e depois do símbolo "@" e se possui um ponto "." seguido por mais caracteres. Se o valor do campo de e-mail estiver em branco ou não corresponder ao padrão definido pela expressão regular, exibimos uma mensagem de alerta.

Utilizando funções de validação personalizadas: Você pode criar suas próprias funções de validação personalizadas em JavaScript para verificar as entradas dos campos do formulário. Essas funções podem ser chamadas no evento de envio do formulário ou no evento de perda de foco de um campo específico.

```javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  if (nameInput.validity.valueMissing || emailInput.validity.valueMissing) {
    // Campo obrigatório não preenchido
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  if (!emailInput.validity.valid) {
    // Email inválido
    alert('Por favor, insira um email válido.');
    return;
  }

  // Todos os campos estão válidos, enviar o formulário
  form.submit();
});
```

Neste exemplo, utilizamos os atributos required e type="email" para definir que os campos name e email são obrigatórios. No JavaScript, utilizamos o evento submit para capturar o envio do formulário. Em seguida, verificamos as propriedades validity dos campos para determinar se eles estão preenchidos e se o formato do email é válido. Se alguma validação falhar, exibimos uma mensagem de alerta.

2. Validação no lado do servidor:

A validação no lado do servidor é realizada no servidor antes de processar os dados enviados pelo formulário. Ela é uma camada adicional de segurança e é fundamental, já que a validação no lado do cliente pode ser contornada ou desativada.
No lado do servidor, você pode utilizar a linguagem de programação e o framework que estiver utilizando para realizar a validação dos dados do formulário. Geralmente, essa validação envolve a verificação de campos obrigatórios, a validação de formatos de dados, como e-mails e números de telefone, e a proteção contra ataques, como injeção de código SQL.

A validação no lado do servidor é particularmente importante quando os dados do formulário serão armazenados no banco de dados ou processados ​​de alguma forma crítica.

É recomendado realizar a validação tanto no lado do cliente quanto no lado do servidor para garantir a integridade dos dados e fornecer uma experiência de usuário segura e amigável.

No JavaScript, você pode usar uma combinação de validação no lado do cliente e no lado do servidor para garantir a integridade dos dados do formulário e fornecer uma experiência de usuário robusta.

```javascript
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/submit', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;

  if (!name || !email) {
    // Campo obrigatório não preenchido
    return res.status(400).send('Por favor, preencha todos os campos obrigatórios.');
  }

  if (!validateEmail(email)) {
    // Email inválido
    return res.status(400).send('Por favor, insira um email válido.');
  }

  // Dados válidos, processar o formulário
  // ...

  res.status(200).send('Formulário enviado com sucesso!');
});

function validateEmail(email) {
  // Verificação do formato de email utilizando uma expressão regular
  const emailRegex = /^[\w-]+(\.[\w-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
  return emailRegex.test(email);
}

app.listen(3000, function() {
  console.log('Servidor iniciado na porta 3000');
});
```

Neste exemplo, utilizamos o framework Express para criar um servidor HTTP básico. O formulário é submetido para a rota /submit usando o método HTTP POST. No callback da rota, capturamos os valores do nome e email enviados pelo formulário. Em seguida, realizamos as validações necessárias. Se alguma validação falhar, retornamos uma resposta com o código de status 400 e uma mensagem de erro. Se todos os dados forem válidos, podemos processar o formulário ou realizar outras ações desejadas.

## Envio de dados para um servidor

Para enviar dados para um servidor em JavaScript, você pode usar a API Fetch ou a antiga técnica XMLHttpRequest. Vou fornecer exemplos usando ambas as abordagens.

1. Usando a API Fetch (recomendado):

A API Fetch é uma interface moderna para fazer requisições HTTP. Ela é suportada na maioria dos navegadores modernos.

A função fetch() retorna uma Promise que resolve para um objeto Response representando a resposta da requisição. Você pode usar os métodos .then() e .catch() para tratar a resposta e possíveis erros. O método .json() é comumente usado para extrair e converter a resposta em formato JSON.

Além disso, você pode personalizar a requisição adicionando cabeçalhos, definindo o método HTTP adequado (GET, POST, PUT, DELETE, etc.) e fornecendo um objeto de configuração com as opções desejadas.

```javascript
const formData = new FormData();
formData.append('nome', 'John Doe');
formData.append('email', 'johndoe@example.com');

fetch('https://api.example.com/endpoint', {
  method: 'POST',
  body: formData
})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Erro na requisição.');
    }
  })
  .then(data => {
    console.log('Resposta do servidor:', data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
```

Nesse exemplo, criamos um objeto FormData para encapsular os dados que serão enviados para o servidor. Em seguida, usamos a função fetch para fazer uma requisição HTTP POST para o URL especificado. Passamos o método POST e o objeto FormData como corpo da requisição.

Ao receber a resposta do servidor, verificamos se a resposta foi bem-sucedida (código de status 200-299). Se for o caso, convertemos a resposta em formato JSON. Caso contrário, lançamos um erro. Por fim, lidamos com os dados ou erros retornados na função then e catch, respectivamente.

2. Usando XMLHttpRequest (abordagem mais antiga):

A técnica XMLHttpRequest foi amplamente usada antes da introdução da API Fetch e ainda é suportada pelos navegadores modernos.

No exemplo usando XMLHttpRequest, você cria uma instância do objeto XMLHttpRequest, configura a requisição definindo o método HTTP, o URL, os cabeçalhos e os parâmetros. Em seguida, você define a função onreadystatechange para lidar com a resposta do servidor quando o estado da requisição mudar.

A propriedade readyState do objeto XMLHttpRequest representa o estado atual da requisição. O valor 4 indica que a requisição foi concluída. O código de status da resposta pode ser acessado pela propriedade status, e o conteúdo da resposta está disponível em responseText ou responseXML, dependendo do tipo de resposta.

```javascript
const xhr = new XMLHttpRequest();
const url = 'https://api.example.com/endpoint';
const params = 'nome=John%20Doe&email=johndoe@example.com';

xhr.open('POST', url, true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log('Resposta do servidor:', data);
    } else {
      console.error('Erro na requisição.');
    }
  }
};

xhr.send(params);
```

Nesse exemplo, criamos uma instância do objeto XMLHttpRequest e configuramos a requisição HTTP para usar o método POST e o URL especificado. Definimos o cabeçalho Content-type como application/x-www-form-urlencoded, que é o formato padrão para envio de dados de formulário.

Em seguida, definimos a função onreadystatechange para tratar a resposta do servidor quando o estado da requisição mudar. Verificamos se o estado da requisição é 4 (completo) e se o status é 200 (bem-sucedido). Se for o caso, convertemos a resposta em formato JSON e lidamos com os dados. Caso contrário, exibimos um erro.

Por fim, enviamos a requisição com os parâmetros usando o método send.

## Trabalhando com formulários dinâmicos
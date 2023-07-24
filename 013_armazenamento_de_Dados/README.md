# Armazenamento de Dados

- Utilização de Local Storage e Session Storage.
- Trabalhando com cookies.
- Utilização de bancos de dados no navegador (IndexedDB).

## Utilização de Local Storage e Session Storage

O Local Storage e Session Storage são recursos do JavaScript que permitem armazenar dados no navegador do usuário. Ambos oferecem uma maneira simples de armazenar dados persistentes ou temporários, respectivamente, que ficam disponíveis mesmo após a página ser recarregada ou fechada. Vamos entender como cada um deles funciona:

* Local Storage:

O Local Storage é uma área de armazenamento permanente no navegador que permite armazenar dados sem data de expiração. Isso significa que os dados armazenados no Local Storage ficam disponíveis mesmo após o fechamento do navegador e reinicialização do computador. Os dados só serão removidos se o usuário limpar o cache ou se você explicitamente removê-los via código.
Para utilizar o Local Storage, você pode usar os métodos localStorage.setItem(key, value) para definir um valor e localStorage.getItem(key) para obter o valor associado a uma chave.

Exemplo de utilização do Local Storage:

```javascript
// Salvando um valor no Local Storage
localStorage.setItem('username', 'john_doe');

// Recuperando o valor do Local Storage
const username = localStorage.getItem('username');
console.log(username); // "john_doe"
```

* Session Storage:

O Session Storage funciona de forma semelhante ao Local Storage, mas com a diferença de que os dados armazenados no Session Storage são válidos apenas para a sessão atual do navegador. Ou seja, os dados permanecem disponíveis enquanto a janela do navegador estiver aberta e são excluídos automaticamente quando a janela é fechada.

Para utilizar o Session Storage, você pode usar os métodos sessionStorage.setItem(key, value) para definir um valor e sessionStorage.getItem(key) para obter o valor associado a uma chave.

Exemplo de utilização do Session Storage:

```javascript
// Salvando um valor no Session Storage
sessionStorage.setItem('language', 'javascript');

// Recuperando o valor do Session Storage
const language = sessionStorage.getItem('language');
console.log(language); // "javascript"
```

Ambos os recursos são muito úteis quando você precisa armazenar informações temporárias ou permanentes no navegador do usuário, como preferências do usuário, configurações da aplicação, dados de login ou qualquer outra informação que precise persistir durante a navegação na sua aplicação web. Porém, lembre-se de que, por se tratar de um armazenamento local no navegador do usuário, não é recomendado armazenar informações sensíveis ou críticas, como senhas ou informações financeiras, nesses locais.

## Trabalhando com cookies

Trabalhar com cookies em JavaScript permite armazenar pequenas quantidades de informações no navegador do usuário. Os cookies são armazenados como pares chave-valor e têm a vantagem de serem enviados automaticamente pelo navegador em cada requisição para o mesmo domínio, permitindo assim que sejam utilizados para manter informações do usuário entre diferentes sessões no navegador. Vamos entender como trabalhar com cookies em JavaScript:

* Criando um cookie:

Para criar um cookie, você pode definir o cabeçalho Set-Cookie na resposta do servidor ou usar a propriedade document.cookie no JavaScript. A propriedade document.cookie é uma string que contém todos os cookies associados ao domínio. Para criar um novo cookie, basta atribuir um valor a essa propriedade, no formato "chave=valor". Você pode definir opções adicionais, como data de expiração, caminho e domínio, utilizando a sintaxe adequada.

Exemplo de criação de um cookie:

```javascript
document.cookie = "username=john_doe; expires=Fri, 31 Dec 2023 23:59:59 UTC; path=/";
```

Neste exemplo, criamos um cookie chamado "username" com o valor "john_doe", e definimos uma data de expiração para o dia 31 de dezembro de 2023 às 23:59:59 UTC. Além disso, definimos o caminho do cookie como "/" para que ele seja acessível em todo o site.

* Obtendo o valor de um cookie:

Para obter o valor de um cookie específico, você pode ler a propriedade document.cookie e fazer o parsing dos valores desejados. A propriedade document.cookie retorna todos os cookies associados ao domínio como uma única string, então você precisará fazer a separação dos pares chave-valor.

Exemplo de obtenção do valor de um cookie:

```javascript
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

const username = getCookie('username');
console.log(username); // "john_doe"
```

No exemplo acima, criamos uma função getCookie() que recebe o nome do cookie desejado e retorna o seu valor, ou null se o cookie não for encontrado.

* Excluindo um cookie:

Para excluir um cookie, você pode definir a data de expiração do cookie como uma data passada. Isso fará com que o cookie seja automaticamente removido pelo navegador.

Exemplo de exclusão de um cookie:

```javascript
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```

Neste exemplo, definimos a data de expiração do cookie "username" como uma data no passado, fazendo com que o cookie seja removido pelo navegador.

É importante ressaltar que a propriedade document.cookie é apenas uma string e não permite acesso direto aos cookies individuais. Você precisa manipular os cookies manualmente, lendo, definindo e excluindo-os conforme necessário.

Além disso, os cookies têm algumas limitações, como o tamanho máximo de armazenamento, que é geralmente limitado a cerca de 4KB. Se você precisa armazenar uma grande quantidade de dados, outras opções, como Local Storage ou Session Storage, podem ser mais adequadas.

Por fim, lembre-se de que os cookies podem ser acessados ​​tanto pelo lado do cliente quanto pelo lado do servidor, portanto, tome cuidado ao armazenar informações sensíveis em cookies e garanta que eles sejam usados apenas para fins apropriados.

## Utilização de bancos de dados no navegador (IndexedDB)

O IndexedDB é um banco de dados embutido no navegador que permite aos desenvolvedores armazenar e manipular grandes quantidades de dados de forma estruturada. É uma solução eficiente para armazenamento de dados no lado do cliente, especialmente quando você precisa trabalhar com informações que devem ser acessíveis offline ou para melhorar o desempenho e a experiência do usuário.

O IndexedDB é uma API assíncrona e baseada em eventos, o que significa que as operações de leitura e gravação de dados são feitas de forma não bloqueante, evitando que a interface do usuário seja travada durante o processamento das operações.

* Criando ou abrindo o banco de dados:

Para começar a usar o IndexedDB, você precisa criar ou abrir um banco de dados. Se o banco de dados não existir, ele será criado. Se já existir, o banco de dados será aberto.

```javascript
const request = indexedDB.open('MeuBancoDeDados', 1);

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore('minhaTabela', { keyPath: 'id', autoIncrement: true });
};
```

No exemplo acima, criamos ou abrimos um banco de dados chamado "MeuBancoDeDados" com a versão 1. Na função onupgradeneeded, verificamos se o banco de dados precisa ser atualizado (por exemplo, se você estiver alterando a estrutura do banco de dados ou adicionando novos objetos). Se necessário, criamos uma tabela chamada "minhaTabela" com uma chave primária autoincrementada chamada "id".

* Adicionando e lendo dados no banco de dados:

Uma vez que o banco de dados foi criado ou aberto, você pode adicionar e ler dados dele.

```javascript
request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction('minhaTabela', 'readwrite');
  const objectStore = transaction.objectStore('minhaTabela');

  const data = { nome: 'João', idade: 25 };
  const addRequest = objectStore.add(data);

  addRequest.onsuccess = function() {
    console.log('Dados adicionados com sucesso!');
  };
};
```

Neste exemplo, abrimos uma transação de leitura e escrita na tabela "minhaTabela" e adicionamos um objeto de dados ao banco de dados.

* Lendo todos os dados do banco de dados:

Para ler todos os dados do banco de dados, você pode usar o método openCursor().

```javascript
request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction('minhaTabela', 'readonly');
  const objectStore = transaction.objectStore('minhaTabela');
  const request = objectStore.openCursor();

  request.onsuccess = function(event) {
    const cursor = event.target.result;
    if (cursor) {
      console.log(cursor.value); // Dados de um registro
      cursor.continue(); // Continua para o próximo registro
    }
  };
};
```

* Atualizando e excluindo dados:

Para atualizar ou excluir dados no banco de dados, você pode usar os métodos put() e delete() do objeto store.

```javascript
request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction('minhaTabela', 'readwrite');
  const objectStore = transaction.objectStore('minhaTabela');

  // Atualizar dados
  const updateRequest = objectStore.put({ id: 1, nome: 'Maria', idade: 30 });
  
  // Excluir dados
  const deleteRequest = objectStore.delete(2);

  updateRequest.onsuccess = function() {
    console.log('Dados atualizados com sucesso!');
  };
  
  deleteRequest.onsuccess = function() {
    console.log('Dados excluídos com sucesso!');
  };
};
```

O IndexedDB é uma poderosa ferramenta para armazenar e manipular dados no navegador. No entanto, é importante ressaltar que o IndexedDB possui uma curva de aprendizado um pouco mais íngreme em comparação com outras opções de armazenamento local, como Local Storage e Session Storage. Ele é mais adequado para aplicações web que precisam lidar com grandes quantidades de dados ou quando se faz necessário um mecanismo de busca mais sofisticado.

Certifique-se de que o suporte ao IndexedDB seja adequado para os navegadores que você pretende atender. Para verificar a compatibilidade, você pode usar ferramentas como "caniuse.com" ou verificar a documentação atualizada dos navegadores.
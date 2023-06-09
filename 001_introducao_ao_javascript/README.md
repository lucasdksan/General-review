# Introdução ao JavaScript

- Introdução ao JavaScript, sua história e aplicações.
- Configurando o ambiente de desenvolvimento.

## Introdução ao JavaScript, sua história e aplicações.

### O que é JavaScript

JavaScript é uma linguagem de script orientada a objetos, plataforma cruzada usada para tornar as páginas da Web interativas (por exemplo, com animações complexas, botões clicáveis, menus pop-up etc.), conhecida como uma linguagem de programação leve e interpretada. Há também versões mais avançadas do lado do servidor do JavaScript, como Node.js, que permitem adicionar mais funcionalidades a um site do que baixar arquivos (como colaboração em tempo real entre vários computadores). Dentro de um ambiente de host (por exemplo, um navegador da Web), o JavaScript pode ser conectado aos objetos de seu ambiente para fornecer controle programático sobre eles.

JavaScript tem uma biblioteca padrão de objetos, como: Array, Date, e Math, e um conjunto de elementos que formam o núcleo da linguagem, tais como: operadores, estruturas de controle e declarações. O núcleo do JavaScript pode ser estendido para uma variedade de propósitos, complementando assim a linguagem:

- O lado cliente do JavaScript estende-se do núcleo linguagem, fornecendo objetos para controlar um navegador web e seu Document Object Model (DOM). Por exemplo, as extensões do lado do cliente permitem que uma aplicação coloque elementos em um formulário HTML e responda a eventos do usuário, como cliques do mouse, entrada de formulário e de navegação da página.

- O lado do servidor do JavaScript estende-se do núcleo da linguagem, fornecendo objetos relevantes à execução do JavaScript em um servidor. Por exemplo, as extensões do lado do servidor permitem que uma aplicação comunique-se com um banco de dados, garantindo a continuidade de informações de uma chamada para a outra da aplicação, ou executar manipulações de arquivos em um servidor.

Isso significa que, no navegador, o JavaScript pode alterar a aparência da página da Web (DOM). E, da mesma forma, o JavaScript Node.js no servidor pode responder a solicitações personalizadas enviadas por código executado no navegador.

### História

O JavaScript 1.0 foi lançado em 1995, quando a internet ainda era uma invenção relativamente nova. O primeiro navegador da web, o Mosaic, havia sido lançado há apenas dois anos, e o HTML era a única ferramenta para construir sites - na época, o CSS ainda era uma proposta e não seria oficialmente lançado até 1996. Em vista disso, a criação de sites ainda era uma habilidade um tanto fácil de aprender, algo que era acessível não apenas a engenheiros de software, mas também a desenvolvedores e designers inexperientes.

Marc Andressen, o fundador do recém-lançado navegador Netscape, queria expandir as capacidades do navegador adicionando mais elementos dinâmicos. Ao mesmo tempo, ele queria que esses elementos estivessem disponíveis para o novo e crescente mercado de desenvolvedores amadores da web. Então, nasceu a ideia de criar uma linguagem de scripting simples e dinâmica, que um dia seria conhecida como JavaScript.

- Criação na Netscape:

Brendan Eich, o criador do JavaScript, foi contratado pela Netscape para criar uma linguagem de scripting baseada em navegador. De acordo com o artigoJavaScript: The First Twenty Years, publicado pela ACM em coautoria com Eich, essa tarefa foi dificultada devido à parceria entre a Netscape e a Sun Microsystems. Tinham como estratégia conjunta integrar a linguagem de programação Java da Sun ao Netscape 2.0 em uma tentativa de superar o Internet Explorer da Microsoft.

Como o lançamento da versão beta do Netscape 2.0 estava programado para setembro de 1995, Eich teve que agir rapidamente. O protótipo inicial - então denominado “Mocha” - foi criado em 10 dias em maio de 1995, tendo mais trabalho durante o verão para eliminar bugs, responder às solicitações de recursos e projetar APIs que permitissem ao Mocha interagir com o Netscape. Essas APIs estabeleceram as bases para o que seria conhecido como Document Object Model (DOM), uma interface-chave para interagir com documentos HTML e XML.

A disponibilidade do JavaScript na versão beta do Netscape 2.0 foi anunciada em umpress release de dezembro de 1995, que descreveu o JavaScript como:

projetado para criar aplicações centradas em rede;
complementar e integrado ao Java;
complementar e integrado ao HTML;
aberto e multiplataforma.
Na documentação inicial, o Netscape descreve os principais recursos do JavaScript para “reconhecer e responder a eventos do usuário, como cliques do mouse, entrada de formulário e navegação de página”. Isso possibilitou uma ampla gama de casos de uso, como:

solicitar o número de telefone ou código postal de um usuário;
alertar os usuários sobre entradas inválidas de formulários;
criar de caixas de seleção;
adicionar botões de “voltar” para navegar facilmente em sites;
preservar o estado entre as páginas da web para rastrear as ações do usuário; e
reproduzir animações, textos de rolagem ou arquivos de áudio.

### Aplicações

* Adicionar comportamento interativo nas páginas da web
* Criar página na web e apps
* Construir web servers e desenvolver aplicações
* Desenvolvimento de jogos

## Configurando o ambiente de desenvolvimento.

- Instale um editor de texto: Escolha um editor de texto adequado para desenvolvimento JavaScript, como o Visual Studio Code, Atom, Sublime Text, ou qualquer outro de sua preferência. Certifique-se de que o editor escolhido ofereça recursos avançados para edição de código, como realce de sintaxe e autocompletar.

**JavaScript, além de uma linguagem muito completa, possui diversos modos de ser utilizada. Uma dessas maneiras é rodando via Node.js, um ambiente de execução de JavaScript utilizado para criar ferramentas de linha de comando, sistemas no backend, interação com hardware e mais.**

**Minha recomendação seria usar o Visual Studio Code link: https://code.visualstudio.com/download**

- Instale o Node.js: O Node.js permite que você execute JavaScript fora do navegador, facilitando o desenvolvimento de aplicativos do lado do servidor. Acesse o site oficial do Node.js (https://nodejs.org) e baixe a versão mais recente adequada para o seu sistema operacional. Siga as instruções de instalação para concluí-la.

- Crie uma pasta para o seu projeto: Escolha um diretório em seu computador onde você deseja armazenar seus projetos JavaScript. Crie uma nova pasta nesse diretório e dê um nome significativo para o seu projeto.

- Abra o editor de texto: Abra o editor de texto que você instalou anteriormente e navegue até a pasta do seu projeto.

- Inicialize um projeto Node.js: Abra o terminal no seu editor de texto ou em qualquer terminal do sistema operacional. Navegue até a pasta do seu projeto usando o comando cd caminho/para/o/diretório/do/seu/projeto. Em seguida, execute o seguinte comando para inicializar um novo projeto Node.js:

```markdown
npm init -y
```

**Esse comando criará um arquivo package.json que gerenciará as dependências e configurações do seu projeto.**

- Instale bibliotecas e dependências: Dependendo das necessidades do seu projeto, você pode precisar instalar bibliotecas ou pacotes adicionais. Use o comando npm install seguido do nome do pacote para instalá-lo. Por exemplo:


```markdown
npm install nome-do-pacote
```

- Comece a escrever código JavaScript: Agora você está pronto para começar a escrever seu código JavaScript. Crie um novo arquivo com a extensão .js dentro da pasta do seu projeto e comece a escrever seu código JavaScript.

- Execute o código JavaScript: Para executar seu código JavaScript, você pode usar o Node.js no terminal. Navegue até a pasta do seu projeto e execute o seguinte comando:

```markdown
node nome-do-arquivo.js
```

Isso executará o arquivo JavaScript no Node.js e você verá a saída no terminal.

Esses são os passos básicos para configurar o ambiente de desenvolvimento JavaScript. À medida que você progride, pode explorar ferramentas adicionais, como sistemas de construção (por exemplo, webpack), frameworks (por exemplo, React, Angular, Vue.js) e testadores (por exemplo, Jest, Mocha), dependendo dos requisitos do seu projeto.
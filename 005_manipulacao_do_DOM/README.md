# Manipulação do DOM

- Acesso e manipulação de elementos HTML.
- Manipulação de eventos.
- Modificação dinâmica do conteúdo da página.

## Acesso e manipulação de elementos HTML.

Para acessar e manipular elementos HTML em JavaScript, você pode usar o Document Object Model (DOM), que é uma representação em forma de árvore de todos os elementos HTML em uma página. O DOM permite que você interaja com os elementos, altere seus atributos, conteúdo e estilos, e responda a eventos.

1. Acesso por ID:

Você pode acessar um elemento HTML por seu atributo id usando o método getElementById().

Exemplo:

```javascript
    const element = document.getElementById('myElement');
```

2. Acesso por classe:

Você pode acessar elementos HTML com uma determinada classe usando o método getElementsByClassName().

Exemplo:

```javascript
    const elements = document.getElementsByClassName('myClass');
```

3. Acesso por nome de tag:

Você pode acessar elementos HTML com um determinado nome de tag usando o método getElementsByTagName().

Exemplo:

```javascript
    const elements = document.getElementsByTagName('div');
```

4. Acesso por seletor CSS:

Você pode acessar elementos HTML usando seletores CSS com o método querySelector() ou querySelectorAll().

Exemplo:

```javascript
    const element = document.querySelector('.myClass');
    const elements = document.querySelectorAll('div');
```

Depois de acessar um elemento, você pode manipulá-lo de várias maneiras:

Alterando o conteúdo HTML: Você pode modificar o conteúdo HTML de um elemento usando a propriedade innerHTML.

Exemplo:

```javascript
    element.innerHTML = '<h1>Novo Título</h1>';
```
Modificando atributos: Você pode alterar os atributos de um elemento usando a propriedade setAttribute().

Exemplo:

```javascript
    element.setAttribute('src', 'image.jpg');
```

Alterando estilos CSS: Você pode modificar os estilos CSS de um elemento usando a propriedade style.

Exemplo:

```javascript
    element.style.color = 'red';
    element.style.fontSize = '20px';
```

Adicionando ou removendo classes: Você pode adicionar ou remover classes de um elemento usando as propriedades classList.add() e classList.remove().

Exemplo:

```javascript
    element.classList.add('newClass');
    element.classList.remove('oldClass');
```

5. Acesso por seletores avançados:

Além dos seletores básicos, você pode usar seletores avançados para acessar elementos HTML com mais precisão. Alguns exemplos de seletores avançados incluem:

* Acesso por atributos: Você pode selecionar elementos com base em seus atributos usando seletores de atributos, como [attribute], [attribute=value] ou [attribute^=value].

Exemplo:

```javascript
    const elements = document.querySelectorAll('[data-category="fruit"]');
```

* Acesso por hierarquia: Você pode usar seletores de hierarquia para acessar elementos com base em sua relação com outros elementos, como o pai (parent > child) ou descendente (ancestor descendant).

Exemplo:

```javascript
    const elements = document.querySelectorAll('ul > li');
```

* Acesso por pseudo-classes: Você pode usar pseudo-classes para selecionar elementos com base em estados específicos, como :hover, :focus, :first-child, entre outros.

Exemplo:

```javascript
    const elements = document.querySelectorAll('input:focus');
```

6. Acesso a elementos aninhados:

O DOM permite acessar elementos HTML aninhados, ou seja, elementos que estão dentro de outros elementos. Você pode usar a propriedade parentNode para acessar o elemento pai e a propriedade childNodes para acessar os elementos filhos.

Exemplo:

```javascript
    const parentElement = element.parentNode;
    const childElements = parentElement.childNodes;
```

Essas são apenas algumas das maneiras de acessar e manipular elementos HTML usando JavaScript. O DOM oferece uma ampla gama de recursos e métodos para trabalhar com elementos HTML, permitindo que você crie interações dinâmicas e responsivas em suas páginas da web.

7. Traversing (navegação) no DOM:

Além de acessar elementos diretamente, você também pode navegar pelo DOM usando métodos como parentElement, nextSibling, previousSibling, firstChild e lastChild. Esses métodos permitem percorrer os elementos relacionados em uma determinada estrutura.

Exemplo:

```javascript
    const parent = document.querySelector('.parent');
    const firstChild = parent.firstChild;
    const nextSibling = firstChild.nextSibling;
```

## Manipulação de eventos.

A manipulação de eventos é uma parte fundamental da programação JavaScript, permitindo que você responda a interações do usuário e execute ações específicas quando um evento ocorre. Vamos explorar mais a manipulação de eventos em JavaScript:

1. Adicionando um evento a um elemento:

Você pode adicionar um evento a um elemento HTML usando o método addEventListener(). Esse método recebe dois argumentos: o tipo de evento que você deseja capturar e uma função de retorno de chamada que será executada quando o evento ocorrer.

Exemplo:

```javascript
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
    // Ação a ser executada quando o botão for clicado
    });
```

2. Tipos comuns de eventos:

Existem vários tipos de eventos que você pode capturar, dependendo da interação do usuário. Alguns dos eventos mais comuns incluem:

* click: ocorre quando um elemento é clicado.
* mouseover e mouseout: ocorrem quando o cursor do mouse entra e sai de um elemento.
* keyup e keydown: ocorrem quando uma tecla é pressionada e liberada no teclado.
* submit: ocorre quando um formulário é enviado.

Dentro da função de retorno de chamada, você pode acessar informações sobre o evento por meio do objeto event. Por exemplo, você pode acessar o elemento alvo do evento, as coordenadas do mouse ou as teclas pressionadas.

Exemplo:

```javascript
button.addEventListener('click', function(event) {
  event.preventDefault(); // Impede o comportamento padrão do botão
  console.log('O botão foi clicado!');
  console.log('Elemento alvo:', event.target);
});
```

3. Acessando informações do evento:

Ao manipular um evento, você pode acessar informações adicionais sobre o evento por meio do objeto event. Esse objeto contém propriedades e métodos relacionados ao evento que ocorreu, como o elemento alvo do evento, coordenadas do mouse, teclas pressionadas, entre outros.

Exemplo:

```javascript
    const link = document.getElementById('myLink');
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        console.log(event.target); // Exibe o elemento em que o evento ocorreu
    });
```

4. Removendo um evento:

Se você não precisar mais de um evento em um elemento, é recomendável removê-lo usando o método removeEventListener(). Isso evita vazamentos de memória e melhora o desempenho do seu código.

Exemplo:

```javascript
    const button = document.getElementById('myButton');
    const handleClick = function() {
    // Ação a ser executada quando o botão for clicado
    };
    button.addEventListener('click', handleClick);
    // Mais tarde, você pode remover o evento
    button.removeEventListener('click', handleClick);    
```

5. Delegação de eventos:

A delegação de eventos é uma técnica em que você adiciona um único manipulador de eventos a um elemento pai, em vez de adicionar manipuladores de eventos individuais a vários elementos filhos. Isso é útil quando você tem muitos elementos semelhantes que precisam do mesmo comportamento.

Exemplo:

```javascript
    const parentElement = document.getElementById('parent');
    parentElement.addEventListener('click', function(event) {
        if (event.target.classList.contains('child')) {
            // Ação a ser executada quando um elemento filho é clicado
        }
    });

```

6. Eventos adicionais:

Além do evento de clique, existem muitos outros eventos que você pode usar para interagir com os elementos da página, como mouseover, keydown, submit, entre outros. Você pode consultar a documentação do JavaScript para obter uma lista completa de eventos disponíveis.

A manipulação de eventos em JavaScript é fundamental para criar interações dinâmicas e responsivas em suas páginas da web. Com essas técnicas, você pode fazer com que seus elementos HTML respondam aos eventos do usuário, como cliques, pressionamentos de tecla, passagens do mouse e muito mais.

## Modificação dinâmica do conteúdo da página.

A modificação dinâmica do conteúdo da página em JavaScript permite que você atualize e altere o conteúdo HTML em tempo real, tornando sua página interativa e responsiva. Existem várias maneiras de realizar essa modificação dinâmica:

1. Manipulação do conteúdo de elementos HTML:

Você pode acessar e modificar o conteúdo de elementos HTML, como parágrafos, títulos, listas e divs, usando a propriedade innerHTML ou métodos específicos.

Exemplo:

```html
    <div id="myDiv">Olá, Mundo!</div>
```

```javascript
    const div = document.getElementById('myDiv');
    div.innerHTML = 'Olá, JavaScript!'; // Modifica o conteúdo da div
```

Nesse exemplo, o conteúdo da div com o ID "myDiv" é atualizado para "Olá, JavaScript!" usando a propriedade innerHTML.

2. Criação de elementos HTML:

Você pode criar novos elementos HTML dinamicamente e adicioná-los à página usando os métodos createElement() e appendChild().

Exemplo:

```html
    <div id="myContainer"></div>
```
```javascript
    const container = document.getElementById('myContainer');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Novo parágrafo adicionado!';
    container.appendChild(newParagraph);
```

Nesse exemplo, um novo elemento <p> é criado dinamicamente e seu conteúdo é definido como "Novo parágrafo adicionado!". Em seguida, esse novo elemento é anexado como um filho do elemento com o ID "myContainer".

3. Estilização de elementos HTML:

Além de modificar o conteúdo, você também pode alterar o estilo dos elementos HTML usando a propriedade style.

Exemplo:

```html
    <div id="myElement">Texto de exemplo</div>
```
```javascript
    const element = document.getElementById('myElement');
    element.style.color = 'red'; // Altera a cor do texto para vermelho
    element.style.fontSize = '20px'; // Altera o tamanho da fonte para 20 pixels
```

Nesse exemplo, o estilo do elemento com o ID "myElement" é modificado para ter cor vermelha e tamanho de fonte de 20 pixels.

4. Acesso e modificação de elementos HTML:

getElementById(): Você pode usar esse método para obter referência a um elemento HTML específico usando seu ID único. Depois de obter a referência, você pode modificar suas propriedades, como innerHTML, textContent, value, src, entre outras.
querySelector() e querySelectorAll(): Esses métodos permitem selecionar elementos HTML usando seletores CSS. Com o querySelector(), você obtém a primeira correspondência e com o querySelectorAll(), você obtém uma lista de todas as correspondências. Isso permite que você acesse e modifique elementos com base em sua classe, nome da tag, atributos, etc.

5. Criação de elementos HTML:

createElement(): Você pode usar esse método para criar um novo elemento HTML. Especifique o tipo de elemento que deseja criar, como 'div', 'p', 'span', etc.
appendChild(), prepend(), insertBefore(): Esses métodos permitem adicionar elementos criados dinamicamente à página. O appendChild() adiciona como o último filho de um elemento pai, o prepend() adiciona como o primeiro filho e o insertBefore() permite inserir um elemento antes de outro elemento existente.

6. Modificação de estilos:

A propriedade style permite modificar os estilos CSS de um elemento HTML. Você pode acessar e modificar propriedades individuais, como color, fontSize, backgroundColor, display, entre outras. Também é possível aplicar classes CSS a um elemento usando a propriedade classList.

7. Remoção de elementos:

O método remove() permite remover um elemento da página. Basta selecionar o elemento e chamar o método remove() nele.

8. Eventos:

Você pode adicionar eventos aos elementos HTML para responder a interações do usuário, como cliques, pressionamentos de teclas, passagem do mouse, etc. Isso é feito por meio dos chamados "event listeners" (ouvintes de eventos).
Por exemplo, você pode usar o método addEventListener() para adicionar um evento de clique a um botão e definir uma função que será executada quando o evento ocorrer.

9. Bibliotecas de manipulação do DOM:

Além das funcionalidades nativas de JavaScript para manipulação do DOM, existem bibliotecas populares, como jQuery, que fornecem uma sintaxe simplificada e recursos adicionais para trabalhar com elementos HTML.
Essas bibliotecas oferecem métodos e funções convenientes para selecionar elementos, modificar o conteúdo, manipular estilos, criar animações, realizar requisições AJAX, entre outras tarefas comuns de manipulação do DOM.

10. Considerações de desempenho:

Ao fazer alterações dinâmicas no conteúdo da página, é importante considerar o desempenho. Fazer muitas modificações sucessivas no DOM pode impactar o desempenho da página.
É recomendado realizar manipulações do DOM fora de loops e minimizar o número de alterações feitas no DOM sempre que possível. Uma técnica eficiente é criar uma representação em memória das modificações que deseja fazer e, em seguida, atualizar o DOM uma vez com as alterações consolidadas.
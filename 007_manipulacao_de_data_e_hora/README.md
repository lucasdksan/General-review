# Manipulação de Data e Hora

- Manipulação de datas e horas.
- Utilização de objetos Date e métodos relacionados.

## Manipulação de datas e horas

Manipular datas e horas em JavaScript pode ser feito usando o objeto Date embutido na linguagem. O objeto Date permite criar, manipular e exibir datas e horas de várias maneiras. Vou fornecer alguns exemplos de manipulação comuns abaixo.

1. Criando uma nova data:

```javascript
    // Criar uma nova data com a data e hora atuais
    const dataAtual = new Date();

    // Criar uma nova data com uma data e hora específicas (ano, mês, dia, hora, minuto, segundo)
    const dataEspecifica = new Date(2023, 5, 26, 10, 30, 0); // O mês é zero-indexed (0 = janeiro)

    // Criar uma nova data a partir de uma string no formato ISO 8601
    const dataString = new Date('2023-06-26T10:30:00');
```

2. Obtendo informações de data e hora: 

```javascript
    const data = new Date();

    const ano = data.getFullYear();
    const mes = data.getMonth(); // O mês é zero-indexed (0 = janeiro)
    const dia = data.getDate();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
```

Além das informações básicas como ano, mês, dia, hora, minuto e segundo, o objeto Date também oferece métodos para obter informações mais detalhadas, como o dia da semana, o número do dia do ano e o valor em milissegundos.

```javascript
    const data = new Date();

    const diaSemana = data.getDay(); // Retorna o dia da semana (0 = domingo, 1 = segunda, ..., 6 = sábado)
    const diaAno = data.getDayOfYear(); // Retorna o número do dia do ano (1 a 365 ou 366 em anos bissextos)
    const milissegundos = data.getTime(); // Retorna o valor em milissegundos desde 1º de janeiro de 1970 (timestamp)
```

3. Manipulando datas e horas:

```javascript
    const data = new Date();

    // Adicionar dias
    data.setDate(data.getDate() + 7);

    // Adicionar horas
    data.setHours(data.getHours() + 3);

    // Definir uma nova data e hora
    data.setFullYear(2024);
    data.setMonth(11); // 11 = dezembro
    data.setDate(25);
    data.setHours(0, 0, 0); // Define a hora para meia-noite (00:00:00)
```

O JavaScript não possui um conjunto nativo de formatação de data e hora, mas você pode usar bibliotecas externas, como o Moment.js ou o date-fns, para formatar datas e horas de maneira mais avançada. Essas bibliotecas oferecem uma variedade de opções de formatação e manipulação de datas.

Aqui está um exemplo usando o Moment.js:

```javascript
    const data = moment('2023-06-26T10:30:00');
    const formatoPersonalizado = data.format('DD/MM/YYYY HH:mm:ss');
    console.log(formatoPersonalizado);
```

4. Formatando datas e horas:

```javascript
    const data = new Date();

    const formatoPadrao = data.toString(); // Retorna uma string no formato padrão
    const formatoPersonalizado = data.toLocaleString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
```

5. Comparando datas:

Você pode comparar datas para determinar qual delas é anterior, posterior ou se são iguais. Isso pode ser útil, por exemplo, para verificar se uma data já passou ou calcular a diferença entre duas datas.

```javascript
    const dataAtual = new Date();
    const dataFutura = new Date('2024-12-31');

    if (dataFutura > dataAtual) {
        console.log('A data futura é posterior à data atual.');
    } else if (dataFutura < dataAtual) {
        console.log('A data futura é anterior à data atual.');
    } else {
        console.log('As datas são iguais.');
    }
```

6. Realizando cálculos com datas:

Para realizar cálculos com datas, como adicionar ou subtrair dias, meses ou anos, você pode usar os métodos do objeto Date. No entanto, manipulações mais complexas podem ser mais complicadas com o objeto Date nativo. Nesses casos, é recomendável usar bibliotecas de manipulação de datas, como o Moment.js ou o date-fns, que facilitam essas operações.

Aqui está um exemplo usando o Moment.js para adicionar 7 dias a uma data:

```javascript
    const data = moment('2023-06-26T10:30:00');
    const novaData = data.add(7, 'days');
    console.log(novaData.format('DD/MM/YYYY HH:mm:ss'));
```

O JavaScript permite realizar operações matemáticas com datas usando os métodos getTime() e setTime() do objeto Date. Esses métodos trabalham com timestamps, que são valores em milissegundos desde 1º de janeiro de 1970. Você pode realizar cálculos com timestamps e depois criar um novo objeto Date com o resultado.

```javascript
    const dataInicial = new Date();
    const dataFinal = new Date();
    const diferencaEmMilissegundos = dataFinal.getTime() - dataInicial.getTime();
    console.log(diferencaEmMilissegundos);

    const diferencaEmSegundos = diferencaEmMilissegundos / 1000;
    const diferencaEmMinutos = diferencaEmSegundos / 60;
    const diferencaEmHoras = diferencaEmMinutos / 60;
    const diferencaEmDias = diferencaEmHoras / 24;
    console.log(diferencaEmDias);
```

7. Parsing de datas:

O JavaScript permite analisar strings de data em diferentes formatos e criar objetos Date a partir delas. Para isso, você pode usar o construtor Date passando a string como argumento.

```javascript
    const dataString = '2023-06-26T10:30:00';
    const data = new Date(dataString);
    console.log(data);
```

8. Conversão para string:

Para exibir uma data como uma string formatada, você pode usar métodos específicos do objeto Date ou bibliotecas externas. O JavaScript nativo oferece os métodos toString() e toLocaleString().

```javascript
    const data = new Date();

    console.log(data.toString()); // Exibe a data em formato de string completo (exemplo: Wed Jun 26 2023 10:30:00 GMT-0700 (Pacific Daylight Time))
    console.log(data.toLocaleString()); // Exibe a data em formato de string localizada (exemplo: 6/26/2023, 10:30:00 AM)
```

9. Timezones:

O JavaScript usa o fuso horário do sistema para criar objetos Date por padrão. No entanto, é possível definir um fuso horário específico ao criar um objeto Date usando o método toLocaleString().

```javascript
    const data = new Date();
    console.log(data.toLocaleString('en-US', { timeZone: 'America/New_York' })); // Exibe a data no fuso horário de Nova York
```

Além disso, bibliotecas como o Moment.js têm recursos avançados para manipulação de fusos horários.

10. Manipulando datas com bibliotecas externas:

Embora o JavaScript nativo tenha recursos para manipular datas, bibliotecas externas como o Moment.js, date-fns e Luxon oferecem APIs mais avançadas e fáceis de usar. Essas bibliotecas fornecem funções para formatação, manipulação, validação e cálculos complexos com datas e horas.
Aqui está um exemplo de uso do Moment.js para adicionar 7 dias a uma data:

```javascript
    const data = moment('2023-06-26T10:30:00');
    const novaData = data.add(7, 'days');
    console.log(novaData.format('DD/MM/YYYY HH:mm:ss'));
```

## Utilização de objetos Date e métodos relacionados

1. Criando um objeto Date:

```javascript
    // Criar um objeto Date com a data e hora atuais
    const dataAtual = new Date();

    // Criar um objeto Date com uma data específica
    const dataEspecifica = new Date('2023-06-26');

    // Criar um objeto Date com uma data e hora específicas
    const dataHoraEspecificas = new Date(2023, 5, 26, 10, 30, 0); // mês é zero-indexed (0 = janeiro)
```

2. Obtendo informações da data e hora:

```javascript
    const data = new Date();

    const ano = data.getFullYear();
    const mes = data.getMonth(); // retorna o mês zero-indexed (0 = janeiro)
    const dia = data.getDate();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
    const milissegundo = data.getMilliseconds();
    const diaSemana = data.getDay(); // retorna o dia da semana (0 = domingo, 1 = segunda, ..., 6 = sábado)
```

3. Definindo informações da data e hora:

```javascript
    const data = new Date();

    data.setFullYear(2024);
    data.setMonth(11); // 11 = dezembro
    data.setDate(25);
    data.setHours(0, 0, 0, 0); // define a hora para meia-noite (00:00:00.000)
```

4. Comparando datas:

```javascript
    const data1 = new Date('2023-06-26');
    const data2 = new Date('2023-06-27');

    if (data1.getTime() === data2.getTime()) {
        console.log('As datas são iguais.');
    } else if (data1.getTime() < data2.getTime()) {
        console.log('data1 é anterior a data2.');
    } else {
        console.log('data1 é posterior a data2.');
    }
```

5. Formatando datas:

O JavaScript nativo não possui um formato de data padrão, mas você pode usar métodos do objeto Date para criar seu próprio formato ou optar por bibliotecas externas como o Moment.js ou o date-fns para formatação avançada.

```javascript
    const data = new Date();

    const formatoPadrao = data.toString(); // retorna uma string no formato padrão
    const formatoPersonalizado = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`; // exemplo: 26/6/2023
```

Esses são apenas alguns exemplos de utilização do objeto Date e seus métodos relacionados em JavaScript. Existem mais métodos disponíveis, como toDateString(), toTimeString(), toUTCString(), entre outros, que podem ser úteis dependendo do seu caso de uso. Fique à vontade para explorar a documentação oficial do JavaScript para mais informações detalhadas sobre o objeto Date e suas funcionalidades.

## Extra

Trabalhar com datas em JavaScript e considerar diferentes fusos horários pode ser desafiador, mas existem algumas práticas recomendadas que podem ajudar a lidar com isso de forma mais eficiente. Aqui estão algumas dicas para trabalhar com datas e fusos horários no JavaScript:

1. Use o formato UTC:

Ao lidar com datas em JavaScript, é uma boa prática armazenar e manipular as datas no formato UTC (Tempo Universal Coordenado) sempre que possível. O UTC é um padrão de tempo que não está vinculado a nenhum fuso horário específico, o que facilita a comparação e o cálculo de diferenças de tempo.

2. Conheça os fusos horários:

É importante ter um entendimento dos diferentes fusos horários envolvidos no seu aplicativo ou sistema. Esteja ciente dos fusos horários dos usuários ou das localizações com as quais você está lidando. Isso ajudará a determinar como exibir, armazenar e manipular corretamente as datas e horas.

3. Use bibliotecas externas:

Considere o uso de bibliotecas externas como o Moment.js, date-fns ou Luxon. Essas bibliotecas facilitam a manipulação de datas e fusos horários, fornecendo APIs mais poderosas e amigáveis. Elas podem ajudar com a formatação, conversão, cálculos complexos e ajustes de fusos horários.

4. Converta para o fuso horário do usuário:

Ao exibir datas para os usuários, é recomendável converter as datas para o fuso horário local do usuário. Isso pode ser feito usando o método toLocaleString() do objeto Date ou através das funções fornecidas pelas bibliotecas externas.

```javascript
    const data = new Date();

    // Converter para o fuso horário local do usuário
    const formatoLocal = data.toLocaleString(); 
    console.log(formatoLocal);

    // Usando Moment.js
    const formatoMoment = moment(data).format('YYYY-MM-DD HH:mm:ss');
    console.log(formatoMoment);
```

5. Manipule os fusos horários explicitamente:

Se você precisar trabalhar com fusos horários específicos, você pode usar a biblioteca Moment.js, que oferece recursos avançados de manipulação de fusos horários. Ele permite converter entre fusos horários, adicionar ou subtrair horas, minutos, etc., levando em consideração os fusos horários.

6. Considere a utilização de APIs de tempo:

Em alguns casos, pode ser útil utilizar APIs de tempo padrão fornecidas pelos navegadores, como a API Intl.DateTimeFormat. Essa API pode ajudar na formatação de datas de acordo com as preferências do usuário, levando em consideração o idioma e o fuso horário.

```javascript
    const data = new Date();

    const formatoLocalizado = new Intl.DateTimeFormat('pt-BR').format(data);
    console.log(formatoLocalizado);
```
<div align="center"><img alt="IMA" src="public/imaLogo.svg"/></div>

<h2 align="center">
  IMA - Em desenvolvimento!
</h2>

<p align="center">
  <a href="#Sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Desafio">Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Desafios-extras">Desafios extras</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultado">Resultado</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## Sobre
Repositório criado para o desenvolvimento de um desafio de Front-end, onde foi proposto a criação de uma aplicação simples utilizando React para exibir o valor de ações através de chamadas de API.

## Desafio
Crie uma tela com um input de texto que receberá um símbolo de ação listada na NASDAQ (ex: aapl para Apple, fb para Facebook, twtr para Twitter), utilizando a API gratuita do [IEX](https://iexcloud.io/docs/api/) para obter os dados necessários, utilizando o React para construir o projeto, telas e componentes e Redux para controlar o estado da sua aplicação

### Itens proprostos:
- **Preço das ações**: As informações de ações para cada símbolo são encontradas [aqui](https://iexcloud.io/docs/api/#quote). Estamos interessados principalmente no `latestPrice`.

- **Detalhes da empresa**: A mesma API também retorna as informações mais relevantes da empresa. A documentação pode ser encontrada [aqui](https://iexcloud.io/docs/api/#company).

- **Gráfico**: Plotar um gráfico com a evolução do valor das ações. Utilizamos o pacote [Recharts](http://recharts.org/) para exibir os gráficos na nossa plataforma! A documentação pode ser encontrada [aqui](https://iexcloud.io/docs/api/#historical-prices).

## Desafios extras
### Itens proprostos:
- **Componentes Reutilizáveis**: Criar componentes genéricos de UI que poderiam ser utilizados em outros projetos.

- **Atualizações em tempo real**: A API é atualizada quase em tempo real e poderia atualizar as informações de acordo (conforme faz o [Yahoo! Finance](https://finance.yahoo.com/quote/AAPL?p=AAPL&.tsrc=fin-srch))

- **Animação à la [Bloomberg](https://www.bloomberg.com/)**: Que tal exibir em formato de marquee o valor e variação percentual do valor das ações.

- **Renderização em Server Side (SSR)**: Que tal com `NextJS`?

- **React Native**: Você também pode construir uma replica do seu site para um aplicativo utilizando `React Native`.

## Layout
Design disponibilizado para o desafio front-end no [Figma](https://www.figma.com/file/JWyV7WPofeyQX8oKbn5jdI/IMA?node-id=0%3A1)

## Resultado
Para ver o **resultado**, clique aqui: [IMA - Dashboard](https://imanextjs.netlify.app/)

### Para testar o projeto segui os passos a baixo:

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/georgaugusto/ima-nextjs.git && cd ima-nextjs
```

**Siga os passos abaixo**

```bash
# Instale as dependências
$ yarn install

# Certifique-se de colocar seu Token da [IEX](https://iexcloud.io/docs/api/) nas requisições para testar o projeto
# Para terminar, inicie o cliente
$ yarn dev
```

Feito com 💜 &nbsp;por Georg Augusto Schlegel 👋 &nbsp;[Mande um Aló](https://www.linkedin.com/in/georgaugusto/)

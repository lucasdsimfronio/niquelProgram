# Niquel — Personal Finance Tracker

**Niquel** (Brazilian slang for "small change"/money) is a browser-based personal finance tracker built while completing a JavaScript course. It lets a user create an account, log in, and record income and expense entries, with a running balance and full transaction history — all persisted entirely client-side, with no backend.

## 🔗 Live Demo
[https://lucasdsimfronio.github.io/niquelProgram/Niquel/](https://lucasdsimfronio.github.io/niquelProgram/Niquel/)

## Features
- Account creation & login, with email/password validation
- "Keep me logged in" persistent session support
- Add income (*Entrada*) and expense (*Saída*) transactions through a modal form
- Home dashboard showing the 5 most recent entries of each type and a running total balance
- Dedicated transactions page listing the full history
- Input sanitization (`escapeHtml`) to prevent XSS when rendering user-entered text
- Fully responsive UI built with Bootstrap 5

## Tech Stack
- HTML5 / CSS3
- Vanilla JavaScript (ES6+)
- Bootstrap 5.3
- Browser storage: `localStorage` (accounts & transaction data) and `sessionStorage` (active session)

## Project Structure
```
niquelProgram/
├── Niquel/        # Main finance-tracker app (index, home, transactions pages + JS logic)
├── Bootstrap/     # Separate practice exercise — Bootstrap layout basics (navbar, cards, table)
├── css/
└── image/
```

## Getting Started
No build step or server required — everything runs in the browser.

1. Clone the repo:
   ```
   git clone https://github.com/lucasdsimfronio/niquelProgram.git
   ```
2. Open `Niquel/index.html` in your browser (or use a local dev server / the VS Code "Live Server" extension for best results with relative paths)
3. Create an account, log in, and start adding transactions

## What I Practiced
- DOM manipulation & event handling
- Form validation
- A client-side "auth" flow using the Web Storage APIs
- Basic XSS-safe rendering of user input
- Structuring a small multi-page vanilla JS app

## Note
The `Bootstrap/` folder is an earlier, separate exercise from the same course (unrelated to the Niquel app itself) — kept in this repo as an additional Bootstrap layout practice file.



## Portuguese Version

# Niquel — Controle Financeiro Pessoal

**Niquel** (gíria brasileira para "trocado"/dinheiro) é um controle financeiro pessoal desenvolvido durante um curso de JavaScript. O app permite que o usuário crie uma conta, faça login e registre entradas e saídas, acompanhando o saldo e o histórico completo de transações — tudo persistido no navegador, sem backend.

## 🔗 Demo ao Vivo
[https://lucasdsimfronio.github.io/niquelProgram/Niquel/](https://lucasdsimfronio.github.io/niquelProgram/Niquel/)

## Funcionalidades
- Criação de conta e login, com validação de e-mail e senha
- Opção "permanecer conectado" (sessão persistente)
- Adição de transações de Entrada e Saída através de um formulário em modal
- Dashboard inicial exibindo as 5 transações mais recentes de cada tipo e o saldo total
- Página dedicada com o histórico completo de transações
- Sanitização de dados (`escapeHtml`) para prevenir XSS ao renderizar texto digitado pelo usuário
- Interface totalmente responsiva construída com Bootstrap 5

## Tecnologias
- HTML5 / CSS3
- JavaScript puro (ES6+)
- Bootstrap 5.3
- Armazenamento no navegador: `localStorage` (contas e transações) e `sessionStorage` (sessão ativa)

## Estrutura do Projeto
```
niquelProgram/
├── Niquel/        # App principal (páginas de login, home, transações + lógica em JS)
├── Bootstrap/     # Exercício separado — prática de layout com Bootstrap (navbar, cards, tabela)
├── css/
└── image/
```

## Como Executar
Não é necessário nenhum build ou servidor — tudo roda direto no navegador.

1. Clone o repositório:
   ```
   git clone https://github.com/lucasdsimfronio/niquelProgram.git
   ```
2. Abra `Niquel/index.html` no navegador (ou use um servidor local / a extensão "Live Server" do VS Code para melhores resultados com os caminhos relativos)
3. Crie uma conta, faça login e comece a adicionar transações

## O que Pratiquei
- Manipulação do DOM e tratamento de eventos
- Validação de formulários
- Um fluxo de "autenticação" no lado do cliente usando as Web Storage APIs
- Renderização segura contra XSS de dados digitados pelo usuário
- Estruturação de um pequeno app multi-página em JavaScript puro

## Observação
A pasta `Bootstrap/` é um exercício anterior e separado, do mesmo curso (sem relação com o app Niquel) — mantida neste repositório como uma prática adicional de layout com Bootstrap.

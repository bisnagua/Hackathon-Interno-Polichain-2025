# Hackathon-Interno-Polichain-2025

Bem-vindo ao projeto Cofrinho Compartilhado 🐷 - link do site deployado: https://cofrinho-compartilhado.vercel.app/

##  Sobre o projeto

Se trata de um Cofrinho compartilhado de cryptomoedas, em que uma pessoa cria um cofrinho com um nome, uma meta de arrecadação, uma quantidade de dias pra arrecadar e o endereço da carteira das outras pessoas que farão parte do cofrinho.

A ideia é que até o final do período, os participantes já tenham arrecadado o dinheiro desejado, para que assim o dono do cofrinho possa sacá-lo. Além disso, a plataforma conta com a possibilidade de sugerir maneiras para gastar o dinheiro e cada participante votar em apenas uma delas.

## Como rodar localmente com Hardhat?

1. **Clone o repositório e entre na pasta my-app:**
   ```bash
   git clone git@github.com:bisnagua/Hackathon-Interno-Polichain-2025.git
   cd my-app/
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Em um terminal rode:**
   ```bash
   npm run node
   ```
4. **Abra outro terminal pra executar esses comandos sem fechar o anterior:**
   ```bash
   npm run compile
   npm run extract-abi
   ```
5. **Abra o app:**
   ```bash
   npm run dev
   ```

Agora é só se conectar ao site usando uma das private keys que o ```npm run node``` forneceu e testar a aplicação. Aproveite! 

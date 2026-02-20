# 💳 Banco Digital API

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange)
![Express](https://img.shields.io/badge/Express-Backend-lightgrey)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)

---

## 📌 Sobre o Projeto

API backend desenvolvida em **Node.js + TypeScript + MySQL**, simulando a base estrutural de um banco digital moderno.

O objetivo é construir um sistema bancário completo, começando pela estrutura fundamental e evoluindo até funcionalidades como:

- Cadastro de clientes
- Contas bancárias
- Transferências
- Controle de saldo
- Autenticação segura
- Controle transacional

Projeto criado com foco em:

✔ Arquitetura organizada  
✔ Separação de responsabilidades  
✔ Boas práticas de backend  
✔ Estrutura escalável  
✔ Código limpo  

---

## 🏗️ Arquitetura do Projeto

A aplicação segue o padrão:

### 🔹 Responsabilidades

| Camada        | Função |
|--------------|--------|
| Routes       | Define os endpoints da API |
| Controllers  | Manipula requisições e respostas |
| Services     | Contém as regras de negócio |
| Database     | Gerencia conexão e inicialização |

---

## 📁 Estrutura de Pastas

src/
│
├── index.ts # Ponto de entrada da aplicação
│
├── server/ # Inicialização do servidor
│ └── start.ts
│
├── database/ # Configuração e inicialização do banco
│ ├── connection.ts
│ └── init.ts
│
├── routes/ # Definição das rotas
├── controllers/ # Lógica HTTP (req, res)
├── services/ # Regras de negócio


---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **MySQL**
- **mysql2**
- **ts-node-dev**

---

## ⚙️ Funcionalidades Atuais

- ✅ Inicialização automática do servidor
- ✅ Verificação automática da existência do banco
- ✅ Criação automática do banco caso não exista
- ✅ Pool de conexões MySQL
- ✅ Estrutura pronta para expansão

---


## 🚀 Instalação e Execução

### 1️⃣ Clone o repositório


```bash
https://github.com/Twodollsnc/backend-banco-curso.git



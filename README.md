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

- Cadastro e autenticação de clientes
- Endereços vinculados ao cliente
- Contas bancárias
- Transferências e controle de saldo
- Chaves Pix
- Cartões de crédito e faturas
- Controle transacional completo

Projeto criado com foco em:

✔ Arquitetura organizada  
✔ Separação de responsabilidades  
✔ Boas práticas de backend  
✔ Estrutura escalável  
✔ Código limpo (máximo 50 linhas por arquivo)  
✔ Segurança com JWT e rate limiting  

---

## 🏗️ Arquitetura do Projeto

A aplicação segue o padrão **Routes → Controllers → Services → Database**:

| Camada       | Função                                   |
|-------------|-------------------------------------------|
| Routes      | Define os endpoints da API                |
| Controllers | Manipula requisições e respostas HTTP     |
| Services    | Contém as regras de negócio               |
| Database    | Gerencia conexão, inicialização e tabelas |
| Middlewares | Autenticação JWT e rate limiting          |

---

## 📁 Estrutura de Pastas

```
src/
│
├── index.ts                        # Ponto de entrada da aplicação
│
├── server/
│   └── start.ts                    # Inicialização do servidor
│
├── config/
│   └── env.ts                      # Centraliza variáveis de ambiente
│
├── database/
│   ├── connection.ts               # Pool de conexões MySQL
│   ├── init.ts                     # Verifica/cria o banco de dados
│   ├── createTables.ts             # Orquestra criação das tabelas
│   └── tables/
│       ├── clientes.ts
│       ├── enderecos.ts
│       ├── contas.ts
│       ├── transacoes.ts
│       ├── cartoes.ts
│       ├── faturas.ts
│       ├── compras_cartao.ts
│       └── chaves_pix.ts
│
├── middlewares/
│   ├── auth.ts                     # Validação JWT
│   └── rateLimiter.ts              # Limite de requisições por IP
│
├── routers/
│   ├── authRouters.ts
│   ├── enderecoRouters.ts
│   ├── contaRouters.ts
│   ├── transacaoRouter.ts
│   └── pixRouter.ts
│
├── controllers/
│   ├── clienteController.ts
│   ├── loginController.ts
│   ├── endereco/
│   │   ├── addEndereco.ts
│   │   ├── deletarEndereco.ts
│   │   └── enderecos.lista.ts
│   ├── conta/
│   │   ├── abrirConta.ts
│   │   ├── listarContas.ts
│   │   └── consultarSaldo.ts
│   ├── transacao/
│   │   ├── deposito.ts
│   │   └── transferenciaTed.ts
│   └── pix/
│       ├── cadastrarChave.ts
│       ├── listarChaves.ts
│       └── deletarChave.ts
│
├── services/
│   ├── clienteService.ts
│   ├── loginService.ts
│   ├── enderecoService.ts
│   ├── conta/
│   │   ├── abrirConta.ts
│   │   ├── gerarNumeroConta.ts
│   │   ├── listarContas.ts
│   │   └── consultarSaldo.ts
│   ├── transacao/
│   │   ├── depositar.ts
│   │   └── transferenciaTed.ts
│   └── pix/
│       ├── cadastrarChave.ts
│       ├── listarChaves.ts
│       └── deletarChave.ts
│
└── types/
    ├── Iauth.ts                    # Interface AuthRequest
    ├── IClienteCreate.ts           # Interface de criação de cliente
    ├── IEnderecosAdd.ts            # Interface de adição de endereço
    ├── ITokenPayload.ts            # Interface do payload do token JWT
    ├── ITransfTed.ts               # Interface de transferência TED
    ├── IChavePix.ts                # Interface de chave Pix
    └── ITipoChave.ts               # Type dos tipos de chave Pix
```

---

## 🗄️ Modelo do Banco de Dados

| Tabela         | Descrição                          |
|---------------|-------------------------------------|
| clientes       | Dados cadastrais e autenticação     |
| enderecos      | Endereços vinculados ao cliente     |
| contas         | Contas bancárias do cliente         |
| transacoes     | Histórico de movimentações          |
| cartoes        | Cartões vinculados às contas        |
| faturas        | Faturas mensais dos cartões         |
| compras_cartao | Compras lançadas nas faturas        |
| chaves_pix     | Chaves Pix por conta (máx. 5)      |

---

## 🧩 Interfaces TypeScript

| Interface       | Arquivo          | Descrição                                    |
|----------------|------------------|----------------------------------------------|
| AuthRequest    | Iauth.ts         | Extende Request com o campo `cliente` do JWT |
| IClienteCreate | IClienteCreate.ts| Tipagem dos dados de cadastro do cliente     |
| IEnderecosAdd  | IEnderecosAdd.ts | Tipagem dos dados de adição de endereço      |
| ITokenPayload  | ITokenPayload.ts | Tipagem do payload decodificado do token JWT |
| ITransfTed     | ITransfTed.ts    | Tipagem dos dados de transferência TED       |
| IChavePix      | IChavePix.ts     | Tipagem dos dados de chave Pix               |
| TTipoChave     | ITipoChave.ts    | Type dos tipos de chave Pix                  |

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **MySQL / mysql2**
- **bcrypt** — hash de senhas
- **jsonwebtoken** — autenticação JWT
- **express-rate-limit** — proteção contra excesso de requisições
- **dotenv** — variáveis de ambiente
- **ts-node-dev** — desenvolvimento com hot reload

---

## ⚙️ Funcionalidades Atuais

- ✅ Inicialização automática do servidor
- ✅ Verificação e criação automática do banco de dados
- ✅ Criação automática das tabelas (IF NOT EXISTS)
- ✅ Pool de conexões MySQL
- ✅ Variáveis de ambiente centralizadas
- ✅ Rate limiting (100 req / 15min por IP)
- ✅ Middleware de autenticação JWT
- ✅ Registro de clientes com hash de senha (bcrypt)
- ✅ Login com geração de token JWT
- ✅ Adicionar endereço (rota privada)
- ✅ Listar endereços (rota privada)
- ✅ Deletar endereço (rota privada)
- ✅ Abrir conta bancária com número gerado automaticamente (rota privada)
- ✅ Listar contas do cliente (rota privada)
- ✅ Consultar saldo da conta (rota privada)
- ✅ Depósito em conta com transaction MySQL (rota privada)
- ✅ Transferência TED entre contas (rota privada)
- ✅ Cadastrar chave Pix por conta (máx. 5) (rota privada)
- ✅ Listar chaves Pix da conta (rota privada)
- ✅ Deletar chave Pix (rota privada)

---

## 🔐 Segurança

- Senhas armazenadas com **bcrypt**
- Autenticação via **JWT** com expiração configurável
- Proteção contra força bruta com **rate limiting** (100 req / 15min por IP)
- Credenciais protegidas via **.env** (nunca no código)
- Rotas privadas protegidas pelo middleware `auth`
- Transactions MySQL garantindo integridade financeira

---

## 📡 Endpoints Disponíveis

### 🔓 Auth (público)
| Método | Rota            | Descrição         |
|--------|-----------------|-------------------|
| POST   | /auth/registro  | Cadastrar cliente |
| POST   | /auth/login     | Login e obter JWT |

### 🔒 Endereços (privado — requer Bearer Token)
| Método | Rota               | Descrição               |
|--------|--------------------|-------------------------|
| POST   | /enderecos         | Adicionar endereço      |
| GET    | /enderecos         | Listar endereços        |
| DELETE | /enderecos/:id     | Deletar endereço por ID |

### 🔒 Contas (privado — requer Bearer Token)
| Método | Rota               | Descrição               |
|--------|--------------------|-------------------------|
| POST   | /contas            | Abrir conta bancária    |
| GET    | /contas            | Listar contas           |
| GET    | /contas/:id/saldo  | Consultar saldo         |

### 🔒 Transações (privado — requer Bearer Token)
| Método | Rota                  | Descrição               |
|--------|-----------------------|-------------------------|
| POST   | /transacoes/deposito  | Depositar em conta      |
| POST   | /transacoes/ted       | Transferência TED       |

### 🔒 Pix (privado — requer Bearer Token)
| Método | Rota                       | Descrição               |
|--------|----------------------------|-------------------------|
| POST   | /pix/chaves                | Cadastrar chave Pix     |
| GET    | /pix/chaves?id_conta=1     | Listar chaves da conta  |
| DELETE | /pix/chaves/:id?id_conta=1 | Deletar chave Pix       |

---

## 📋 Exemplos de Uso

### Registro de cliente
```json
POST /auth/registro

{
    "nome_completo":   "João Silva",
    "cpf":             "123.456.789-00",
    "data_nascimento": "1990-01-15",
    "email":           "joao@email.com",
    "telefone":        "11999999999",
    "senha":           "minhasenha123"
}
```

### Login
```json
POST /auth/login

{
    "email": "joao@email.com",
    "senha": "minhasenha123"
}
```

### Depositar em conta
```json
POST /transacoes/deposito
Authorization: Bearer <token>

{
    "id_conta": 1,
    "valor": 500.00
}
```

### Transferência TED
```json
POST /transacoes/ted
Authorization: Bearer <token>

{
    "id_conta": 1,
    "numero_conta_destino": "9876543210",
    "valor": 100.00
}
```

### Cadastrar chave Pix
```json
POST /pix/chaves
Authorization: Bearer <token>

{
    "id_conta":   1,
    "tipo_chave": "cpf",
    "valor_chave": "123.456.789-00"
}
```

### Cadastrar chave aleatória
```json
POST /pix/chaves
Authorization: Bearer <token>

{
    "id_conta":   1,
    "tipo_chave": "aleatoria"
}
```

---

## 📱 Exemplos de Uso no React Native

### Configuração base
```typescript
const API_URL = "http://SEU_IP:8000"

// salva o token após o login
import AsyncStorage from "@react-native-async-storage/async-storage"
await AsyncStorage.setItem("token", response.token)

// função auxiliar pra pegar o token
async function getToken() {
    return await AsyncStorage.getItem("token")
}
```

### Registro
```typescript
async function registrar() {
    const response = await fetch(`${API_URL}/auth/registro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nome_completo:   "João Silva",
            cpf:             "123.456.789-00",
            data_nascimento: "1990-01-15",
            email:           "joao@email.com",
            telefone:        "11999999999",
            senha:           "minhasenha123"
        })
    })
    const data = await response.json()
    console.log(data)
}
```

### Login
```typescript
async function login() {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "joao@email.com",
            senha: "minhasenha123"
        })
    })
    const data = await response.json()
    await AsyncStorage.setItem("token", data.token)
}
```

### Consultar saldo (rota privada)
```typescript
async function consultarSaldo(id_conta: number) {
    const token = await getToken()
    const response = await fetch(`${API_URL}/contas/${id_conta}/saldo`, {
        method: "GET",
        headers: {
            "Content-Type":  "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await response.json()
    console.log("Saldo:", data.saldo)
}
```

### Depositar
```typescript
async function depositar(id_conta: number, valor: number) {
    const token = await getToken()
    const response = await fetch(`${API_URL}/transacoes/deposito`, {
        method: "POST",
        headers: {
            "Content-Type":  "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ id_conta, valor })
    })
    const data = await response.json()
    console.log(data)
}
```

### Transferência TED
```typescript
async function transferirTed(id_conta: number, numero_conta_destino: string, valor: number) {
    const token = await getToken()
    const response = await fetch(`${API_URL}/transacoes/ted`, {
        method: "POST",
        headers: {
            "Content-Type":  "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ id_conta, numero_conta_destino, valor })
    })
    const data = await response.json()
    console.log(data)
}
```

### Cadastrar chave Pix
```typescript
async function cadastrarChavePix(id_conta: number, tipo_chave: string, valor_chave?: string) {
    const token = await getToken()
    const response = await fetch(`${API_URL}/pix/chaves`, {
        method: "POST",
        headers: {
            "Content-Type":  "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ id_conta, tipo_chave, valor_chave })
    })
    const data = await response.json()
    console.log(data)
}
```

### Tratamento de token expirado
```typescript
async function request(url: string, options: RequestInit) {
    const response = await fetch(url, options)

    if (response.status === 401) {
        await AsyncStorage.removeItem("token")
        // redireciona pra tela de login
    }
    return response.json()
}
```

---

## 🚀 Instalação e Execução

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/Twodollsnc/backend-banco-curso.git
cd backend-banco-curso
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure o ambiente

Copie o `.env.example` e preencha com suas configurações:

```bash
cp .env.example .env
```

```env
PORT=8000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=DB_DigitalBank
DB_CONNECTION_LIMIT=10

JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=8h
```

> 💡 Para gerar uma chave JWT segura rode: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`

### 4️⃣ Rode o projeto

```bash
npm run dev
```

O servidor irá automaticamente:
- Verificar e criar o banco de dados
- Criar todas as tabelas necessárias
- Subir o servidor na porta configurada

> ⚠️ Para acessar a API pelo React Native em dispositivo físico, use o IP da sua máquina na rede local em vez de `localhost`. Ex: `http://192.168.1.100:8000`
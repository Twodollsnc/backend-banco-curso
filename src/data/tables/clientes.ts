import { db } from "../connection";

export async function createTableClientes() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS clientes (
            id_cliente        INT AUTO_INCREMENT PRIMARY KEY,
            nome_completo     VARCHAR(100)  NOT NULL,
            cpf               VARCHAR(14)   NOT NULL UNIQUE,
            data_nascimento   DATE          NOT NULL,
            email             VARCHAR(100)  NOT NULL UNIQUE,
            telefone          VARCHAR(20)   NOT NULL,
            senha_hash        VARCHAR(255)  NOT NULL,
            data_cadastro     DATETIME      NOT NULL DEFAULT NOW(),
            status_conta      ENUM('ativa','bloqueada','encerrada') NOT NULL DEFAULT 'ativa'
        )
    `);
    console.log("Tabela 'clientes' pronta.");
}
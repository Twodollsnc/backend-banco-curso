import { db } from "../connection";

export async function createTableContas() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS contas (
            id_conta       INT AUTO_INCREMENT PRIMARY KEY,
            id_cliente     INT            NOT NULL,
            numero_conta   VARCHAR(20)    NOT NULL UNIQUE,
            tipo_conta     ENUM('corrente','poupanca') NOT NULL DEFAULT 'corrente',
            saldo_atual    DECIMAL(15,2)  NOT NULL DEFAULT 0.00,
            data_abertura  DATETIME       NOT NULL DEFAULT NOW(),
            status         ENUM('ativa','bloqueada') NOT NULL DEFAULT 'ativa',
            FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
        )
    `);
    console.log("Tabela 'contas' pronta.");
}
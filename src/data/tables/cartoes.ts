import { db } from "../connection";

export async function createTableCartoes() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS cartoes (
            id_cartao          INT AUTO_INCREMENT PRIMARY KEY,
            id_conta           INT            NOT NULL,
            numero_cartao      VARCHAR(19)    NOT NULL UNIQUE,
            validade           DATE           NOT NULL,
            cvv_hash           VARCHAR(255)   NOT NULL,
            limite_credito     DECIMAL(15,2)  NOT NULL DEFAULT 0.00,
            limite_disponivel  DECIMAL(15,2)  NOT NULL DEFAULT 0.00,
            status             ENUM('ativo','bloqueado','cancelado') NOT NULL DEFAULT 'ativo',
            FOREIGN KEY (id_conta) REFERENCES contas(id_conta)
        )
    `);
    console.log("Tabela 'cartoes' pronta.");
}
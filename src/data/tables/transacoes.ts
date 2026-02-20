import { db } from "../connection";

export async function createTableTransacoes() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS transacoes (
            id_transacao       INT AUTO_INCREMENT PRIMARY KEY,
            id_conta_origem    INT            NOT NULL,
            id_conta_destino   INT,
            tipo_transacao     ENUM('pix','ted','deposito','saque','pagamento') NOT NULL,
            valor              DECIMAL(15,2)  NOT NULL,
            data_hora          DATETIME       NOT NULL DEFAULT NOW(),
            status             ENUM('pendente','concluida','cancelada') NOT NULL DEFAULT 'pendente',
            descricao          VARCHAR(255),
            FOREIGN KEY (id_conta_origem)  REFERENCES contas(id_conta),
            FOREIGN KEY (id_conta_destino) REFERENCES contas(id_conta)
        )
    `);
    console.log("Tabela 'transacoes' pronta.");
}
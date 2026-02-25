import { RowDataPacket } from "mysql2";

export interface IExtratoRow extends RowDataPacket
{
    id_transacao:               number
    tipo_transacao:             string
    valor:                      number
    status:                     string
    descricao:                  string
    data_transacao:             Date
    id_conta_origem:            number
    id_conta_destino:           number
}
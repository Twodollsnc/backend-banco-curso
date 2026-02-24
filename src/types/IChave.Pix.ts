import { TTipoChave } from "./Ttipo.Chave";
export interface IChavePix
{
    id_conta:           number
    tipo_chave:         TTipoChave
    valor_chave?:       string
}
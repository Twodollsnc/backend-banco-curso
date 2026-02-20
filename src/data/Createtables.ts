import { createTableClientes }     from "./tables/clientes";
import { createTableEnderecos }    from "./tables/enderecos";
import { createTableContas }       from "./tables/contas";
import { createTableTransacoes }   from "./tables/transacoes";
import { createTableCartoes }      from "./tables/cartoes";
import { createTableFaturas }      from "./tables/faturas"
import { createTableComprasCartao} from "./tables/compras_cartao";
import { createTableChavesPix }    from "./tables/chaves_pix";

export async function createTables() {
    console.log("Criando tabelas...");
    await createTableClientes();
    await createTableEnderecos();
    await createTableContas();
    await createTableTransacoes();
    await createTableCartoes();
    await createTableFaturas();
    await createTableComprasCartao();
    await createTableChavesPix();
    console.log("Todas as tabelas prontas!");
}
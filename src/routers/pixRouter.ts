import { Router } from "express";
import { auth } from "../middlewares/auth";
import { cadastrarChavePix } from "../controllers/Pix/cadastrar.Chave";
import { listar } from "../controllers/Pix/listar.Chave";
import { deletar } from "../controllers/Pix/deletar.Chave";

export const pixRouter = Router()

pixRouter.post("/chaves",       auth, cadastrarChavePix)
pixRouter.get("/chaves",        auth, listar)
pixRouter.delete("/chaves/:id",  auth, deletar)
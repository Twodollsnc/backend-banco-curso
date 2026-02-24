import { Router } from "express";
import { auth } from "../middlewares/auth";
import { abrir } from "../controllers/conta/Abrir.Conta.Controller";
import { listarC } from "../controllers/conta/listar.Contas.Controller";
import { saldo } from "../controllers/conta/consultar.Saldo.Controller";
export const contaRouter = Router()
contaRouter.post("/",           auth, abrir)
contaRouter.get("/",            auth, listarC)
contaRouter.get("/:id/saldo",   auth, saldo)

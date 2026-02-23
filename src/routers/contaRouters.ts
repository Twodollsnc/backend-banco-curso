import { Router } from "express";
import { auth } from "../middlewares/auth";
import { abrir } from "../controllers/conta/AbrirContaController";
import { listarC } from "../controllers/conta/listarContasController";
import { saldo } from "../controllers/conta/consultarSaldoController";
export const contaRouter = Router()
contaRouter.post("/",           auth, abrir)
contaRouter.get("/",            auth, listarC)
contaRouter.get("/:id/saldo",   auth, saldo)

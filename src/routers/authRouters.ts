import { Router } from "express"
import { registro } from "../controllers/clientController"
import { login } from "../controllers/loginController";
export const AuthRouter = Router();
AuthRouter.post("/registro", registro)
AuthRouter.post("/login", login)



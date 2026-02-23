import { Router } from "express"
import { registro } from "../controllers/clinteController/clientController"
import { login } from "../controllers/clinteController/loginController";
export const AuthRouter = Router();
AuthRouter.post("/registro", registro)
AuthRouter.post("/login", login)



import { Router } from "express"
import { registro } from "../controllers/Authcontroller"
export const AuthRouter = Router();
AuthRouter.post("/registro", registro)




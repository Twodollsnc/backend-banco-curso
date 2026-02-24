import rateLimit from "express-rate-limit";
export const rateLimiter = rateLimit
(
    {
        windowMs: 5*60*1000,
        max:10,
        message:{
            statur:429,
            error:"Muitas Requisições foram feitas, tente novamente mais tarde"
        }
    }
)
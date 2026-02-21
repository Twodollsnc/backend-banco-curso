import { get } from "node:http";
import { getEnv } from "./getEnv"

export const env = {
    server: {
        port: Number(getEnv("PORT", "3000")),
    },
    db: {
        host:            getEnv("DB_HOST",             "localhost"),
        user:            getEnv("DB_USER",             "root"),
        password:        getEnv("DB_PASSWORD"),
        name:            getEnv("DB_NAME",             "DB_DigitalBank"),
        connectionLimit: Number(getEnv("DB_CONNECTION_LIMIT", "10")),
    },
    jwt:{
        secret:         getEnv("JWT_SECRET"),
        expiresIn:       getEnv("JWT_EXPIRES_IN", "8h")
    },
};
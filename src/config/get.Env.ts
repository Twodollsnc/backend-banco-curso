import dotenv from "dotenv";
dotenv.config();

export function getEnv(key: string, fallback?: string): string {
    const value = process.env[key] ?? fallback;
    if (value === undefined) {
        throw new Error(`Variável de ambiente obrigatória não encontrada: ${key}`);
    }
    return value;
}
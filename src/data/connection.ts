import mysql2 from "mysql2/promise";
import { env } from "../config/env";

export const db = mysql2.createPool({
    host:             env.db.host,
    user:             env.db.user,
    password:         env.db.password,
    database:         env.db.name,
    waitForConnections: true,
    connectionLimit:  env.db.connectionLimit,
});
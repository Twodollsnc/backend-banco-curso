import mysql2 from "mysql2/promise"
export const db = mysql2.createPool({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"DB_DigitalBank",
    waitForConnections:true,
    connectionLimit:10
})
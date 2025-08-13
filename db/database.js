import { createConnection } from "mysql2";
require("dotenv").config();

const db = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
});

db.connect((err) => {
  if (err) {
    // Se ocorrer um erro na conexão, exibe mensagem de erro no console
    console.log("DB_HOST =", process.env.DB_HOST);
    console.log("DB_USER =", process.env.DB_USER);
    console.log("DB_PASS =", process.env.DB_PASS);
    console.log("DB_NAME =", process.env.DB_NAME);
    console.log("DB_PORT =", process.env.DB_PORT);
    console.log("Tentando conectar ao banco...");

    console.error("Erro ao conectar no banco de dados:", err);
  } else {
    // Se conectar com sucesso, exibe mensagem de sucesso no console
    console.log("Conectado ao banco de dados!");
  }
});

export default db;

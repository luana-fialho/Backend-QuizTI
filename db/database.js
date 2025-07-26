const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    // Se ocorrer um erro na conexão, exibe mensagem de erro no console
    console.error("Erro ao conectar no banco de dados:", err);
  } else {
    // Se conectar com sucesso, exibe mensagem de sucesso no console
    console.log("Conectado ao banco de dados!");
  }
});

module.exports = db;

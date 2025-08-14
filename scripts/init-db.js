// scripts/init-db.js (CommonJS)
const fs = require("fs");
const path = require("path");
const mysql = require("mysql2");
require("dotenv").config(); // localmente lê .env; no Railway usa Variables

const dumpPath = path.join(__dirname, "..", "db", "dump.sql");

// ⚠️ Use uma conexão avulsa só para import, com multipleStatements
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  multipleStatements: true,
});

const run = () => {
  console.log("🔎 Checando se precisa importar o dump...");
  connection.query("SHOW TABLES LIKE 'jogador';", (err, rows) => {
    if (err) {
      console.error("❌ Erro ao checar tabelas:", err);
      connection.end();
      process.exit(1);
    }

    if (rows && rows.length > 0) {
      console.log("✅ Tabelas já existem. Pulando import.");
      connection.end();
      process.exit(0);
    }

    console.log("⚙️  Importando dump:", dumpPath);
    const sql = fs.readFileSync(dumpPath, "utf8");
    connection.query(sql, (err2) => {
      if (err2) {
        console.error("❌ Erro ao executar dump:", err2);
        connection.end();
        process.exit(1);
      }
      console.log("✅ Dump importado com sucesso!");
      connection.end();
      process.exit(0);
    });
  });
};

connection.connect((err) => {
  if (err) {
    console.error("❌ Não conectou para inicialização:", err);
    process.exit(1);
  }
  run();
});

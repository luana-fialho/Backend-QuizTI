// db/pool.js (CommonJS)
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST, // virá do Railway
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // multipleStatements não é recomendado em produção para APIs,
  // mas o script de import vai usar numa conexão separada.
});

module.exports = pool;

const pool = require("../db/pool");

exports.cadastro = (req, res) => {
  const { nome, idade, genero } = req.body;

  if (!nome) {
    return res.status(400).json({ error: "Dados obrigatórios ausentes!" });
  }

  const sql = `INSERT INTO jogador (nome, idade, genero) VALUES (?, ?, ?)`;

  pool.query(sql, [nome, idade, genero], (err, result) => {
    if (err) {
      console.error("Erro ao cadastrar usuário:", err);
      return res.status(500).json({ error: "Erro ao cadastrar usuário." });
    }

    res.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      id: result.insertId,
    });
  });
};

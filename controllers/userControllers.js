const db = require("../db/database").default;

exports.cadastro = (req, res) => {
  const { nome, idade, genero } = req.body;
  if (!nome) {
    return res.status(400).json({ error: "Dados obrigatórios ausentes!" });
  }

  const sql = `insert into jogador (nome, idade, genero) values (?, ?, ?)`;
  db.query(sql, [nome, idade, genero], (err, result) => {
    if (err) {
      console.error("Erro ao cadastrar usuario: ", err);
      return res.status(500).json({ error: "Erro ao cadastrar usuário." });
    }
    res.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      id: result.insertId,
    });
  });
};

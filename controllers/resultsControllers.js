const db = require("../db/database");

exports.salvarPontuacao = (req, res) => {
  const { id_jogador, pontuacao, data } = req.body;

  const sql = `insert into resultado (id_jogador, pontuacao, data) values (?, ?, ?)`;
  db.query(sql, [id_jogador, pontuacao, data], (err, result) => {
    if (err) {
      console.error("Erro ao salvar pontuação:", err);
      return res.status(500).json({ error: "Erro ao salvar pontuação." });
    }
    res.status(201).json({ message: "Pontuacao salva!" });
  });
};

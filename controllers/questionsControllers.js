const db = require("../db/database");

exports.buscarPergunta = (req, res) => {
  const { categoria } = req.body;
  const sql = `select * from perguntas where categoria = ?`;

  db.query(sql, [categoria], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar pergunta ", err);
      return res.status(500).json({ error: "Erro ao buscar pergunta." });
    }
    res.status(201).json(results);
  });
};

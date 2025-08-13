const db = require("../db/database");

exports.salvarPontuacao = (req, res) => {
  const { id_jogador, pontuacao, tema } = req.body;
  if (!id_jogador || pontuacao == null || !tema) {
    return res.status(400).json({ error: "Dados incompletos" });
  }

  const sql = `insert into resultado (id_jogador, pontuacao, tema) values (?, ?, ?)`;
  db.query(sql, [id_jogador, pontuacao, tema], (err, result) => {
    if (err) {
      console.error("Erro ao salvar pontuação:", err);
      return res.status(500).json({ error: "Erro ao salvar pontuação." });
    }
    res.status(201).json({ message: "Pontuacao salva!" });
    console.log("pontos salvos");
  });
};

exports.mostrarRanking = (req, res) => {
  const { tema } = req.body;
  const sql = `select j.nome, r.pontuacao, r.data from jogador j join resultado r on j.id = r.id_jogador where r.tema = ? order by r.pontuacao desc limit 10`;
  if (!tema) return res.status(400).json({ error: "Dados incompletos" });

  db.query(sql, [tema], (err, results) => {
    if (err) {
      console.error("Erro ao buscar ranking:", err);
      return res.status(500).json({ error: "Erro ao buscar ranking." });
    }
    res.json(results);
  });
};

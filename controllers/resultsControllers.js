const pool = require("../db/pool");

// Salvar pontuação do jogador
exports.salvarPontuacao = (req, res) => {
  const { id_jogador, pontuacao, tema } = req.body;

  if (!id_jogador || pontuacao == null || !tema) {
    return res.status(400).json({ error: "Dados incompletos" });
  }

  const sql = `INSERT INTO resultado (id_jogador, pontuacao, tema) VALUES (?, ?, ?)`;

  pool.query(sql, [id_jogador, pontuacao, tema], (err, result) => {
    if (err) {
      console.error("Erro ao salvar pontuação:", err);
      return res.status(500).json({ error: "Erro ao salvar pontuação." });
    }

    console.log("Pontuação salva com sucesso!");
    res.status(201).json({ message: "Pontuação salva!" });
  });
};

// Mostrar ranking por tema
exports.mostrarRanking = (req, res) => {
  const { tema } = req.body;

  if (!tema) return res.status(400).json({ error: "Dados incompletos" });

  const sql = `
    SELECT j.nome, r.pontuacao, r.data 
    FROM jogador j 
    JOIN resultado r ON j.id = r.id_jogador 
    WHERE r.tema = ? 
    ORDER BY r.pontuacao DESC 
    LIMIT 10
  `;

  pool.query(sql, [tema], (err, results) => {
    if (err) {
      console.error("Erro ao buscar ranking:", err);
      return res.status(500).json({ error: "Erro ao buscar ranking." });
    }

    res.status(200).json(results);
  });
};

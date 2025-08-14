const pool = require("../db/pool");

exports.buscarPergunta = (req, res) => {
  const { categoria } = req.body;
  const sql = `
    SELECT 
      p.id AS pergunta_id,
      p.titulo,
      p.enunciado,
      p.autor,
      p.resposta,
      p.imagem,
      p.nivel,
      p.categoria,
      p.data,
      p.validada,
      a.id_pergunta,
      a.id AS alternativa_id,
      a.texto,
      a.letra 
    FROM perguntas p 
    JOIN alternativas a ON p.id = a.id_pergunta 
    WHERE p.categoria = ?
  `;

  // Aqui usamos pool.query direto, sem connect() nem end()
  pool.query(sql, [categoria], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar pergunta", err);
      return res.status(500).json({ error: "Erro ao buscar perguntas." });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Nenhuma pergunta encontrada." });
    }

    const perguntasMap = {};

    results.forEach((row) => {
      const id = row.pergunta_id;
      if (!perguntasMap[id]) {
        perguntasMap[id] = {
          id: row.pergunta_id,
          titulo: row.titulo,
          enunciado: row.enunciado,
          autor: row.autor,
          resposta: row.resposta,
          imagem: row.imagem,
          nivel: row.nivel,
          categoria: row.categoria,
          data: row.data,
          validada: row.validada,
          alternativas: [],
        };
      }
      perguntasMap[id].alternativas.push({
        id: row.alternativa_id,
        texto: row.texto,
        letra: row.letra,
      });
    });

    const perguntas = Object.values(perguntasMap);
    res.status(200).json(perguntas);
  });
};

const express = require("express");
const router = express.Router();
const resultsController = require("../controllers/resultsControllers");

router.post("/pontuacao", resultsController.salvarPontuacao);
router.post("/ranking", resultsController.mostrarRanking);

module.exports = router;

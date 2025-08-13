const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsControllers");

router.post("/perguntas", questionsController.buscarPergunta);

module.exports = router;

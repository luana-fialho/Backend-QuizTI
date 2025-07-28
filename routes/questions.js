const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsControllers");

router.get("/perguntas", questionsController.buscarPergunta);

module.exports = router;

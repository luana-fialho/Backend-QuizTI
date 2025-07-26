const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router.post("/cadastro", userController.cadastro);

module.exports = router;

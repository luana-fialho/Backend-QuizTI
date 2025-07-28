const express = require("express");
const cors = require("cors");
const port = 3000;
require("dotenv").config();
const db = require("./db/database");

const app = express();

const userRoutes = require("./routes/user");
const questionsRoutes = require("./routes/questions");
const resultsRoutes = require("./routes/results.js");

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/questions", questionsRoutes);
app.use("/results", resultsRoutes);

app.listen(port, () => {
  console.log(`aplicação rodando na porta ${port}`);
});

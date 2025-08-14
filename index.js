const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/database");

const app = express();

const userRoutes = require("./routes/user");
const questionsRoutes = require("./routes/questions");
const resultsRoutes = require("./routes/results.js");

const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: "https://frontend-quiz-ti.vercel.app",
  })
);
app.use(express.json());

app.use("/user", userRoutes);
app.use("/questions", questionsRoutes);
app.use("/results", resultsRoutes);

app.listen(PORT, () => {
  console.log(`aplicação rodando na porta ${PORT}`);
});

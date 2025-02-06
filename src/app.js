const express = require("express");
const cors = require("cors");
const classifyRoute = require("./routes/classifyRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", classifyRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the Number Classification API");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;

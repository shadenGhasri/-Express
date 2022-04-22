const express = require("express");
const app = express();

app.get("/shogol", (req, res) => {
  res.send(`i love shogol ${req.query.num}`);
});

app.listen("3666", (req, res) => {
  console.log("I love coffee");
});

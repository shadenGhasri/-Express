const express = require("express");
const app = express();

app.get("/Math/:num1/:num2", (req, res) => {
  let { num1, num2 } = req.query;
  const result=num1*num2;

  res.send(`<h1>Numbers is : ${num1} and ${num2}, Result is = ${result}</h1>`);
});

app.listen("3066", (req, res) => {
  console.log("Davinchi's Code");
});

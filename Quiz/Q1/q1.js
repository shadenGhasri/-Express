const express =require("express");
const app = express();

app.get("/search", (req, res) => {
  const{q} = req.query;
  res.send(`i want ${q} pizza `);
});

app.listen(4679);
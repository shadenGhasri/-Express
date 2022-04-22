const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(logger);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text: "Mazlom" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3023);

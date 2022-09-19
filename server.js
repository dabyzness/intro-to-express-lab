import express from "express";

const port = 3000;
const app = express();

app.set("view engine", "ejs");

app.get("/students", (req, res) => {
  res.render("students/index");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

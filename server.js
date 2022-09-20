import express from "express";
import { tas } from "./data/tas.js";
import { ias } from "./data/ias.js";
import { instructors } from "./data/instructors.js";
import { students } from "./data/students.js";

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/people", (req, res) => {
  res.render("people/index", { instructors, ias, tas, students });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

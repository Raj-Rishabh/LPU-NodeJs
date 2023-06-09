const express = require("express");
const app = express();

app.use(express.json());

app.get("/add", function addNums(req, res) {
  const b = req.query.b;
  const a = req.query.a;
  const c = req.query.c;
  const d = req.query.d;
  var sum = a + b + c + d;
  res.send({ sum });
});
app.get("/subtract", function subNums(req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const sub = a - b;
  res.send({ sub });
});

app.get("/multiply", function mulNums(req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const c = req.query.c;
  const d = req.query.d;
  const mul = a * b * c * d;
  res.send({ mul: mul });
});
app.get("/divide", function divNums(req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const div = a % b;
  res.send({ div });
});

const port = 3001;
const ip = "localhost";
app.listen(port, ip, function () {
  console.log("Server is online");
});

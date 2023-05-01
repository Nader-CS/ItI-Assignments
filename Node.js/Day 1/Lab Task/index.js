const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("not found");
});

app.get("/add/:num1/:num2", (req, res) => {
  var n1 = +req.params.num1;
  var n2 = +req.params.num2;
  var result = n1 + n2;
  res.send("Result = " + result);
});
app.get("/multi/:num1/:num2", (req, res) => {
  var n1 = +req.params.num1;
  var n2 = +req.params.num2;
  var result = n1 * n2;
  res.send("Result = " + result);
});
app.get("/divide/:num1/:num2", (req, res) => {
  var n1 = +req.params.num1;
  var n2 = +req.params.num2;
  if (n1 == 0 || n2 == 0) {
    res.send("Sorry one the paramter = 0");
  } else {
    var result = n1 / n2;
    res.send("Result = " + result);
  }
});
app.get("/sub/:num1/:num2", (req, res) => {
  var n1 = +req.params.num1;
  var n2 = +req.params.num2;
  var result = n1 - n2;
  res.send("Result = " + result);
});

app.all("*", (req, res) => {
  console.log(req.url);
  res.send("Can Not " + req.method + " 3la " + req.url);
});

app.listen(7005, () => {
  console.log("Lisitning on Port 7005");
});

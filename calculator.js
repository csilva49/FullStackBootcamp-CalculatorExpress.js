const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html"); //create ROUTES
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html"); //create ROUTES
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculator is " + result); //create ROUTES (this sends tetx)
});

app.post("/bmiCalculator", function (req, res) {
  var num1 = Number(req.body.weight);
  var num2 = Number(req.body.height);

  var result = num1 * num2;

  res.send("The result of the calculator is " + result); //create ROUTES (this sends tetx)
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

const express = require("express");
const bodyParser = require("body-parser");
const prisma = require("./prisma");
const app = express();

app.use(bodyParser.json());

const port = 3000;
const express = require("express");
app.get("/bmi", (req, res) => {
  var age = parseFloat(req.query.age);
  var gender = parseFloat(req.query.gender);
  const weight = parseFloat(req.query.weight);
  const height = parseFloat(req.query.height);
  // Calculate BMI
  var bmi = weight / (height * height);
  // Return the calculated BMI
  res.send("Your BMI is: " + bmi.toFixed(2));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
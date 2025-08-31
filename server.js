const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const app = express();
const upload = multer();

app.use(express.static(path.join(__dirname))); // serve index.html & validate.js
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", upload.none(), (req, res) => {
  console.log("Form Data:", req.body);
  res.send("<h2>Registration Successful! Check server console.</h2>");
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
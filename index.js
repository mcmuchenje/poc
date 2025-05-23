require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.post("/", (req, res) => {
  let hostname = req.body['server-address']
  console.log(req.body)
  return res.render("./", {
    hostname,
    error: req.body.error
  });
});

app.get("/{*splat}", (req, res) => {
  console.log(req.body)
  res.redirect("https://google.com");
});

const PORT = process.env.PORT || 8444;

app.listen(PORT, () => {
  console.log("server running at http://localhost:8444");
});

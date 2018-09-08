var express = require("express");
const bodyParser = require("body-parser");
var db = require("../database/database.js");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/customers", (req, res) => {
  db.Customers.create({ name: "Duke" }).then(customer => {
    res.send(customer);
  });
});

app.listen(3000, () => console.log("barback listening on port 3000!"));

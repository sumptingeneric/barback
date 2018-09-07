const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Controllers

//Port Listening
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 7337;

app.listen(port, () => {
  console.log(`Listening on http://${host}:${port}`);
});

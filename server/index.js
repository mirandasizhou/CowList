const express = require('express');
const db = require('./db.js');
require("dotenv").config();

let app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(express.json());


let port = process.env.PORT;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
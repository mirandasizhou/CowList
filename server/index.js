const express = require('express');
const db = require('./db.js');
require("dotenv").config();

let app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(express.json());

app.post('/api/cows', (req, res) => {
  let name = req.body.name;
  let description = req.body.description;
  db.query(`INSERT INTO cows (name, description) VALUES ('${name}', '${description}')`, (err, response) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      console.log(response);
      res.end();
    }
  })
});

app.get('/api/cows', (req, res) => {
  db.query(`SELECT * FROM cows`, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
})

let port = process.env.PORT;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const axios = require("axios");
const { color, log } = require('console-log-colors');
const {bold, italic, underline, red, yellow, cyan, green, magenta} = color;

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.post('/checkout', (req, res) => {
  var sql = 'INSERT INTO responses SET ?'
  // take in req body
  var userInfo = req.body // may need to destructure?
  // send to database
  db.query(sql, userInfo, (err, result) => {
    if (err) {
      throw err;
      console.log(err);''
    } else {
    res.send(result);
    }
  })
  // on success
    // send back success message
  // on error
    // send back error message
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

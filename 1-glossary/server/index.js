require("dotenv").config();
console.log(process.env);
const express = require("express");
const path = require("path");

const { save, getOne, getAll, removeOne } = require('./db.js');
// const { getAdd } = require("./handlers/addWord.js");
// const { postSearch, getSearch, patchSearch, deleteSearch } = require("./handlers/addWord.js");

const { color, log } = require('console-log-colors');
const { bold, italic, underline, red, green, yellow, cyan, magenta, white } = color;

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/addword', (req, res) => {
  getOne(req.body.word)
    .then((wordEntry) => {
      res.send(wordEntry);
    }).catch((err) => {
      res.status(404).send(err);
    })
});

app.post('/addword', (req, res) => {
  save(req.body.word, req.body.definition)
    .then(() => {
      res.status(201).send('word was saved');
    }).catch((err) => {
      res.status(404).send('word was not saved \n', err);
    });
});

app.get('/searchword', (req, res) => {

});

app.post('/searchword', (req, res) => {

});

app.patch('/searchword', (req, res) => {

});

app.delete('/searchword', (req, res) => {

});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

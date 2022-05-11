require("dotenv").config();
const express = require("express");
const path = require("path");
const { postAdd, getAdd } = require("./handlers/addWord.js");
const { postSearch, getSearch, patchSearch, deleteSearch } = require("./handlers/addWord.js");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/addwords', (req, res) => {

});

app.post('/addwords', (req, res) => {

});

app.get('/searchwords', (req, res) => {

});

app.post('/searchwords', (req, res) => {

});

app.patch('/searchwords', (req, res) => {

});

app.delete('/searchwords', (req, res) => {

});
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

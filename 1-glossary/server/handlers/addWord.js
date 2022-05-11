require("dotenv").config();
const express = require("express");
const path = require("path");

const { save, getOne, getAll, removeOne } = require('../db.js');

const { color, log } = require('console-log-colors');
const { bold, italic, underline, red, green, yellow, cyan, magenta, white } = color;

const app = express();

var getAdd = function(input) {
  save(input)
}

var postAdd = function() {

}

module.exports = {
  postAdd: postAdd,
  getAdd: getAdd
}
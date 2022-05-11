require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

module.exports = {
  postSearch: postSearch,
  getSearch: getSearch,
  patchSearch: patchSearch,
  deleteSearch: deleteSearch
}
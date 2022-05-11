require("dotenv").config();
const mongoose = require("mongoose");

const { color, log } = require('console-log-colors');
const { bold, italic, underline, red, green, yellow, cyan, magenta, white } = color;

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect(`mongodb:http://localhost:${process.env.PORT}`).then(function() {
  log.green('connected to MongoDB');
}).catch((err) => {
  log.red('unable to connect to MongoDB', err);
});
// 2. Set up any schema and models needed by the app

const wordSchema = new mongoose.Schema({
  word: 'String',
  def: 'String'
});

const Word = mongoose.model('Word', wordSchema);
// 3. Export the models
// create or update one
let save = (word, newDef) => {
  return wordSchema.findOneAndUpdate(word, newDef, {upsert: true})
    .exec();
}
// get/get one
let getOne = (word) => {
  return wordSchema.findOne(word)
    .exec();
}
// find all
let getAll = () => {
  return wordSchema.find()
    .sort({field: 'word', test: -1})
    .limit(15)
    .exec();
}
// delete one
let removeOne = (word) => {
  return wordSchema.findOneAndDelete(word)
    .exec();
}
// 4. Import the models into any modules that need them

module.exports = {
  save: save,
  getOne: getOne,
  getAll: getAll,
  removeOne: removeOne
}
require("dotenv").config();
const mongoose = require("mongoose");

const { color, log } = require('console-log-colors');
const { bold, italic, underline, red, green, yellow, cyan, magenta, white } = color;

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`).then(function() {
  log.cyan('connected to MongoDB');
}).catch((err) => {
  log.red('unable to connect to MongoDB', err);
});
// 2. Set up any schema and models needed by the app

const wordSchema = mongoose.Schema({
  word: 'String',
  definition: 'String'
});

const Word = mongoose.model('Word', wordSchema);
// 3. Export the models
// create or update one
let save = (word, newDef) => {
  log.bold(yellow(newDef));
  return Word.findOneAndUpdate({word: word}, {definition: newDef}, {upsert: true})
    .exec();
}
// get/get one
let getOne = (word) => {
  return Word.findOne({word})
    .exec();
}
// find all
let getAll = () => {
  return Word.find()
    .sort({field: 'word', test: -1})
    .limit(15)
    .exec();
}
// delete one
let removeOne = (word) => {
  return Word.findOneAndDelete({word})
    .exec();
}
// 4. Import the models into any modules that need them

module.exports = {
  save: save,
  getOne: getOne,
  getAll: getAll,
  removeOne: removeOne
}
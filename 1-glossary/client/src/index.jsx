import React from "react";
import ReactDOM, { render } from "react-dom";
import AddWord from './components/addNewWord.jsx';
import SearchWord from './components/queryExistingWord.jsx';
import GlossaryView from './components/glossaryView.jsx';
import axios from 'axios';

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordEntries: [],
      selectedWord: ''
    };
    this.initialize = this.initialize.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
  }

  initialize() {
    axios({
      method: 'get',
      url: '/searchword',
      contentType: 'application/json'
    })
    .then((wordResponse) => {
      console.log(wordResponse);
      this.setState({wordEntries: wordResponse.data});
    })
    .catch((err) => {
      console.error(err);
    })
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({selectedWord: e.target.value});
  }

  clickHandler(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/searchword',
      data: this.state.selectedWord,
      contentType: 'application/json'
    })
    .then((response) => {
      console.log(response);
      this.initialize(response.data);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  remove(currentWord) {
    axios({
      method: 'delete',
      url: '/searchword',
      data: currentWord, // word to which the button is attached,
      contentType: 'application/json'
    })
    .then(() => {
      this.initialize();
    })
    .catch((err) => {
      console.error(err);
    })
  }

  edit() {

  }

  render() {
    return (
      <div>
        <header>
          <h1>Personal Glossary App</h1>
        </header>
        <div>
          <AddWord initialize={this.initialize}></AddWord>
        </div>
        <div>
          <SearchWord initialize={this.initialize} handleChange={this.handleChange} clickHandler={this.clickHandler}></SearchWord>
          <GlossaryView entries={this.state.wordEntries} remove={this.remove} edit={this.edit}></GlossaryView>
        </div>
      </div>
    )
  }
}

export default Glossary;

ReactDOM.render(<Glossary />, document.getElementById('root'));

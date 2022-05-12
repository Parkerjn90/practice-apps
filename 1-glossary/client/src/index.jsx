import React from "react";
import ReactDOM, { render } from "react-dom";
import AddWord from './components/addNewWord.jsx';
import SearchWord from './components/queryExistingWord.jsx';
import GlossaryView from './components/glossaryView.jsx';

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordEntries: []
    };
    this.initialize = this.initialize.bind(this);
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
      this.setState(wordResponse);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  remove() {

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
          <SearchWord initialize={this.initialize}></SearchWord>
          <GlossaryView entries={this.state.wordEntries} remove={this.remove} edit={this.edit}></GlossaryView>
        </div>
      </div>
    )
  }
}

export default Glossary;

ReactDOM.render(<Glossary />, document.getElementById('root'));

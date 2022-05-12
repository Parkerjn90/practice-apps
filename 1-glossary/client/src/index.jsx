import React from "react";
import ReactDOM, { render } from "react-dom";
import addWord from './components/addNewWord.jsx';
import searchWord from './components/queryExistingWord.jsx';
import glossaryView from './components/glossaryView.jsx';

class Glossary extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    wordEntries: [  // don't forget to remove sample data
      {word: 'banana', definition: 'sweet yellow fruit'},
      {word: 'apple', definition: 'sweet, crunchy fruit'},
      {word: 'orange', definition: 'sweet and sour citrus fruit'}
    ]
  };
}

  render() {
    return (
      <div>
        <header>
        <h1>Glossary App</h1>
        </header>
        <div>
        <addNewWord></addNewWord>
          <div>
            <searchNewWord></searchNewWord>
            <glossaryView entries={this.state.wordEntries}></glossaryView>
          </div>
        </div>
      </div>
   )
  }
}

export default Glossary;

ReactDOM.render(<Glossary />, document.getElementById('root'));

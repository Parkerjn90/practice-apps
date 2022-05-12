import React from "react";
import ReactDOM, { render } from "react-dom";
import AddWord from './components/addNewWord.jsx';
import SearchWord from './components/queryExistingWord.jsx';
import GlossaryView from './components/glossaryView.jsx';

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordEntries: [  // don't forget to remove sample data
        { word: 'banana', definition: 'sweet yellow fruit' },
        { word: 'apple', definition: 'sweet, crunchy fruit' },
        { word: 'orange', definition: 'sweet and sour citrus fruit' }
      ]
    };
  }


  render() {
    return (
      <div>
        <header>
          <h1>Personal Glossary App</h1>
        </header>
        <div>
          <AddWord></AddWord>
        </div>
        <div>
          <SearchWord></SearchWord>
          <GlossaryView entries={this.state.wordEntries}></GlossaryView>
        </div>
      </div>
    )
  }
}

export default Glossary;

ReactDOM.render(<Glossary />, document.getElementById('root'));

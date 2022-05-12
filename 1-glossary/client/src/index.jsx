import React from "react";
import ReactDOM, { render } from "react-dom";
import addWord from './components/addNewWord.jsx';
import searchWord from './components/queryExistingWord.jsx';

class Glossary extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    wordEntries: []
  };
}

  render() {
    return (
      <div>
        <header>
        <h1>Glossary App</h1>
        <addNewWord></addNewWord>
        <searchNewWord></searchNewWord>
        </header>
      </div>
   )
  }
}

export default Glossary;

ReactDOM.render(<Glossary />, document.getElementById('root'));

import React from "react";
import ReactDOM, { render } from "react-dom";
import addNewWord from './components/addNewWord.jsx';
import queryExistingWord from './components/queryExistingWord.jsx';

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
        <
        </header>
      </div>
   )
  }
}

export default Glossary;

ReactDOM.render(<Glossary />, document.getElementById('root'));

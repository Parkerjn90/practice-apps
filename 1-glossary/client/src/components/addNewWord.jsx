import React from 'react';
import { render } from 'react-dom';

class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newWord: []
    }
  }

  render() {
    return (
      <div>
          <input type="text" id="entry" name="entry">Word:</input>
          <input type="text" id="def" name="def">Definition:</input>
          <button>Add Word</button>
      </div>
    )
  }
}

export default AddWord;
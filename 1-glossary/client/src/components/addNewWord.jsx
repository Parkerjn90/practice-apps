import React from 'react';

class addWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newWord: []
    }
  }

  render() {
    return (
      <div>
        <input type="text" name="add" id="name">Word:</input>
        <input type="text" name="definition" id="definition">Definition:</input>
        <button>Add Word</button>
      </div>
    )
  }
}

export default addWord;
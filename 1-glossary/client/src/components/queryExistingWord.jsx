import React from 'react';

class searchWord extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      wordLookUp: ''
    }
  }

  render() {
    return (
      <div>
        <input type="text" name="search" id="search">Search Word</input>
        <button>Search</button>
      </div>
    )
  }
}

export default searchWord;
import React from 'react';
import {render} from 'react-dom';

class SearchWord extends React.Component {
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

export default SearchWord;
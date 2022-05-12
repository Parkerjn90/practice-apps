import React from 'react';
import {render} from 'react-dom';

class SearchWord extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({search: e.target.value});
  }

  clickHandler(e) {
    e.preventDefault();
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <p>Search Word:</p><input onChange={this.handleChange}/>
        <button onClick={this.clickHandler}>Search</button>
      </div>
    )
  }
}

export default SearchWord;
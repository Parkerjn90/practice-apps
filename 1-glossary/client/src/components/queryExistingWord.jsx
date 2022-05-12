import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

class SearchWord extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      word: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({word: e.target.value});
  }

  clickHandler(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/searchword',
      data: this.state,
      contentType: 'application/json'
    })
    .then((response) => {
      console.log(response);
      // refresh the page to include the word on the screen
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render() {
    return (
      <div>
        <p>Search Word:</p><input onChange={this.handleChange}/>
        <button onClick={this.clickHandler}>Search</button>
        <p>{this.state.response}</p>
      </div>
    )
  }
}

export default SearchWord;
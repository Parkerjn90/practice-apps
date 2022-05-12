import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newWord: ''
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  inputHandler(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({newWord: e.target.value})
  }

  clickHandler(e) {
    e.preventDefault();
    console.log('clicked again');
    axios({
      method: 'post',
      url: '/addword',
      data: this.state.newWord,
      success: () => {
        console.log('success');
      },
      contentType: 'string'
    });
  }

  render() {
    return (
      <form>
          <p>Add Word:</p><input onChange={this.inputHandler}/>
          <button onClick={this.clickHandler}>Add Word</button>
      </form>
    );
  }
}

export default AddWord;
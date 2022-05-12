import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  inputHandler(e) {
    e.preventDefault();
    this.setState({word: e.target.value})
  }

  clickHandler(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/addword',
      data: this.state,
      success: () => {
        console.log('success');
      },
      contentType: 'application/json'
    })
    .then(() => {
      this.props.initialize();
    })
    .catch((err) => {
      console.error(err);
    })
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
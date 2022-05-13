import React from 'react';
import { render } from 'react-dom'
import axios from 'axios';


class GlossaryEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    }
    this.clickDelete = this.clickDelete.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.updateState = this.updateState.bind(this);
  }


  remove() {
    console.log(this.state)
    axios({
      method: 'delete',
      url: '/searchword',
      data: this.state, // word to which the button is attached,
      contentType: 'application/json'
    })
    .then(() => {
      this.props.initialize();
    })
    .catch((err) => {
      console.error(err);
    })
  }

  edit() {

  }

  updateState(e) {
    e.preventDefault();
    this.setState({word: this.props.entry.word})
  }

  clickDelete(e) {
    e.preventDefault();
    this.remove(this.state.word);
  }



  render() {

    return (
      <div>
        <dl>
          <dt><b>{this.props.entry.word}</b></dt>
          <dd>{this.props.entry.definition}</dd>
        </dl>
        <button onClick={this.props.edit} onMouseEnter={this.updateState}>Edit</button><button onMouseEnter={this.updateState} onClick={this.clickDelete}>Delete</button>
      </div>
    )
  }
}

export default GlossaryEntry;
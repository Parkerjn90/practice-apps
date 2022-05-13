import React from 'react';
import { render } from 'react-dom'
import axios from 'axios';


class GlossaryEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: '',
      isClicked: true
    }
    this.clickDelete = this.clickDelete.bind(this);
    this.remove = this.remove.bind(this);
    this.editDefinition = this.editDefinition.bind(this);
    this.updateState = this.updateState.bind(this);
    this.toggleInput = this.toggleInput.bind(this);
    this.updateDefinition = this.updateDefinition.bind(this);
    this.submit = this.submit.bind(this);
  }


  remove() {
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

  updateDefinition(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({definition: e.target.value});
  }

  editDefinition() {
    axios({
      method: 'patch',
      url: '/searchword',
      data: this.state,
      contentType:'application/json'
    })
    .then(() => {
      this.props.initialize();
    })
    .catch((err) => {
      console.error(err);
    })
  }

  updateState(e) {
    e.preventDefault();
    this.setState({word: this.props.entry.word})
  }

  clickDelete(e) {
    e.preventDefault();
    this.remove();
  }

  toggleInput(e) {
    e.preventDefault();
    var toggle = !this.state.isClicked;
    this.setState({isClicked: toggle})
  }

  submit(e) {
    e.preventDefault();
    this.editDefinition();
  }

  render() {

    return (
      <div>
        <dl>
          <dt><b>{this.props.entry.word}</b></dt>
          <dd>{this.props.entry.definition}</dd>
        </dl>
        <div hidden={this.state.isClicked}><input onChange={this.updateDefinition}/><button onClick={this.toggleInput} onMouseEnter={this.updateState}>Cancel</button><button onClick={this.submit} onMouseEnter={this.updateState}>Submit</button></div>
        <button onClick={this.toggleInput} onMouseEnter={this.updateState}>Edit</button><button onMouseEnter={this.updateState} onClick={this.clickDelete}>Delete</button>
      </div>
    )
  }
}

export default GlossaryEntry;
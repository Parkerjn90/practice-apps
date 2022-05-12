import React from 'react';

const glossaryEntry = (props) => {

  render () {
    return (
      <div>
        <dl>
          <dt>{props.entry.word}</dt>
          <dd>{props.entry.definition}</dd>
        </dl>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  }

}

export default glossaryEntry;
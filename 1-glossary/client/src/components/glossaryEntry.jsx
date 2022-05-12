import React from 'react';
import {render} from 'react-dom'

const GlossaryEntry = (props) => {


    return (
      <div>
        <dl>
          <dt><b>{props.entry.word}</b></dt>
          <dd>{props.entry.definition}</dd>
        </dl>
        <button>Edit</button><button>Delete</button>
      </div>
    )
}

export default GlossaryEntry;
import React from 'react';
import { render } from 'react-dom';
import glossaryEntry from './glossaryEntry.jsx';

const glossary = (props) => {

  render () {
    return (
      <div>
        {props.entries.map((entry, i) => ( //  will need to get rid of i when pulling real data (will have id key)
          <glossaryEntry key={i} entry={entry}></glossaryEntry>  // will need to change i to entry.id
        ))}
      </div>
    )
  };

}

export default glossaryView;
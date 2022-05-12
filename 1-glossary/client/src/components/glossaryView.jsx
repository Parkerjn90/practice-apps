import React from 'react';
import { render } from 'react-dom';
import GlossaryEntry from './glossaryEntry.jsx';

const GlossaryView = (props) => {

    return (
      <div>
        {props.entries.map((entry, i) => ( //  will need to get rid of i when pulling real data (will have id key)
          <GlossaryEntry key={i} entry={entry}></GlossaryEntry>  // will need to change i to entry.id
        ))}
      </div>
    )
}

export default GlossaryView;
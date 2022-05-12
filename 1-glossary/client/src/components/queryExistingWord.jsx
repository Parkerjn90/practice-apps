import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

const SearchWord = (props) => {

    return (
      <div>
        <p>Search Word:</p><input onChange={props.handleChange}/>
        <button onClick={props.clickHandler}>Search</button>
      </div>
    );
}

export default SearchWord;
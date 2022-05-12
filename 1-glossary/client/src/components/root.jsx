import React from "react";
import { render } from "react-dom";

class Root extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    wordEntries: {}
  };
}

  render() {
    return (
      <div>
        <p>Hello, World!</p>
      </div>
   )
  }
}

export default Root;
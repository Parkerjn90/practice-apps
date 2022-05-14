import React from "react";
import { render } from "react-dom";
import App from './components/app.jsx';


  const root = ReactDOM.createRoot(document.getElementById("root"));
  const element = <App />;
  root.render(element);


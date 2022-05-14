import React from "react";
import { render } from "react-dom";
import { userInfoForm } from './userInfoForm.jsx';
import { shippingInfoForm } from './shippingInfoForm.jsx';
import { paymentInfoForm } from './paymentInfoForm.jsx';
import { confirmationPage } from './confirmationPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      startToggle: true,
      infoToggle: false,
      shippingToggle: false,
      paymentToggle: false,
      confirmationToggle: false
    }
  }

  render() {
    return (
      <div>
        <p>Hello, World!</p>
        <p><code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code></p>
      </div>
    );
  };
}


export default App;
//
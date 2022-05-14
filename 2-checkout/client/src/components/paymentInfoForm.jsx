import React from "react";

const paymentInfoForm = (props) => {
  return (
    <div>
      <h3>Payment Info</h3>
      <p>Credit Card Number:</p>
      <input type="number" name="creditCard" placeholder="   -   -   -   " />
      <p>Expiration Date:</p>
      <input type="date" name="expDate" />
      <p>CVV</p>
      <input type="number" name="cvv" minLength="3" maxLength="3" />
      <p>Billing Zip Code</p>
      <input type="number" name="billingZip" minLength="5" maxLength="5" />
    </div>
  )
}
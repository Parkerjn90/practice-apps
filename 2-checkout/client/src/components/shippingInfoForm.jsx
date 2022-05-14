import React from "react";

const shippingInfoForm = (props) => {
  return(
    <div>
      <h3>Shipping Info</h3>
      <p>Address Line 1:</p>
      <input type="text" name="line1" placeholder="123 Alphabet Rd."/>
      <p>Address Line 2: optional</p>
      <input type="text" name="line2" placeholder="ex: Apt 2, Suite A7"/>
      <p>City:</p>
      <input type="text" name="city"/>
      <p>State:</p>
      <input type="text" name="state" minLength="2" maxLength="2"/>
      <p>Zip:</p>
      <input type="number" name="shippingZip" minLength="5" maxLength="5"/>
      <p>Phone Number:</p>
      <input type="tel" name="phoneNumber"/>
    </div>
  )
}
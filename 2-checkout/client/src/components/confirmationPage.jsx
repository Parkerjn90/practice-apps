import React from "react";

const confirmationPage = ({props}) => {
  return(
    <div>
      <h3>Confirm Your Information</h3>
      <div className="shipping">
        <p>{`Username: ${userInfo.username}`}</p><p>{`E-mail: ${userInfo.email}`}</p>
        <p>{`Phone Number ${userInfo.phone}`}</p>
        <p>{`Shipping Information\n ${userInfo.line1} ${userInfo.line2}\n ${userInfo.city},${userInfo.state} ${userInfo.billingZip}`}</p>
        <p>{`Payment Information\n `}</p>
      </div>
      <div className="payment">

      </div>
    </div>
  )
}

export default confirmationPage;
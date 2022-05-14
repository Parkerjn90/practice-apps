import React from "react";

const userInfoForm = (props) => {

  return (
    <div>
      <h3>Sign In</h3>
      <p>Username:</p>
      <input type="text" name="username" placeholder="username"/>
      <p>E-mail:</p>
      <input type="text" name="email" placeholder="janedoe95@gmail.com"/>
      <p>Password:</p>
      <input type="password" name="password" placeholder="8-15 characters" minLength="8" maxLength="15"/>
    </div>
  )
}
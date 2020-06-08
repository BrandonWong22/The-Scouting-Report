import React, { Component } from "react";
import "./Login.scss";

class Login extends Component<{}, LoginPageState> {
  state = {
    isLoggedIn: false,
    profileData: null,
    loadLoginPage: true,
    loadRegisterPage: false,
    userEmail: "",
    userPassword: "",
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-page__container">
          <form className="login-page__form">
            <div className="login-page__input-container">
              <label>EMAIL</label>
              <input placeholder="Enter email" type="text" />
            </div>
            <div className="login-page__input-container">
              <label>PASSWORD</label>
              <input placeholder="Enter email" type="password" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

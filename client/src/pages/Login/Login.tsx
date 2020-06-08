import React, { Component } from "react";
import "./Login.scss";
import Facebook from "../../components/Facebook/Facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

class Login extends Component<{}, LoginPageState> {
  state = {
    isLoggedIn: false,
    profileData: null,
    loadLoginPage: true,
    loadRegisterPage: false,
    userEmail: "",
    userPassword: "",
  };

  handleRegisterMode = (event: any) => {
    event.preventDefault();
    this.setState({
      loadLoginPage: false,
      loadRegisterPage: true,
    });
  };

  handleLoginMode = (event: any) => {
    event.preventDefault();
    this.setState({
      loadRegisterPage: false,
      loadLoginPage: true,
    });
  };

  render() {
    if (this.state.loadLoginPage) {
      return (
        <div className="login-page">
          <div className="login-page__container">
            <div className="login-page__login-register-container">
              <div className="login-page__button-container login-page__button-container--active">
                <button
                  className="login-page__mode-button"
                  onClick={this.handleLoginMode}
                >
                  Login
                </button>
              </div>
              <div className="login-page__button-container">
                <button
                  className="login-page__mode-button"
                  onClick={this.handleRegisterMode}
                >
                  Register
                </button>
              </div>
            </div>

            <form className="login-page__form">
              <div className="login-page__input-container">
                <div className="login-page__icon-ctn">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="login-page__fontawesome"
                  />
                </div>
                <input
                  placeholder="email"
                  type="text"
                  className="login-page__input"
                />
              </div>

              <div className="login-page__input-container">
                <div className="login-page__icon-ctn">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="login-page__fontawesome"
                  />
                </div>
                <input
                  placeholder="password"
                  type="password"
                  className="login-page__input"
                />
              </div>

              <button className="login-page__login-button">LOGIN</button>
              <p style={{ margin: 10 }}>OR</p>
              <Facebook />
            </form>
          </div>
        </div>
      );
    } else if (this.state.loadRegisterPage) {
      return (
        <div className="login-page">
          <div className="login-page__container">
            <div className="login-page__login-register-container">
              <div className="login-page__button-container ">
                <button
                  className="login-page__mode-button"
                  onClick={this.handleLoginMode}
                >
                  Login
                </button>
              </div>
              <div className="login-page__button-container login-page__button-container--active">
                <button
                  className="login-page__mode-button"
                  onClick={this.handleRegisterMode}
                >
                  Register
                </button>
              </div>
            </div>

            <form className="login-page__form">
              <div className="login-page__input-container">
                <div className="login-page__icon-ctn">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="login-page__fontawesome"
                  />
                </div>
                <input
                  placeholder="email"
                  type="text"
                  className="login-page__input"
                />
              </div>

              <div className="login-page__input-container">
                <div className="login-page__icon-ctn">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="login-page__fontawesome"
                  />
                </div>
                <input
                  placeholder="password"
                  type="password"
                  className="login-page__input"
                />
              </div>

              <button className="login-page__login-button">LOGIN</button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Login;

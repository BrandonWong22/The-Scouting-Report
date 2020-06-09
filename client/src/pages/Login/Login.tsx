import React, { Component } from "react";
import "./Login.scss";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { firebaseConfig } from "../../firebase/fire";

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
});

class Login extends Component<LoginPageProps, LoginPageState> {
  state = {
    isSignedIn: false,
  };

  // Configure FirebaseUI.
  uiConfig: any = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // signInSuccessUrl: '/signedIn',
    callbacks: {
      signInSuccess: () => false,
    },
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
  };

  componentDidMount() {
    // this.unregisterAuthObserver =
    firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
  }

  componentDidUpdate(_: any, prevState: { isSignedIn: Boolean }) {
    if (prevState.isSignedIn !== this.state.isSignedIn && !prevState.isSignedIn)
      this.props.history.push({
        pathname: "/search",
        state: {
          isSignedIn: this.state.isSignedIn,
        },
      });
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-page__container">
          <h1>Login</h1>
          <div className="login-page__icon-ctn">
            <FontAwesomeIcon
              icon={faDollarSign}
              className="login-page__image"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="login-page__image"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="login-page__image"
            />
          </div>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </div>
    );
  }
}

export default Login;

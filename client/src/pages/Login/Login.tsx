import React, { Component } from "react";
import "./Login.scss";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Redirect } from "react-router-dom";

firebase.initializeApp({
  apiKey: "AIzaSyDyKwEkYTg5Ap3NBVktoJtGwuS1QnDmoI0",
  authDomain: "the-scouting-report.firebaseapp.com",
});

class Login extends Component<{}, LoginPageState> {
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

  render() {
    console.log(this.props);

    if (!this.state.isSignedIn) {
      return (
        <div className="login-page">
          Not signed in
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    } else {
      return (
        <div className="login-page">
          logout
          {/* <Redirect
            to={{
              pathname: "/search",
              // state: { isSignedIn: this.state.isSignedIn },
            }}
          /> */}
          <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
        </div>
      );
    }
  }
}

export default Login;

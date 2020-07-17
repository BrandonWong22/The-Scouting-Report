import React, { Component } from "react";
import "./Login.scss";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebaseConfig } from "../../firebase/fire";
import Logo from "../../assets/images/logo/logo3.png";
import ClipLoader from "react-spinners/ClipLoader";

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
});

class Login extends Component<LoginPageProps, LoginPageState> {
  state = {
    isSignedIn: false,
    initialized: false,
  };

  // Configure FirebaseUI.
  uiConfig: any = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
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
    firebase.auth().onAuthStateChanged((user: any) => {
      this.setState({ isSignedIn: !!user, initialized: true });
    });
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
        {/* check if firebase is initialized */}
        {this.state.initialized ? (
          <div className="login-page__container">
            <img src={Logo} alt="logo" className="login-page__logo" />
            <div className="login-page__login-btn-ctn">
              <h1>Log In</h1>
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          </div>
        ) : (
          <div className="sweet-loading">
            <ClipLoader size={100} color={"steelblue"} loading={true} />
          </div>
        )}
      </div>
    );
  }
}

export default Login;

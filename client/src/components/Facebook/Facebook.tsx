import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import "./Facebook.scss";

interface IFacebookProps {
  width: any;
}

interface IFacebookState {
  isLoggedIn: Boolean;
  userID: String;
  name: String;
  email: String;
  picture: String;
}

class Facebook extends Component<{}, IFacebookState> {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  componentClicked = () => {
    console.log("clicked");
  };

  responseFacebook = (response: any) => {
    // console.log(response);
    this.setState({
      // isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  render() {
    let fbContent: any;

    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (
        <FacebookLogin
          appId="800932500310611"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div className="facebook">{fbContent}</div>;
  }
}

export default Facebook;

import React, { Component } from "react";
import Socials from "./Socials";

export default class Cover extends Component {
  render() {
    return (
      <div className="profile-cover">
        <div className="profile-cover__content">
          <div>
            <h1>Mai Quoc Viet</h1>
            <h3>Frontend Developer</h3>
          </div>
          <div className="profile-cover__footer">
            <div className="profile-cover__socials">
              <p>Follow Me</p>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

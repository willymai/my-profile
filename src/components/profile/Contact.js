import React, { Component } from "react";
import classnames from "classnames";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
const contacts = [
  {
    icon: "fas fa-map-marker-alt",
    label: "Address",
    text: "Ta Quang Buu Street, Ward 5, District 8",
  },
  {
    icon: "fas fa-phone",
    label: "Phone",
    text: "(084) 789 572 750",
  },
  {
    icon: "fas fa-envelope",
    label: "Email",
    text: "willymai0509@gmail.com",
  },
];
class Contact extends Component {
  componentDidMount() {}

  render() {
    const { active } = this.props;
    return (
      <section
        id="about"
        className={classnames("page-hidden", { page: active })}
      >
        <div className="wrap-content">
          <div className="page__main-block">
            <div className="page__title">
              <i className="fas fa-map-marked-alt" />
              <h2>Contact</h2>
            </div>
            <div className="page__main-block__content">
              <p>Follow below info to contact with me</p>
            </div>
          </div>

          <div className="contact-info">
            {contacts.map((contact, index) => (
              <div className="contact-item" key={index}>
                <i className={contact.icon} />
                <span>{contact.label}</span>
                <p>- {contact.text}</p>
              </div>
            ))}
          </div>

          <div className="map-wrapper">
            <Map
              google={this.props.google}
              zoom={16}
              initialCenter={{
                lat: 10.7366315,
                lng: 106.668371,
              }}
            >
              <Marker position={{ lat: 10.7366315, lng: 106.668371 }} />
            </Map>
          </div>
        </div>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAP9TM1tFsOT3-H6QXWJmi-kPtX7J2OgLI",
})(Contact);

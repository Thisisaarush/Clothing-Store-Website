import React from "react";

// style
import "./ContactPage.style.scss";

// images
import Profile from "../../assets/profile.png";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>GET IN TOUCH</h1>
      <a href="https://thisisaarush.github.io/My_Portfolio/" target="blank">
        <h3 className="name">Aarush Tanwar - Web & Mobile Developer</h3>
        <img className="profile-image" src={Profile} alt="Aarush" />
      </a>
    </div>
  );
};

export default ContactPage;

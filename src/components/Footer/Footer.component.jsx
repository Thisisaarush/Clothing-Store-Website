import React from "react";

// style
import "./Footer.style.scss";

// images
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={Logo} alt="brand" />
      <h2>Clothing Store</h2>
      <h4>&copy; All Rights Reserved</h4>
    </div>
  );
};

export default Footer;

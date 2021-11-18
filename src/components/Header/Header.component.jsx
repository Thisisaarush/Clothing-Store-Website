import React from "react";
import { Link } from "react-router-dom";

// logo
import Logo from "../../assets/logo.png";

// style
import "./Header.style.scss";

// firebase
import { auth } from "../../firebase/Firebase.utils";

// reducer
import { useSelector } from "react-redux";

const Header = () => {
  // accessing currentUser from userReducer redux
  const current = useSelector((state) => state.user.currentUser);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="brand" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {current ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

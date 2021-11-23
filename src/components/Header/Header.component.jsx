import React from "react";
import { Link } from "react-router-dom";

// logo
import Logo from "../../assets/logo.png";

// style
import "./Header.style.scss";

// cart
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";

// firebase
import { auth } from "../../firebase/Firebase.utils";

// reducer
import { useSelector } from "react-redux";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const hidden = useSelector((state) => state.cart.hidden);

  return (
    <div className="header">
      <Link to="/Clothing-Store-Website" className="logo-container">
        <img src={Logo} alt="brand" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/Clothing-Store-Website/shop">
          SHOP
        </Link>
        <Link className="option" to="/Clothing-Store-Website/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/Clothing-Store-Website/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;

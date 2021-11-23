import React from "react";
import { Link } from "react-router-dom";

// style
import "./CartDropdown.style.scss";

// custom buttom
import CustomButton from "../CustomButton/CustomButton";

// cart item
import CartItem from "../CartItem/CartItem.component";

// redux
import { useSelector, useDispatch } from "react-redux";
import { ToggleCartHidden } from "../../Redux/Cart/Cart.action";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <Link to="/Clothing-Store-Website/checkout" className="checkout-button">
        <CustomButton onClick={() => dispatch(ToggleCartHidden())}>
          GO TO CHECKOUT
        </CustomButton>
      </Link>
    </div>
  );
};

export default CartDropdown;

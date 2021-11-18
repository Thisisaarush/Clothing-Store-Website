import React from "react";

// style
import "./CartDropdown.style.scss";

// custom buttom
import CustomButton from "../CustomButton/CustomButton";

// cart item
import CartItem from "../CartItem/CartItem.component";

// redux
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;

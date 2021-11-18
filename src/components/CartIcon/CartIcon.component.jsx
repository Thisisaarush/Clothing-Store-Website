import React from "react";

// style
import "./CartIcon.style.scss";

// cart icon
import ShoppingIcon from "../../assets/shopping-bag.svg";

// redux
import { useDispatch, useSelector } from "react-redux";
import { ToggleCartHidden } from "../../Redux/Cart/Cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) =>
    state.cart.cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
  );

  return (
    <div className="cart-icon" onClick={() => dispatch(ToggleCartHidden())}>
      <img src={ShoppingIcon} alt="cart" className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;

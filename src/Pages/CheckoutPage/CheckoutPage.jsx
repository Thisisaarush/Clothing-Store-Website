import React from "react";

// style
import "./CheckoutPage.style.scss";

// redux
import { useSelector } from "react-redux";

// component
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";

// stripe
import StripeButton from "../../components/StripeButton/StripeButton.component";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartTotal = useSelector((state) =>
    state.cart.cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <div className="total">
        <span>Total: ${cartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br /> 4242 4242 4242 4242 - Exp: 11/2021 - CVV: 1234
      </div>
      <StripeButton price={cartTotal} />
    </div>
  );
};

export default CheckoutPage;

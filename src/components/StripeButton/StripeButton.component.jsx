import React from "react";

// stripe
import StripeCheckout from "react-stripe-checkout";

// image
import logo from "../../assets/logo.png";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JLrCeSGGkZgkx5gmePwMozTKILSmNhjQDhSjDuodMiBpJiaHloQsKPYgxp5mjvu1lRUgjlCuOw6CJcYYSjIXPc000UakjaqSV";

  const onToken = (token) => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Store"
      billingAddress
      shippingAddress
      image={logo}
      description={`Your Total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;

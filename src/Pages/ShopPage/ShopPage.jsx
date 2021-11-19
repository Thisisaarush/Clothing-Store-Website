import React from "react";
import { Outlet } from "react-router-dom";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Outlet />
    </div>
  );
};

export default ShopPage;

import React, { useState } from "react";

// data
import ShopData from "./ShopData";

// components
import CollectionContainer from "../../components/CollectionContainer/CollectionContainer.component";

const ShopPage = () => {
  const [collections] = useState(ShopData);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionContainer key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;

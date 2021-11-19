import React from "react";

// style
import "./CollectionsOverview.styled.scss";

// component
import CollectionContainer from "../CollectionContainer/CollectionContainer.component";

// redux
import { useSelector } from "react-redux";

const CollectionsOverview = () => {
  const collections = useSelector((state) => state.shop.collections);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionContainer key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;

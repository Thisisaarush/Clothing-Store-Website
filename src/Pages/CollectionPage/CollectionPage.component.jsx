import React from "react";
import { useParams } from "react-router-dom";

// style
import "./CollectionPage.style.scss";

// components
import CollectionItem from "../../components/CollectionItem/CollectionItem.component";

// redux
import { useSelector } from "react-redux";

const CollectionPage = () => {
  const params = useParams();

  const collections = useSelector((state) => state.shop.collections);
  const selectedCollection = (collectionUrlParams) =>
    collections[collectionUrlParams];

  const { title, items } = selectedCollection(params.collectionId);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;

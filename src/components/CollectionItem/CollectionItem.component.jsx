import React from "react";

// style
import "./CollectionItem.style.scss";

// custom button
import CustomButton from "../CustomButton/CustomButton";

// redux
import { useDispatch } from "react-redux";
import { AddItem } from "../../Redux/Cart/Cart.action";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(AddItem(item))}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;

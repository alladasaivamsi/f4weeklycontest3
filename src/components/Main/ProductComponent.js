import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import "./ProductComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();

  const renderList = products.map((product) => {
    const { id, title, price, images } = product;
    return (
      <div className="content" key={id}>
        <div className="image">
          <img src={images[0]} alt={title} />
        </div>
        <div className="card-details">
          <div className="id">
            <span>Id : </span>
            {id}
          </div>
          <div className="title">
            <span>Title : </span>
            {title}
          </div>
          <div className="price">
            <span>Price : </span>$ {price}
          </div>
        </div>
        <button onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </button>
      </div>
    );
  });

  return <div className="items-container">{renderList}</div>;
};

export default ProductComponent;

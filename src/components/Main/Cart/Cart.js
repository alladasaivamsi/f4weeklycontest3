import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions/cartActions";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.addToCart.cart);
  console.log(cartItems);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  console.log(totalAmount);
  return (
    <div className="cart-container">
      <div className="cart">
        <h1>Cart Page</h1>
        {cartItems.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          <div className="cartDetails">
            {cartItems.map((items) => {
              const { id, title, price, images } = items;
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
                  <button
                    className="removeButton"
                    onClick={() => dispatch(removeFromCart(id))}
                  >
                    Remove From Cart
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="checkOutList">
        <div className="checkOutListHeading">Check Out List</div>
        <div className="productContainer">
          {cartItems.map((items) => {
            const { id, title, price } = items;
            return (
              <div className="checkOutList-data" key={id}>
                <div className="checkOutList-card-details">
                  <div className="title">
                    <span>Title : </span>
                    {title}
                  </div>
                  <div className="price">
                    <span>Price : </span>$ {price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="totalAmount">
          <div className="totalAmountData">
            <h3>Total Amount : </h3>
            <h3>$ {totalAmount}</h3>
          </div>
          <div>
            <button>Click To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

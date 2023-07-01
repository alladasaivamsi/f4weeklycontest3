import { ActionTypes } from "../contants/action-types";

export const addToCart = (prod) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: prod,
  };
};

export const removeFromCart = (product_id) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: product_id,
  };
};

export const checkOut = () => {
  return {
    type: ActionTypes.CHECKOUT,
  };
};

import { ActionTypes } from "../contants/action-types";

const initialState = {
  cart: [],
};

export const addToCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      const existingItem = state.cart.find((item) => item.id === payload.id);
      if (existingItem) {
        return state;
      }
      return { ...state, cart: [...state.cart, payload] };

    case ActionTypes.REMOVE_FROM_CART:
      const updateCartItems = state.cart.filter((item) => item.id !== payload);
      return {
        ...state,
        cart: updateCartItems,
      };

    case ActionTypes.CHECKOUT:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

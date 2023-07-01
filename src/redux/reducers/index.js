import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { addToCartReducer } from "./addToCartReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  addToCart: addToCartReducer,
});

export default reducers;

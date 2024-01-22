import { CART_COUNT_ACTION } from "../actions/cartActions";

const initialCartCount = [];

export const cartReducer = (state = initialCartCount, action) => {
  switch (action.type) {
    case CART_COUNT_ACTION:
      return [...state, action.payload];
    default:
      return state;
  }
};

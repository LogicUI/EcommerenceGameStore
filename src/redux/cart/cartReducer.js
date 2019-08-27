import { ADD_ITEM } from './cartType';
import cartHelper from "./cartHelper";

const INITIAL_STATE = {
  cart: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: cartHelper(state.cart,action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;

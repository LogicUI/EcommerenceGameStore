import { FETCH_PRODUCTS } from './productTypes';
const INITIAL_STATE = {
  productList: []
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productList: [...state.productList, ...action.payload]
      };
    default:
      return state;
  }
};

export default productReducer;

import { FETCH_PRODUCTS } from './productTypes';
import axios from '../../api/axios';

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get('/products');
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

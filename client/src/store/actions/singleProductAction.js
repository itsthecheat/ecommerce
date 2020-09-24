import { SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS, SINGLE_PRODUCT_FAIL } from '../../constants/productConstants'
import axios from 'axios';

const singleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_PRODUCT_REQUEST });
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: data })
  }
  catch(error) {
    dispatch({ type: SINGLE_PRODUCT_FAIL, payload: error.message })
  }
}

export { singleProduct }

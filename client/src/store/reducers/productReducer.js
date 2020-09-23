import { PRODUCT_REQUEST, PRODUCT_FAIL, PRODUCT_SUCCESS} from '../../constants/productConstants';
const initialState = { products: [] };

const productReducer = (state = initialState, action) => {

  switch (action.type) {
    case PRODUCT_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};

export default productReducer;

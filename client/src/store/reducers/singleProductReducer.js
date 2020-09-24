import { SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_FAIL, SINGLE_PRODUCT_SUCCESS} from '../../constants/productConstants'
const initialState = { product: {} }

const singleProductReducer = (state = initialState, action) => {

  switch (action.type) {
    case SINGLE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case SINGLE_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case SINGLE_PRODUCT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
};

export default singleProductReducer;

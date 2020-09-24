import productReducer from './productReducer';
import cartReducer from './cartReducer';
import singleProductReducer from './singleProductReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    products: productReducer,
    product: singleProductReducer,
    cart: cartReducer,
});

export default rootReducer;

import { ADD_TO_CART, REMOVE_FROM_CART } from '../../constants/cartConstants'

const initialState = {
  cartItems: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload
      const product = state.cartItems.find(x => x.id === item.id)
      if (product) {
        return {
          cartItems:
          state.cartItems.map(x => x.id === product.id ? item: x)
        }
      }
      return { cartItems: [...state.cartItems, item] }
    case REMOVE_FROM_CART:
      return { cartItems: state.cartItems.filter(x => x.id !== action.payload)}
    default:
     return state
  }
}

export default cartReducer

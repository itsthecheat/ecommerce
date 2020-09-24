import { ADD_TO_CART, REMOVE_FROM_CART } from '../../constants/cartConstants'
import Axios from 'axios'

const addToCart = (productId, qty) => async (dispatch) => {
  try{
    const {data} = await Axios.get(`https://fakestoreapi.com/products/${productId}`)
    dispatch({ type: ADD_TO_CART, payload:{
      id: data.id,
      name: data.title,
      image: data.image,
      price: data.price,
      qty
    } })
  }
  catch (error) {

  }
}
const removeFromCart = (productId) => (dispatch) => {
  dispatch({type: REMOVE_FROM_CART, payload: productId})
}
export { addToCart, removeFromCart }

import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_CREATE_FAIL } from '../../constants/userConstants'
import Axios from 'axios'

const signin = (productId, qty) => async (dispatch) => {
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
const createUser = (productId) => (dispatch) => {
  dispatch({type: REMOVE_FROM_CART, payload: productId})
}
export { signin, createUser }

/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/actions/cartActions'
import styles from './Cart.module.css'

const Cart = (props) => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const dispatch = useDispatch()
  const productId = props.match.params.id
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId))
  }
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [])
  const handleCheckout = () => {
    props.history.push('/login?redirect=shipping')
  }
  return (
    <div className={styles.cartContainer}>
      <div className={styles.list}>
        <div>
          <h1>Cart</h1>
        </div>
        <ul className={styles.listContainer}>
          {cartItems.length === 0 ? (
            <div>Cart Empty</div>
          ) : (
            cartItems.map((item) => (
              <li>
                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.itemName}>{item.name}</div>
                <div>
                  <label htmlFor='quantity'>Qty: </label>
                  <input
                    value={item.qty}
                    onChange={(e) => {
                      dispatch(addToCart(item.id, e.target.value))
                    }}
                    type='number'
                    id='name'
                    name='name'
                    required
                    minLength='1'
                    maxLength='3'
                    size='3'
                  />
                </div>
                <button
                  className={styles.removeButton}
                  type='button'
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  {' '}
                  Remove
{' '}
                </button>
                <div className={styles.itemPrice}>
                  $
{item.price.toFixed(2)}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className={styles.total}>
        <h3>
          Subtotal ( 
{' '}
{cartItems.reduce((a, c) => a + Number(c.qty), 0)} items) :
          $
          {cartItems
            .reduce((a, c) => a + c.price * Number(c.qty), 0)
            .toFixed(2)}
        </h3>
        <button
          type='button'
          onClick={handleCheckout}
          className={styles.cartButton}
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart

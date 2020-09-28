import React, {Component} from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { GrCart } from 'react-icons/gr'
import styles from './CartIcon.module.css'

const CartIcon = (props) => {

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const qty = cartItems.map(item =>{
    return Number(item.qty)}
  )
  console.log(qty)
   return(
  <Link to='/cart'>
    <GrCart className={styles.cart} size="2rem"/>
    <span id={styles.count} className={styles.qty}>{qty.reduce((a, c) =>  a+c, 0)}</span>
  </Link>
)
}

export default CartIcon;

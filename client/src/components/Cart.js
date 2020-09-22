import React, {Component} from 'react'
import { GrCart } from 'react-icons/gr'
import styles from './Cart.module.css'

class Cart extends Component {
  render() {
    return (
    <GrCart className={styles.cart} size="2rem"/>
    );
  }
}

export default Cart;

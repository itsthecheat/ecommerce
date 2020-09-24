import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { GrCart } from 'react-icons/gr'
import styles from './CartIcon.module.css'

class CartIcon extends Component {
  render() {
    return (
      <Link to='/cart'>
        <GrCart className={styles.cart} size="2rem"/>
      </Link>

    )
  }
}

export default CartIcon;

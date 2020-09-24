import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import 'typeface-bebas-neue'
import CartIcon from './CartIcon'

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className={styles.title}><Link to='/'>{this.props.header}</Link></h1>
        <div className={styles.buttonContainer}>
          <div className={styles.account}>
            <button className={styles.accountButton}>Sign-In
            </button>
              <span className={styles.create}>No account? <Link to='/create'>Create one now!</Link>
              </span>

          </div>
          <CartIcon/>
        </div>
      </header>
    );
  }
}

export default Header;

import React, {Component} from 'react'
import styles from './Header.module.css'
import 'typeface-bebas-neue'

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className={styles.title}>{this.props.header}</h1>
        <div className={styles.user}> Welcome, user</div>
      </header>
    );
  }
}

export default Header;

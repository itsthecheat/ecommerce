import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => (
  <footer>
    <span className={styles.name}>
      a react/redux project by
      <Link to='https://www.lesliethe.dev'> leslie behum</Link>
    </span>
  </footer>
)

export default Footer

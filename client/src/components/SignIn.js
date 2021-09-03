import React from 'react'
// import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
import styles from './SignIn.module.css'

const SignIn = (props) => (
  <div className={styles.container}>
    <form className={styles.form} method='get'>
      <label>
        <b>Email</b>
      </label>
      <input type='email' name='email' placeholder='Email' />
      <label>
        <b>Password</b>
      </label>
      <input type='Password' name='password' placeholder='Password' />
      <button type='button' className={styles.accountButton}>
        Sign-In
      </button>
    </form>
  </div>
)

export default SignIn

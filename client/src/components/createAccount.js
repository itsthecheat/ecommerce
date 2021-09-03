/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styles from './CreateAccount.module.css'

const CreateAccount = (props) => {
  return (
    <div className={styles.container}>
      <form className={styles.form} method='get'>
        <label>
          <b>First Name</b>
        </label>
        <input type='firstname' name='firstname' placeholder='First Name' />
        <label>
          <b>Last Name</b>
        </label>
        <input type='lastname' name='lastname' placeholder='Last Name' />
        <label>
          <b>Email</b>
        </label>
        <input type='email' name='email' placeholder='Email' />
        <label>
          <b>Password</b>
        </label>
        <input type='Password' name='password' placeholder='Password' />
        <label>
          <b>* Confirm Password</b>
        </label>
        <input
          type='Password'
          name='confirmpassword'
          placeholder='Confirm Password'
        />
        <button type='button' className={styles.accountButton}>
          Create Account
        </button>
      </form>
    </div>
  )
}

export default CreateAccount

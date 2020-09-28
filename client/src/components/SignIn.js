import React, {useDispatch, useEffect} from 'react'
import styles from './SignIn.module.css'


const SignIn = (props) => {

    return (
    <div className={styles.container}>
    <form className={styles.form} method="get" >
        <label><b>Email
        </b>
        </label>
        <input type="email" name="email" placeholder="Email"/>
        <label><b>Password
        </b>
        </label>
        <input type="Password" name="password" placeholder="Password"/>
        <button className={styles.accountButton}>Sign-In
        </button>

    </form>
</div>
    )
  }


export default SignIn

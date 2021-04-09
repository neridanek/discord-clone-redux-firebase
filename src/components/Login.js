import React from 'react'
import styles from  './Login.module.scss'
import {Button} from "@material-ui/core";
import {auth,provider} from '../firebase';




const Login = () => {
    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))
    }
    return (
        <div className={styles.login}>
            <div className={styles.loginLogo}>
                <img src="https://1000logos.net/wp-content/uploads/2020/10/Discord-logo.png" alt="" />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login

import React from 'react';
import './Login.css';
import LogoSlack from './LogoSlack.svg';
import { Button } from '@material-ui/core';
import { auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = (e) => {
        auth.signInWithPopup(provider).then(result => {
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch(error => {
            console.log(error.message)
        })
    }
        return (
        <div className="login">
            <div className="login__container">
                <img src={LogoSlack} alt=""/>
                <h1>Sign in to Master Programmer DG</h1>
                <p>https://denis-rodriguez.web.app</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login

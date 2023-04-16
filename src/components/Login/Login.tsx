import React from 'react';
import {LoginForm} from "components/Login/LoginForm";
import s from './styles.module.css'
import {useAppSelector} from "redux/store";
import {Redirect} from "react-router-dom";



export const Login: React.FC = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.loginWrapper}>
            <LoginForm />
        </div>
    );
};




import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}
export const Header = ({isAuth,login, ...props}: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/>
            <div className={s.loginBlock}>
                { isAuth
                    ? <div>{login}</div>
                    : <NavLink className={s.loginLink} to={'/login'}>Login</NavLink> }

            </div>
        </header>
    )
}
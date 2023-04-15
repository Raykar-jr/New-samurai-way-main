import React from 'react';
import s from './Header.module.css'
import {useAppSelector} from "redux/ReduxStore";
import {useDispatch} from "react-redux";
import {logOut} from "redux/reducers/authReducer";
import {Button} from "antd";
import {LoginOutlined, LogoutOutlined} from '@ant-design/icons'

export const HeaderContainer: React.FC = () => {
    const dispatch = useDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const login = useAppSelector(state => state.auth.login)
    const logoutHandler = () => dispatch(logOut())

    return (
        <header className={s.headerWrapper}>
                {isAuth
                    ? <div className={s.loginBlock}>
                        <p>{login}</p>
                        <Button icon={<LogoutOutlined />} size={'small'} onClick={logoutHandler}>log out</Button>
                    </div>
                    : <Button className={s.loginLink} type='link' href='/#/login' icon={<LoginOutlined />}>Login</Button>
                }

        </header>
    )
}



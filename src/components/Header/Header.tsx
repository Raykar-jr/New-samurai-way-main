import React from 'react';
import s from './Header.module.css'
import {useAppSelector} from "redux/store";
import {useDispatch} from "react-redux";
import {logout} from "redux/reducers/authReducer";
import {Button} from "antd";
import {LoginOutlined, LogoutOutlined} from '@ant-design/icons'
import { useHistory} from "react-router-dom";

export const HeaderContainer: React.FC = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const login = useAppSelector(state => state.auth.login)
    const logoutHandler = async () => {
        await dispatch(logout())
        history.push("/login");
    }

    return (
        <header className={s.headerWrapper}>
                {isAuth
                    ? <div className={s.loginBlock}>
                        <p>{login}</p>
                        <Button icon={<LogoutOutlined />} size={'small'} onClick={logoutHandler}>log out</Button>
                    </div>
                    : <Button className={s.loginLink} type='link' href='/New-samurai-way-main/#/login' icon={<LoginOutlined />}>Login</Button>
                }

        </header>
    )
}



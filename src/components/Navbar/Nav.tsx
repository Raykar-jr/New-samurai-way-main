import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>


            <div className={s.friendsBlock}>
                <div className={s.friendsTitle}>Friends</div>
                <div className={s.circleBlock}>
                    <div className={s.circle}></div>
                    <div className={s.circle}></div>
                    <div className={s.circle}></div>
                </div>
                <div className={s.namesBlock}>
                    <span className={s.names}>Andrew</span>
                    <span className={s.names}>Sasha </span>
                    <span className={s.names}>Sveta </span>
                </div>
            </div>

        </nav>
    )
}
import React from 'react';
import s from './Nav.module.css'

export const Navbar = () => {
    return (
        <nav className={s.nav}>

            <div className={`${s.item} ${s.active}`}>
                <a href="src/components/Navbar/Nav#">Profile</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Nav#">Messages</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Nav#">News</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Nav#">Music</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Nav#">Settings</a>
            </div>

        </nav>
    )
}
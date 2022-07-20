import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://media.istockphoto.com/photos/minsk-gate-to-the-city-picture-id1135449521?k=20&m=1135449521&s=612x612&w=0&h=B3RuC830SeFg3mJWr9fo6lOBchoj_USHBkE8twNhF_M=" alt=""/>
            </div>
            <div>
                Ava + description
            </div>
            <div>
                My posts
                <div>New Post</div>
                <div className={s.posts}>
                    <div className={s.item}>post 1</div>
                    <div className={s.item}>post 2</div>
                    <div className={s.item}>post 3</div>
                </div>
            </div>
        </div>
    )
}
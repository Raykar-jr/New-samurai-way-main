import React from 'react';
import s from './Users.module.css'
import {dispatchPropsType} from "./UsersContainer";
import axios from "axios";
import UserPhoto from '../../assets/images/user.png'

export type UsersPropsType = {
    users: UserType[]
} & dispatchPropsType
export type UserType = {
    id: number
    followed: boolean
    status: null | string
    name: string
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    location?: {
        city: string
        country: string
    }
}

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {props.users.map(u => {
                    const imgUserLogic = u.photos.small !== null ? u.photos.small : UserPhoto
                    const unfollowHandler = () => {
                        props.unfollow(u.id)
                    }
                    const followHandler = () => {
                        props.follow(u.id)
                    }
                    return (
                        <div key={u.id}>
                <span>
                    <div>
                        <img className={s.photo} src={imgUserLogic} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={unfollowHandler}>Unfollow</button>
                            : <button onClick={followHandler}>Follow</button>}
                    </div>
                </span>

                            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                        </div>
                    )
                }
            )}
        </div>
    );
};


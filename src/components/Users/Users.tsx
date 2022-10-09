import React from 'react';
import s from "./Users.module.css";
import UserPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

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

type UsersNewPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    users: UserType[]
}
export const Users = (props: UsersNewPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return (
                        <span key={index} className={`${s.page} + ${props.currentPage === p ? s.selected : ''}`}
                              onClick={() => props.onPageChanged(p)}> {p}</span>
                    )
                })}

            </div>
            {props.users.map((u: UserType) => {
                    const imgUserLogic = u.photos.small !== null ? u.photos.small : UserPhoto
                    const unfollowHandler = () => {
                        /*axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true,
                        headers: {'API-KEY': '62b1c9b5-2799-4e1c-add0-9db3f425760b'}})*/
                        usersAPI.unfollowUser(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            })
                    }
                    const followHandler = () => {
                       /* axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
                            headers: {'API-KEY': '62b1c9b5-2799-4e1c-add0-9db3f425760b'}})*/
                        usersAPI.followUser(u.id).then(data => {
                               if (data.resultCode === 0) {
                                   props.follow(u.id)
                               }
                            })
                    }
                    return (
                        <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={s.photo} src={imgUserLogic} alt=""/>
                        </NavLink>
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


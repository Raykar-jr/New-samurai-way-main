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
    followingInProgress: Array<number>
    toggleIsFollowing: (isFetching: boolean, userId: number) => void
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
                        props.toggleIsFollowing(true, u.id)
                        usersAPI.unfollowUser(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            props.toggleIsFollowing(false, u.id)
                            })
                    }
                    const followHandler = () => {
                        props.toggleIsFollowing(true, u.id)
                        usersAPI.followUser(u.id).then(data => {
                               if (data.resultCode === 0) {
                                   props.follow(u.id)
                               }
                            props.toggleIsFollowing(false, u.id)
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
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={unfollowHandler}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={followHandler}>Follow</button>}
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


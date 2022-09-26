import React from 'react';
import s from "./Users.module.css";
import UserPhoto from "../../assets/images/user.png";
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
                {pages.map( (p,index) => {
                    return (
                        <span key={index}  className={`${s.page} + ${props.currentPage === p ? s.selected : ''}`}
                               onClick={() => props.onPageChanged(p)}> {p}</span>
                    )
                })}

            </div>
            {props.users.map((u: UserType) => {
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


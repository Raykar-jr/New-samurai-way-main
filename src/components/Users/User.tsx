import React from 'react';
import UserPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import s from "./Users.module.css";
import {UserType} from "./Users";

type UserPropsType = {
    unfollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
    user: UserType
    followingInProgress: Array<number>
}
export const User = ({user, ...props}: UserPropsType) => {
    const imgUser = user.photos.small !== null ? user.photos.small : UserPhoto
    const isDisabled = props.followingInProgress.some(id => id === user.id)
    const unfollowHandler = () => props.unfollowThunkCreator(user.id)
    const followHandler = () => props.followThunkCreator(user.id)
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img className={s.photo} src={imgUser} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button
                                disabled={isDisabled}
                                onClick={unfollowHandler}>
                                Unfollow
                            </button>
                            : <button
                                disabled={isDisabled}
                                onClick={followHandler}>
                                Follow
                            </button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status && 'I am so lazy to write status'}</div>
                    </span>
                {/*<span>
                        <div>Belarus</div>
                        <div>Minsk</div>
                    </span>*/}
                </span>
        </div>
    );
};


import React from 'react';
import UserPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import s from "./Users.module.css";
import {UserType} from "./Users";
import {Button, Card} from "antd";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";

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
        <Card style={{width: 300, margin: '20px 0px', textAlign: 'center' }}
              title={user.name}>

            <div className={s.userBlock}>
                <NavLink to={'/profile/' + user.id}>
                    <img className={s.photo} src={imgUser} alt=""/>
                </NavLink>
                <div>
                    {user.followed
                        ? <Button
                            icon={<CloseOutlined />}
                            disabled={isDisabled}
                            onClick={unfollowHandler}>
                            Unfollow
                        </Button>
                        : <Button
                            icon={<CheckOutlined />}
                            disabled={isDisabled}
                            onClick={followHandler}>
                            Follow
                        </Button>}
                </div>

                <p> {user.status || 'I am so lazy to write status'} </p>
            </div>
        </Card>
    );
};


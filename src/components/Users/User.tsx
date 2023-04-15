import React from 'react';
import UserPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import s from "./Users.module.css";
import {UserType} from "./Users";
import {Button, Card} from "antd";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {followThunkCreator, unfollowThunkCreator} from "redux/reducers/userReducer";
import {useAppSelector} from "redux/ReduxStore";

type Props = {
    user: UserType
}
export const User: React.FC<Props> = ({user}) => {
    const dispatch = useDispatch()
    const followingInProgress = useAppSelector(state => state.usersPage.followingInProgress)

    const imgUser = user.photos.small !== null ? user.photos.small : UserPhoto
    const isDisabled = followingInProgress.some(id => id === user.id)
    const unfollowHandler = () => dispatch(unfollowThunkCreator(user.id))
    const followHandler = () => dispatch(followThunkCreator(user.id))
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


import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/userReducer";
import {AppStateType} from "../../redux/ReduxStore";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    users: UserType[]
}
export type dispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): dispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID)) // {type: FOLLOW, userID: userID}
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID)) // {type: UNFOLLOW, userID: userID}
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/userReducer";
import {AppStateType} from "../../redux/ReduxStore";
import {Dispatch} from "redux";
import {UserC} from "./UserC";

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type dispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UserC)
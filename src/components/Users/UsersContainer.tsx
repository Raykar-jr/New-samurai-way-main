import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {
    followSuccess, followThunkCreator, getUsersThunkCreator,
    setCurrentPage, setPageSize,
    stateUsersType,
    unfollowSuccess, unfollowThunkCreator
} from "redux/reducers/userReducer";
import {AppStateType} from "redux/ReduxStore";
import {Preloader} from "comma/Preloader/Preloader";


export class UserWithApi extends React.Component<any, any> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number, pageSize: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setPageSize(pageSize)
        this.props.getUsers(pageNumber, pageSize)
    }
    render () {
        return (
                <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             onPageChanged={this.onPageChanged}
                             users={this.props.users}
                             followingInProgress={this.props.followingInProgress}
                             followThunkCreator={this.props.followThunkCreator}
                             unfollowThunkCreator={this.props.unfollowThunkCreator}
                    />}
                </>
        );
    }
}

type MapStateToPropsType = stateUsersType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export type dispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setPageSize: (pageSize: number) => void

}

export const UsersContainer = connect(mapStateToProps,
    {follow: followSuccess,unfollow: unfollowSuccess,setCurrentPage, getUsers: getUsersThunkCreator, followThunkCreator, unfollowThunkCreator, setPageSize })(UserWithApi)


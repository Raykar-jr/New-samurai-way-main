import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {
    followSuccess, followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    stateUsersType,
    unfollowSuccess, unfollowThunkCreator
} from "../../redux/reducers/userReducer";
import {AppStateType} from "../../redux/ReduxStore";
import {Preloader} from "../../comma/Preloader/Preloader";


export class UserWithApi extends React.Component<any, any> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
       /* this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount/300)
            })*/
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
       /* this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })*/

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

}
/*const mapDispatchToProps = (dispatch: Dispatch): dispatchPropsType => {
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

export const UsersContainer = connect(mapStateToProps,
    {follow: followSuccess,unfollow: unfollowSuccess,setCurrentPage, getUsers: getUsersThunkCreator, followThunkCreator, unfollowThunkCreator })(UserWithApi)


import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers, stateUsersType,
    toggleIsFetching,
    unfollow
} from "../../redux/userReducer";
import {AppStateType} from "../../redux/ReduxStore";
import axios from "axios";
import {Preloader} from "../../comma/Preloader/Preloader";

export class UserWithApi extends React.Component<any, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount/300)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })

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
                             follow={this.props.follow}
                             unfollow={this.props.unfollow}
                             users={this.props.users}
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
        isFetching: state.usersPage.isFetching
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
    {follow,unfollow,setUsers,setCurrentPage,setTotalCount,toggleIsFetching })(UserWithApi)


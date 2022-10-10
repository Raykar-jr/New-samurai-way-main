import {UserType} from "../../components/Users/Users";
import {ActionTypes} from "../actionTypes";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

export type stateUsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

let initialState: stateUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const userReducer = (state: stateUsersType = initialState, action: ActionTypes): stateUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state, followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
export const followSuccess = (userID: number) => {
    return {type: FOLLOW, userID: userID}
}
export const unfollowSuccess = (userID: number) => {
    return {type: UNFOLLOW, userID: userID}
}
export const setUsers = (users: UserType[]) => {
    return {type: SET_USERS, users}
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalCount = (totalCount: number) => {
    return {type: SET_TOTAL_COUNT, totalCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}
export const toggleIsFollowing = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId} as const)


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount / 300))
            })
    }
}

export const followThunkCreator = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    usersAPI.followUser(userId).then(data => {
        if (data.resultCode === 0) {
           dispatch(followSuccess(userId))
        }
        dispatch(toggleIsFollowing(false, userId))
    })
}

export const unfollowThunkCreator = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    usersAPI.unfollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleIsFollowing(false, userId))
    })
}




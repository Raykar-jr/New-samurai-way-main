import {ActionTypes} from "./Store";
import {UserType} from "../components/Users/Users";
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type stateUsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: stateUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
            return {...state, currentPage: action.currentPage }
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}
export const followAC = (userID: number) => {
    return {type: FOLLOW, userID: userID}
}
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, userID: userID}
}
export const setUsersAC = (users: UserType[]) => {
    return {type: SET_USERS, users}
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalCountAC = (totalCount: number) => {
    return {type: SET_TOTAL_COUNT, totalCount} as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}


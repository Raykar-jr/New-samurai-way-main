import {ActionTypes} from "./Store";
import {UserType} from "../components/Users/Users";
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type stateUsersType = {
    users: UserType[]
}

let initialState: stateUsersType = {
    users: [
       /* {id: 1, photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', followed: true, status: 'Lorem ipsum dolor sit amet', fullName: 'Kiril K.', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', followed: false, status: 'Mauris auctor blandit auctor', fullName: 'Vasya T.', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 3, photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', followed: false, status: 'Vestibulum id orci metus', fullName: 'Petya I.', location: {city: 'Moscow', country: 'Russia'}},
        {id: 4, photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', followed: false, status: 'Vestibulum eu tempus sapien', fullName: 'Angel P.', location: {city: 'Minsk', country: 'Belarus'}},*/
    ],
}

export const userReducer = (state: stateUsersType = initialState, action: ActionTypes): stateUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
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
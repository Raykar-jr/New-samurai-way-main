import {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from "../reducers/profileReducer";
import {sendNewMessageAC, updateNewMessageAC} from "../reducers/dialogsReducer";
import {setCurrentPage, setTotalCount, toggleIsFetching, toggleIsFollowing} from "../reducers/userReducer";
import {UserType} from "../../components/Users/Users";

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type SendNewMessageActionType = ReturnType<typeof sendNewMessageAC>
export type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageAC>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type SetTotalCountAT = ReturnType<typeof setTotalCount>
export type ToggleIsFetching = ReturnType<typeof toggleIsFetching>
export type SetUserProfile = ReturnType<typeof setUserProfile>
export type ToggleIsFollowing = ReturnType<typeof toggleIsFollowing>

export type FollowAT = { type: 'FOLLOW', userID: number }
export type UnfollowAT = { type: 'UNFOLLOW', userID: number }
export type SetUsersAT = { type: 'SET_USERS', users: UserType[] }

export type ActionTypes = UpdateNewPostTextActionType
    | AddPostActionType
    | SendNewMessageActionType
    | UpdateNewMessageActionType
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalCountAT
    | ToggleIsFetching
    | SetUserProfile
    | ToggleIsFollowing
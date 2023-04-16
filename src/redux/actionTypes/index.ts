import {
    addPost, removePost, savePhotoAC,
    setUserProfile,
    setUserStatus,
} from "../reducers/profileReducer";
import {sendNewMessageAC} from "../reducers/dialogsReducer";
import {setCurrentPage, setPageSize, setTotalCount, toggleIsFetching, toggleIsFollowing} from "../reducers/userReducer";
import {UserType} from "components/Users/Users";

export type AddPostActionType = ReturnType<typeof addPost>
export type RemovePostAT = ReturnType<typeof removePost>
export type SendNewMessageActionType = ReturnType<typeof sendNewMessageAC>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type SetTotalCountAT = ReturnType<typeof setTotalCount>
export type ToggleIsFetching = ReturnType<typeof toggleIsFetching>
export type SetUserProfile = ReturnType<typeof setUserProfile>
export type ToggleIsFollowing = ReturnType<typeof toggleIsFollowing>
export type SetUserStatus = ReturnType<typeof setUserStatus>
export type savePhotoAT = ReturnType<typeof savePhotoAC>
export type SetPageSizeAT = ReturnType<typeof setPageSize>

export type FollowAT = { type: 'FOLLOW', userID: number }
export type UnfollowAT = { type: 'UNFOLLOW', userID: number }
export type SetUsersAT = { type: 'SET_USERS', users: UserType[] }

export type ActionTypes =
    | AddPostActionType
    | SendNewMessageActionType
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalCountAT
    | ToggleIsFetching
    | SetUserProfile
    | ToggleIsFollowing
    | SetUserStatus
    | savePhotoAT
    | SetPageSizeAT
    | RemovePostAT
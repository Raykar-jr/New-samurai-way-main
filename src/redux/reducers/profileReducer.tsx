import {ActionTypes} from "../actionTypes";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

export type PostDataType = {
    id: number
    message: string
    likeCounts: number
}
type ProfileInitialStateType = typeof initialState

export const addPostActionCreator  = () => {
    return { type: ADD_POST } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return { type: UPDATE_NEW_POST_TEXT, text: text } as const
}
export const setUserProfile = (profile: any) => {
    return { type: SET_USER_PROFILE, profile } as const
}
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const)

const initialState = {
    postData: [
        {id: 1, message: 'Hello, how are you?', likeCounts: 12},
        {id: 2, message: 'It is my first post', likeCounts: 13},
    ] as PostDataType[],
    newPostText: '',
    profile: null,
    status: '',
}
export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionTypes): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {id: 3, message: state.newPostText, likeCounts: 0}
            return {...state, postData: [...state.postData, newPost], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.text}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(data => {
                dispatch(setUserProfile(data))
            }
        )
}

export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(data => {
            dispatch(setUserStatus(data))
        })
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }

        })
}
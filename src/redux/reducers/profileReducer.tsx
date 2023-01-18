import {ActionTypes} from "../actionTypes";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

export type PostDataType = {
    id: string
    message: string
    likeCounts: number
}
type ProfileInitialStateType = typeof initialState

// actions
export const addPostActionCreator  = (newPostText: string) => ({ type: ADD_POST, newPostText } as const)
export const setUserProfile = (profile: any) => ({ type: SET_USER_PROFILE, profile } as const)
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const)

const initialState = {
    postData: [
        {id: v1(), message: 'Hello, how are you?', likeCounts: 12},
        {id: v1(), message: 'It is my first post', likeCounts: 13},
    ] as PostDataType[],
    profile: null,
    status: '',
}
export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionTypes): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {id: v1(), message: action.newPostText, likeCounts: 0}
            return {...state, postData: [...state.postData, newPost]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

// thunks
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
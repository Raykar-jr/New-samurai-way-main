import {ActionTypes} from "../actionTypes";
import {Dispatch} from "redux";
import {profileAPI} from "api";
import {v1} from "uuid";
import {ProfileType} from "components/Profile/Profile";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SAVE_MAIN_PHOTO = 'SAVE_MAIN_PHOTO'
const REMOVE_POST = 'REMOVE_POST'

export type PostDataType = {
    id: string
    message: string
    likeCounts: number
}
type ProfileInitialStateType = {
    postData: PostDataType[]
    profile: null | ProfileType
    status: string
}
// actions
export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const removePost = (postId: string) => ({type: REMOVE_POST, postId} as const)
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const)
export const savePhotoAC = (photo: PhotoType) => ({type: SAVE_MAIN_PHOTO, photo} as const)



const initialState: ProfileInitialStateType = {
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
            return {...state, postData: [newPost, ...state.postData ]}
        case REMOVE_POST:
              return {...state, postData: state.postData.filter(p => p.id !== action.postId)}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case SAVE_MAIN_PHOTO:
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: action.photo} }
        default:
            return state
    }
}

// thunks
export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const profile = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(profile))
}
export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    const status = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(status))
}
export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateUserStatus(status)
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
export const saveMainPhoto = (photoFile: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(photoFile)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoAC(response.data.data.photos))
    }
}

// types
type PhotoType = {
       large: string
       small: string
}
import {ActionTypes, PostDataType, ProfilePageType, UpdateNewPostTextActionType} from "./Store";
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export const addPostActionCreator  = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextActionCreator = (text: string):UpdateNewPostTextActionType => {
    return { type: UPDATE_NEW_POST_TEXT, text: text }
}
const initialState = {
    postData: [
        {id: 1, message: 'Hello, how are you?', likeCounts: 12},
        {id: 2, message: 'It is my first post', likeCounts: 13},
    ],
    newPostText: '',

}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    if (action.type === ADD_POST) {
        let newPost: PostDataType = {id: 3, message: state.newPostText, likeCounts: 0}
        return {...state, postData: [...state.postData, newPost], newPostText: ''}
        // state.postData.push(newPost)
        // state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        return {...state, newPostText: action.text}
        // state.newPostText = action.text
    }
    return state
}
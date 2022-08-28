import {ActionTypes, PostDataType, ProfilePageType, UpdateNewPostTextActionType} from "./State";
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

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {

    if (action.type === ADD_POST) {
        let newPost: PostDataType = {id: 3, message: state.newPostText, likeCounts: 0}
        state.postData.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.text
    }

    return state
}
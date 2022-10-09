import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, PostDataType, updateNewPostTextActionCreator} from "../../../../redux/reducers/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/ReduxStore";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    posts: PostDataType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator()) // {type: 'ADD-POST'}
        },
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text) // {type: 'UPDATE-NEW-POST-TEXT', text: text}
            dispatch(action)
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
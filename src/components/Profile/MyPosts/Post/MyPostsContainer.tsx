import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
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
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
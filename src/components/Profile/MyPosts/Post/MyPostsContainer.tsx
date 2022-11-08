import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, PostDataType} from "../../../../redux/reducers/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/ReduxStore";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    posts: PostDataType[]
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.postData,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText)) // {type: 'ADD-POST'}
        },
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
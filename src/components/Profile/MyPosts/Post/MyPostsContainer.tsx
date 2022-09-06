import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";


type MyPostsContainerPropsType = {
    store: any
}
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store.getState()

    const addPostHandler = () => {
        props.store.dispatch(addPostActionCreator()) // {type: 'ADD-POST'}
    }
    const onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text) // {type: 'UPDATE-NEW-POST-TEXT', text: text}
        props.store.dispatch(action)
    }
    return (
        <div>
            <MyPosts addPost={addPostHandler}
                     updateNewPostText={onPostChange}
                     posts={state.profilePage.postData}
                     newPostText={state.profilePage.newPostText}
            />
        </div>
    )
}
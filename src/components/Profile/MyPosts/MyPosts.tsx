import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/reducers/profileReducer";
import {AddPostReduxForm, FormDataAddPostType} from "./AddPostForm";


type MyPostsPropsType = {
    posts: PostDataType[]
    addPost: (newPostText: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {
    const postElements = props.posts.map(el => <Post key={el.id}
                                                     id={el.id}
                                                     likeCounts={el.likeCounts}
                                                     message={el.message}/>)

    const addPostHandler = (formData: FormDataAddPostType) => {
        props.addPost(formData.newPostMessage)
    }

    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>

                <AddPostReduxForm onSubmit={addPostHandler}/>

                <div className={s.posts}>
                    {postElements}
                </div>

            </div>
        </div>
    )
}


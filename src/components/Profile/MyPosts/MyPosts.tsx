import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPost} from "redux/reducers/profileReducer";
import {MessageForm} from "components/Dialogs/MessageForm";
import {useDispatch} from "react-redux";
import {useAppSelector} from "redux/ReduxStore";


export const MyPosts = () => {
    const dispatch = useDispatch()
    const posts = useAppSelector(state => state.profilePage.postData)
    const postElements = posts.map(el => <Post key={el.id}
                                               id={el.id}
                                               likeCounts={el.likeCounts}
                                               message={el.message}/>)

    const submitHandler = (data: string) => dispatch(addPost(data))
    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <MessageForm onSubmitForm={submitHandler}/>

                <div className={s.posts}>
                    {postElements}
                </div>

            </div>
        </div>
    )
}


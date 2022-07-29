import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <div className={s.posts}>
                    <Post likeCounts={12} message={'Hello, how are you?'}/>
                    <Post likeCounts={13} message={'It is my first post'}/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}
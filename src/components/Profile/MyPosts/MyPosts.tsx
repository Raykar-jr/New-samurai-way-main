import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>
                    </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post likeCounts={12} message={'Hello, how are you?'}/>
                    <Post likeCounts={13} message={'It is my first post'}/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}
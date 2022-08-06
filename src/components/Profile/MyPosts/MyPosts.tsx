import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    const postData = [
        {id: 1, message: 'Hello, how are you?', likeCounts: 12},
        {id: 2, message: 'It is my first post', likeCounts: 13},

    ]
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
                    <Post id={postData[0].id} likeCounts={postData[0].likeCounts} message={postData[0].message}/>
                    <Post id={postData[0].id} likeCounts={postData[0].likeCounts} message={postData[1].message}/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}
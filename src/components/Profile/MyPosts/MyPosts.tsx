import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/State";




type MyPostsPropsType = {
    postData: PostDataType[]
}
export const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.postData.map(el => <Post key={el.id} id={el.id} likeCounts={el.likeCounts} message={el.message}/>)
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
                    {postElements}
                    {/*<Post id={postData[0].id} likeCounts={postData[0].likeCounts} message={postData[0].message}/>*/}
                    {/*<Post id={postData[0].id} likeCounts={postData[0].likeCounts} message={postData[1].message}/>*/}
                    {/*<Post/>*/}
                </div>
            </div>
        </div>
    )
}
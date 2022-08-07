import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/State";


type MyPostsPropsType = {
    postData: PostDataType[]
    addPost: (message: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.postData.map(el => <Post key={el.id}
                                                        id={el.id}
                                                        likeCounts={el.likeCounts}
                                                        message={el.message}/>)
    const addPost = () => {
        if (newPostElement && newPostElement.current) {
            let messagePost = newPostElement.current.value
            props.addPost(messagePost)
            newPostElement.current.value = ''
        }
    }
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
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
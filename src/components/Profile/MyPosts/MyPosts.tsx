import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionTypes, addPostActionCreator, ProfilePageType, updateNewPostTextActionCreator} from "../../../redux/State";


type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void

}
export const MyPosts = (props: MyPostsPropsType) => {


    const postElements = props.profilePage.postData.map(el => <Post key={el.id}
                                                                    id={el.id}
                                                                    likeCounts={el.likeCounts}
                                                                    message={el.message}/>)
    // const addPost = () => {
    //     if (newPostElement && newPostElement.current) {
    //         let messagePost = newPostElement.current.value
    //         props.addPost(messagePost)
    //         newPostElement.current.value = ''
    //     }
    // }
    // let messagePost = newPostElement.current?.value  внимание на ? - обойти possibly null
    // props.addPost(newPostElement.current ? newPostElement.current.value : "") // если newPostElement существует, то...
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        // props.addPost()
        // props.dispatch( {type: 'ADD-POST'} )
        props.dispatch( addPostActionCreator() )
    }
    const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = newPostElement.current?.value
        if (text) {
            // props.updateNewPostText(text)
            /*props.dispatch( {type: 'UPDATE-NEW-POST-TEXT', text: text} )*/
            let action = updateNewPostTextActionCreator(text)
            props.dispatch(action)
            //     props.dispatch(action)
        }
    }
    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>

                <div><textarea onChange={onChangeTextAreaHandler}
                               value={props.profilePage.newPostText}
                               ref={newPostElement}
                ></textarea></div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
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